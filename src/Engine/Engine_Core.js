"use strict";

var gEngine = gEngine || {};

gEngine.Core = (function(){

    let gl = null;

    const getGL = function() { return gl; };

    const initializelGL = function(canvasID) {

        const  canvas = document.getElementById(canvasID);
        gl = canvas.getContext("webgl") || canvas.getContext("experitmental-webgl");

        if( gl === null ) {
            alert("browser does not supported webgl");
            return null;
        }
        
        gEngine.VertexBuffer.initialize();
    }

    const clearCanvas = function(color) {
        gl.clearColor(color[0], color[1], color[2], color[3]);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }
    
    const publicObj = {
        getGL,
        initializelGL,
        clearCanvas: clearCanvas
    }

    return publicObj;

}());