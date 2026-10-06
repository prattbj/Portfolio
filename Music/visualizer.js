const canvas = document.getElementById("visualizer");

let audioContext = null;
let source = null;
let analyserLeft = null;
let analyserRight = null;
let splitter = null;
const fftSize = 2048;

const bufferLength = fftSize / 2; 


let data, processedData, timeData, leftFreqView, rightFreqView, leftTimeView, rightTimeView;

function initVisualizer(audio) {
    if (!audioContext) {
        audioContext = new AudioContext();
        splitter = audioContext.createChannelSplitter(2);
        analyserLeft = audioContext.createAnalyser();
        analyserRight = audioContext.createAnalyser();
        
        analyserLeft.fftSize = fftSize;
        analyserRight.fftSize = fftSize;
        source = audioContext.createMediaElementSource(audio);

        source.connect(splitter);
        splitter.connect(analyserLeft, 0);
        splitter.connect(analyserRight, 1);
        source.connect(audioContext.destination);

        // FIX: Pre-allocate the arrays and shared views right here
        data = new Uint8Array(bufferLength * 2);
        processedData = new Float32Array(bufferLength * 2);
        timeData = new Float32Array(bufferLength * 2);

        leftFreqView = data.subarray(0, bufferLength);
        rightFreqView = data.subarray(bufferLength, bufferLength * 2);
        leftTimeView = timeData.subarray(0, bufferLength);
        rightTimeView = timeData.subarray(bufferLength, bufferLength * 2);
    }

    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }
    if (document.readyState === 'complete') {
        setup();
    } else {
        window.addEventListener('load', setup);
    }
}

/**
 * Fetches, reads, and compiles GLSL; sets two global variables; and begins
 * the animation
 */
async function setup() {
    window.gl = document.querySelector('canvas').getContext('webgl2')
    const vs = await fetch('vertex.glsl').then(res => res.text())
    const fs = await fetch('fragment.glsl').then(res => res.text())
    window.program = compile(vs,fs)
    
    
    audioTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, audioTexture);

    // Set texturing parameters so it doesn't try to mipmap or interpolate
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    
    // Create an empty dummy Vertex Array Object (VAO) required by WebGL2 
    // to allow draw calls without manual buffer bindings
    const vao = gl.createVertexArray();

    gl.bindVertexArray(vao);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    gl.disable(gl.DEPTH_TEST);
    
    tick(0) // <- ensure this function is called only once, at the end of setup
}

/**
 * Compiles two shaders, links them together, looks up their uniform locations,
 * and returns the result. Reports any shader errors to the console.
 *
 * @param {string} vs_source - the source code of the vertex shader
 * @param {string} fs_source - the source code of the fragment shader
 * @return {WebGLProgram} the compiled and linked program
 */
function compile(vs_source, fs_source) {
    const vs = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vs, vs_source)
    gl.compileShader(vs)
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(vs))
        throw Error("Vertex shader compilation failed")
    }

    const fs = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fs, fs_source)
    gl.compileShader(fs)
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(fs))
        throw Error("Fragment shader compilation failed")
    }

    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program))
        throw Error("Linking failed")
    }
    
    const uniforms = {}
    for(let i=0; i<gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS); i+=1) {
        let info = gl.getActiveUniform(program, i)
        uniforms[info.name] = gl.getUniformLocation(program, info.name)
    }
    program.uniforms = uniforms

    return program
}

/**
 * Runs the animation using requestAnimationFrame. This is like a loop that
 * runs once per screen refresh, but a loop won't work because we need to let
 * the browser do other things between ticks. Instead, we have a function that
 * requests itself be queued to be run again as its last step.
 * 
 * @param {Number} milliseconds - milliseconds since web page loaded; 
 *        automatically provided by the browser when invoked with
 *        requestAnimationFrame
 */
function tick(milliseconds) {
    const seconds = milliseconds / 1000
    draw(seconds)
    requestAnimationFrame(tick) // <- only call this here, nowhere else
}
/**
 * Clears the screen, sends two uniforms to the GPU, and asks the GPU to draw
 * several points. Note that no geometry is provided; the point locations are
 * computed based on the uniforms in the vertex shader.
 *
 * @param {seconds} - the amount of time that has passed
 */
function draw(seconds) {
    if (!splitter || !window.gl || !window.program) {
        return;
    }

    const width = canvas.width;
    const height = canvas.height;

    gl.viewport(0, 0, width, height);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Using pre-allocated views setup in initVisualizer
    analyserLeft.getByteFrequencyData(leftFreqView);
    analyserRight.getByteFrequencyData(rightFreqView);

    function amplitude(value) {
        const normalized = value / 255;
        return Math.pow(normalized, 2.0);
    }

    // Populate pre-allocated float array
    for (let i = 0; i < bufferLength * 2; i++) {
        processedData[i] = amplitude(data[i]);
    }
    
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, audioTexture);
    gl.texImage2D(
        gl.TEXTURE_2D, 
        0, 
        gl.R32F, 
        bufferLength * 2, // Width is now correctly 2048 total pixels (1024 Left + 1024 Right)
        1,            
        0, 
        gl.RED, 
        gl.FLOAT, 
        processedData
    );

    gl.useProgram(window.program);
    if (window.program.uniforms["resolution"]) {
        gl.uniform2f(window.program.uniforms["resolution"], canvas.width, canvas.height);
    }
    if (window.program.uniforms["u_amplitudeTex"]) {
        gl.uniform1i(window.program.uniforms["u_amplitudeTex"], 0);
    }
    if (window.program.uniforms["u_totalBins"]) {
        gl.uniform1i(window.program.uniforms["u_totalBins"], bufferLength * 2);
    }
    if (window.program.uniforms["u_time"]) {
        gl.uniform1f(window.program.uniforms["u_time"], seconds);
    }
    if (window.program.uniforms["u_gain"]) {
        analyserLeft.getFloatTimeDomainData(leftTimeView);
        analyserRight.getFloatTimeDomainData(rightTimeView);
        
        let sum = 0;
        for (let i = 0; i < bufferLength * 2; i++) {
            sum += timeData[i] * timeData[i];
        }
        // FIX: Wrapped denominator in parentheses so division happens properly
        const rms = Math.sqrt(sum / (bufferLength * 2));
        gl.uniform1f(window.program.uniforms["u_gain"], rms); 
    }

    // Adjust this vertex multiplier depending on how many points your vertex shader expects per bin
    gl.drawArrays(gl.TRIANGLES, 0, bufferLength * 24);
}


function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;
    
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
