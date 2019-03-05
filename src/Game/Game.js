function Game(canvasID) {

    gEngine.Core.initializelGL(canvasID);
    const gl = gEngine.Core.getGL();
    this.shader = new SimpleShader("src/GLSLShaders/vertexShader.glsl", "src/GLSLShaders/fragmentShader.glsl");
    this.shader.activateShader([0, 1, 1, 1.0]);


    gEngine.Core.clearCanvas([0, 0, 0, 1]);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
}