const canvas = document.getElementById("visualizer");
const ctx = canvas.getContext("2d");

let audioContext = null;
let analyser = null;
let source = null;

function initVisualizer(audio) {
    if (!audioContext) {
        audioContext = new AudioContext();

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;

        source = audioContext.createMediaElementSource(audio);

        source.connect(analyser);
        analyser.connect(audioContext.destination);
    }

    if (audioContext.state === 'suspended') {
        audioContext.resume();
    }

    draw();
}


function draw() {
    requestAnimationFrame(draw);

    if (!analyser) {
        return;
    }

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const bufferLength = analyser.frequencyBinCount;
    const data = new Uint8Array(bufferLength);

    analyser.getByteFrequencyData(data);

    /*
     * Convert amplitude to a more useful visual range.
     *
     * Raw FFT values are 0-255, but audio amplitude is much
     * better represented using a logarithmic scale.
     */
    function amplitude(value) {
        const normalized = value / 255;

        // Increase the visual resolution around quieter sounds
        return Math.pow(normalized, 0.5);
    }

    /*
     * Draw frequency bins logarithmically.
     *
     * This gives much more horizontal space to the lower
     * frequencies and compresses the extremely high frequencies.
     */
    for (let x = 0; x < width; x++) {

        // 0 -> 1
        const normalizedX = x / width;

        // Logarithmic frequency mapping
        const index = Math.floor(
            Math.pow(normalizedX, 2) * (bufferLength - 1)
        );

        const value = data[index];

        const normalized = value / 255;

        // Logarithmic amplitude scaling
        const amplitude = Math.log10(1 + 9 * normalized);

        // Give low frequencies more height
        const frequencyWeight = 1 - 0.7 * (index / bufferLength);

        const level = amplitude * frequencyWeight;

        const barHeight = level * height;
        // const level = amplitude(value);

        // const barHeight = level * height;

        const y = height - barHeight;

        /*
         * Amplitude color:
         *
         * 0.0 = blue
         * 0.5 = yellow
         * 1.0 = red
         */
        const hue = 240 - level * 240;

        ctx.fillStyle = `hsl(${hue}, 100%, 50%)`;

        ctx.fillRect(
            x,
            y,
            1,
            barHeight
        );
    }
}



function resizeCanvas() {
    const dpr = window.devicePixelRatio || 1;

    canvas.width = canvas.clientWidth * dpr;
    canvas.height = canvas.clientHeight * dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
// /**
//  * Fetches, reads, and compiles GLSL; sets two global variables; and begins
//  * the animation
//  */
// async function setup() {
//     window.gl = document.querySelector('canvas').getContext('webgl2')
//     const vs = await fetch('vertex.glsl').then(res => res.text())
//     const fs = await fetch('fragment.glsl').then(res => res.text())
//     window.program = compile(vs,fs)
    
//     tick(0) // <- ensure this function is called only once, at the end of setup
// }

// /**
//  * Compiles two shaders, links them together, looks up their uniform locations,
//  * and returns the result. Reports any shader errors to the console.
//  *
//  * @param {string} vs_source - the source code of the vertex shader
//  * @param {string} fs_source - the source code of the fragment shader
//  * @return {WebGLProgram} the compiled and linked program
//  */
// function compile(vs_source, fs_source) {
//     const vs = gl.createShader(gl.VERTEX_SHADER)
//     gl.shaderSource(vs, vs_source)
//     gl.compileShader(vs)
//     if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
//         console.error(gl.getShaderInfoLog(vs))
//         throw Error("Vertex shader compilation failed")
//     }

//     const fs = gl.createShader(gl.FRAGMENT_SHADER)
//     gl.shaderSource(fs, fs_source)
//     gl.compileShader(fs)
//     if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
//         console.error(gl.getShaderInfoLog(fs))
//         throw Error("Fragment shader compilation failed")
//     }

//     const program = gl.createProgram()
//     gl.attachShader(program, vs)
//     gl.attachShader(program, fs)
//     gl.linkProgram(program)
//     if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
//         console.error(gl.getProgramInfoLog(program))
//         throw Error("Linking failed")
//     }
    
//     const uniforms = {}
//     for(let i=0; i<gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS); i+=1) {
//         let info = gl.getActiveUniform(program, i)
//         uniforms[info.name] = gl.getUniformLocation(program, info.name)
//     }
//     program.uniforms = uniforms

//     return program
// }


// /**
//  * Runs the animation using requestAnimationFrame. This is like a loop that
//  * runs once per screen refresh, but a loop won't work because we need to let
//  * the browser do other things between ticks. Instead, we have a function that
//  * requests itself be queued to be run again as its last step.
//  * 
//  * @param {Number} milliseconds - milliseconds since web page loaded; 
//  *        automatically provided by the browser when invoked with
//  *        requestAnimationFrame
//  */
// function tick(milliseconds) {
//     const seconds = milliseconds / 1000
//     draw(seconds)
//     requestAnimationFrame(tick) // <- only call this here, nowhere else
// }


// /**
//  * Clears the screen, sends two uniforms to the GPU, and asks the GPU to draw
//  * several points. Note that no geometry is provided; the point locations are
//  * computed based on the uniforms in the vertex shader.
//  *
//  * @param {seconds} - the amount of time that has passed
//  */
// function draw(seconds) {
    
    
// }

// const canvas = document.getElementById('visualizer');

// window.addEventListener('load', setup)