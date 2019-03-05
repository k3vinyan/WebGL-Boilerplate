"use strict";

gEngine.VertexBuffer = (function() { 

    let vertexBuffer = null;

    const squareVertices = [
         0.5,  0.5, 0.0,
        -0.5,  0.5, 0.0,
         0.5, -0.5, 0.0,
        -0.5, -0.5, 0.0
    ]

    const getVertexBufferRef = function() { return vertexBuffer; }

    const initialize = function() {
        const gl = gEngine.Core.getGL();
        vertexBuffer = gl.createBuffer();

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(squareVertices), gl.STATIC_DRAW);

    }

    const publicObj = {
        getVertexBufferRef,
        initialize: initialize
    }

    return publicObj;
}());