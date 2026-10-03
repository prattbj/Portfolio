
const vertices = new Float32Array(
    [
        //Bottom Rect
        0.0, 0, 
        .8, 0, 
        .8, 0.25, 
        0.0, 0.25,
        //Top Rect
        0.0, 1, 
        0.8, 1, 
        .8, 0.75, 
        0.0, 0.75,
        //Center bar
        0.20, 0.25,
        0.20, 0.75,
        0.60, 0.75,
        0.60, 0.25

    ]
)
const indices = new Uint16Array(
    [
        0, 1, 2, 
        0, 2, 3,
        4, 5, 6, 
        4, 6, 7,
        8, 9, 10,
        8, 10, 11
    ]
)

/**
 * Fetches, reads, and compiles GLSL; sets two global variables; and begins
 * the animation
 */
async function setup() {
    window.gl = document.querySelector('canvas').getContext('webgl2')
    const vs = await fetch('vertex.glsl').then(res => res.text())
    const fs = await fetch('fragment.glsl').then(res => res.text())
    window.program = compile(vs,fs)
    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
    gl.enableVertexAttribArray(0)
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0)
    const indexBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW)
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
    //const count = 6+(seconds*10)%100          // number of vertices to draw
    //const step = (seconds % 100) / 100
    const dt = accumulated === 0 ? 0 : seconds - accumulated
    accumulated = seconds
    const step = dt * 1.0
    if (gain > 0.0) 
    {
        gain -= step * .3;
    }
    theta -= step / 0.25
    bounce_theta += step / 0.25
    scale = (Math.sin(bounce_theta) + 0.2) * gain + 1.0
    const boundary = 1.0 - radius / 2
    if (go_right)
    {
        pos_x += step
        if (pos_x > boundary)
        {
            pos_x = boundary // to ensure it stays within bounds
            go_right = false
            go_up = true
        }
    } 
    else if (go_up)
    {
        pos_y += step
        if (pos_y > boundary)
        {
            pos_y = boundary
            go_up = false
            go_left = true
        }
    } 
    else if (go_left)
    {
        pos_x -= step
        if (pos_x <= -boundary)
        {
            pos_x = -boundary
            go_down = true
            go_left = false
        }
    } 
    else if (go_down)
    {
        pos_y -= step
        if (pos_y <= -boundary)
        {
            pos_y = -boundary
            go_right = true
            go_down = false
        }
    }
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.useProgram(program)
    //gl.uniform1f(program.uniforms.seconds, seconds)
    //gl.uniform1i(program.uniforms.count, count)
    const color = gl.getUniformLocation(program, "in_color")
    const matrix = gl.getUniformLocation(program, "transform")
    const translate = [ //translate to center
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        -0.4, -0.5, 0.0, 1.0,
    ]
    const rotate = [ //rotate around center
        Math.cos(theta), Math.sin(theta), 0.0, 0.0,
        -Math.sin(theta), Math.cos(theta), 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        0.0, 0.0, 0.0, 1.0,
    ]
    const transform = [ //scale by half (and perform bounce) and then move it
        0.5 * scale, 0.0, 0.0, 0.0,
        0.0, 0.5 * scale, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        pos_x, pos_y, 0.0, 1.0,
    ]
    const mat = m4mul(transform, m4mul(rotate, translate))
    gl.uniformMatrix4fv(matrix, false, mat)
    //gl.uniform4fv(color, [0.075, 0.16, 0.292, 1.0])
    const offset = 0                          // unused here, but required
    
    //gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, offset)
    
    gl.uniform4fv(color, [1.0, 0.373, 0.02, 1.0])
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, offset)
}
//i treat the texture like a circle when spinning so that it doesn't go out of bounds
const radius = Math.sqrt(.4 * .4 + .5 * .5)  
//starting position
let pos_x = -1.0 + radius / 2.0
let pos_y = -1.0 + radius / 2.0

let go_right = true
let go_left = false
let go_up = false
let go_down = false
let accumulated = 0.0
let theta = 0.0
let gain = 0.0 //i call this gain because it is the amplitude of the oscillation caused by a mouse click
let bounce_theta = 0.0
const canvas = document.getElementById('thecanvas')
canvas.addEventListener('click', function() {
    if (gain <= 0.0)
    {
        gain = 1.0
        bounce_theta = 0.0 //reset to 0.0 for a smooth motion
    }
})
window.addEventListener('load', setup)