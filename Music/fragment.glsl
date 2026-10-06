#version 300 es
precision highp float;
out vec4 color;
in float amplitude;
in vec2 pos;
uniform vec2 resolution;
void main() {
    float dist = length(pos);
    color = vec4((1.0 + log(amplitude + 0.0001)) * dist, 0.0, (-log(amplitude + 0.0001)), 2.0 / 3.14 * atan(amplitude * 3.0));
    //color = vec4(1.0 + log(amplitude + 0.0001), 1.0 + log(dist + 0.0001), -log(amplitude + 0.0001), max(dist, 0.1));
}
