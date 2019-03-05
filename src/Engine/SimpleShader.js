function SimpleShader(vertexShaderPathToSource, fragmentShaderPathToSource) {

    const gl = gEngine.Core.getGL();
    this.compiledShader = null;
    this.squareVertexPositionAttribute = null;
    this.pixelColor = null;

    const vertexShader = this._loadAndCompileShader(vertexShaderPathToSource, gl.VERTEX_SHADER);
    const fragmentShader = this._loadAndCompileShader(fragmentShaderPathToSource, gl.FRAGMENT_SHADER);

    this.compileShader = gl.createProgram();
    gl.attachShader(this.compileShader, vertexShader);
    gl.attachShader(this.compileShader, fragmentShader);
    gl.linkProgram(this.compileShader);

    if(!gl.getProgramParameter(this.compileShader, gl.LINK_STATUS)) {
        alert("Linking error");
        return null;
    }

    this.squareVertexPositionAttribute = gl.getAttribLocation(this.compileShader, "squareVertexPosition");
    this.pixelColor = gl.getUniformLocation(this.compileShader, "pixelColor");

    gl.bindBuffer(gl.ARRAY_BUFFER, gEngine.VertexBuffer.getVertexBufferRef());
    gl.vertexAttribPointer(this.squareVertexPositionAttribute, 3, gl.FLOAT, false, 0, 0);
   
}

SimpleShader.prototype._loadAndCompileShader = function(shaderPathSource, shaderType) {
    
    let compiledShader = null;
    const gl = gEngine.Core.getGL();

    let xmlReq = new XMLHttpRequest();
    xmlReq.open("GET", shaderPathSource, false);

    try {
        xmlReq.send();
    } catch(e) {
        alert("xml request error");
        return null;
    }

    const shaderSource = xmlReq.responseText;

    if(shaderSource === null){
        alert("source is null");
        return null;
    }

    compiledShader = gl.createShader(shaderType);
    gl.shaderSource(compiledShader, shaderSource);
    gl.compileShader(compiledShader);


    if(!gl.getShaderParameter(compiledShader, gl.COMPILE_STATUS)) {
        alert("Shader Compiling error: ", gl.getShaderInfoLog(compiledShader))
    }

    return compiledShader;

}

SimpleShader.prototype.activateShader = function(color) {
    const gl = gEngine.Core.getGL();
    gl.useProgram(this.compileShader);
    gl.enableVertexAttribArray(this.squareVertexPositionAttribute);
    gl.uniform4fv(this.pixelColor, color)
}

