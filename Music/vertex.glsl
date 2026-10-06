#version 300 es
precision highp float;
precision highp sampler2D;

uniform sampler2D u_amplitudeTex;
uniform int u_totalBins;

out float amplitude;

uniform vec2 resolution;
//uniform float u_gain;
out vec2 pos;
void main() {
    int quadIndex = gl_VertexID / 6;
    int vertexNum = gl_VertexID % 6;

    int binsPerChannel = u_totalBins / 2;
    int cBinIndex = quadIndex % binsPerChannel;
    
    bool mirrorVertical = (quadIndex / binsPerChannel) == 1 ||
                       (quadIndex / binsPerChannel) == 3;

    bool mirrorHorizontal = (quadIndex / binsPerChannel) == 2 ||
                            (quadIndex / binsPerChannel) == 3;
    int binIndex = mirrorVertical ? cBinIndex : cBinIndex + binsPerChannel;
    float t = float(cBinIndex) / float(binsPerChannel - 1);
    float logT = pow(t, 0.5);
    float rad = logT * (3.14159 / 2.0);

    rad = mirrorHorizontal ? rad : -rad;
    rad = mirrorVertical ? 3.14159 - rad : rad;
    
    amplitude = texelFetch(
        u_amplitudeTex,
        ivec2(binIndex, 0),
        0
    ).r;
    // float amplitudePrev = texelFetch(
    //     u_amplitudeTex,
    //     ivec2(binIndex != 0 ? binIndex - 1 : binIndex, 0),
    //     0
    // ).r;
    // float amplitudeNext = texelFetch(
    //     u_amplitudeTex,
    //     ivec2(binIndex != u_totalBins - 1 ? binIndex + 1 : binIndex, 0),
    //     0
    // ).r;

    // float binWidth = 2.0 / float(binsPerChannel) * 80.0;

    // float halfWidth = binWidth * 0.5;
    // float height = 5.0;
    // vec2 corners[6];

    // corners[0] = vec2(0.0,        -halfWidth);
    // corners[1] = vec2(amplitude,  -halfWidth); //vec2(amplitudePrev,  -halfWidth); 
    // corners[2] = vec2(0.0,         halfWidth);

    // corners[3] = vec2(0.0,         halfWidth);
    // corners[4] = vec2(amplitude,  -halfWidth); //vec2(amplitudeNext,  -halfWidth); 
    // corners[5] = vec2(amplitude,   halfWidth);
    float binWidth = 2.0 / float(binsPerChannel) * 10.0;
    float halfWidth = binWidth * 0.5;

    float height = 0.05;
    float halfHeight = height * 0.5;

    // amplitude determines distance from origin
    vec2 center = vec2(amplitude, 0.0);

    vec2 corners[6];

    corners[0] = center + vec2(-halfWidth, -halfHeight);
    corners[1] = center + vec2( halfWidth, -halfHeight);
    corners[2] = center + vec2(-halfWidth,  halfHeight);

    corners[3] = center + vec2(-halfWidth,  halfHeight);
    corners[4] = center + vec2( halfWidth, -halfHeight);
    corners[5] = center + vec2( halfWidth,  halfHeight);
    vec2 p = corners[vertexNum];
    //p.y *= .5;
    //p.y *= u_gain;
    //p.x += .25;

    float c = cos(rad);
    float s = sin(rad);

    vec2 rotated = vec2(
        p.x * c - p.y * s,
        p.x * s + p.y * c
    );
    pos = rotated;
    rotated.x *= resolution.y / resolution.x;
    
    gl_Position = vec4(rotated, 0.0, 1.0);

}