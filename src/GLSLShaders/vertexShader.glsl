attribute vec3 squareVertexPosition;

void main() {
    gl_Position = vec4(squareVertexPosition, 1.0);
}