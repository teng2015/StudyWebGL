/**
 * Created by wayne on 16/3/21.
 */
function main(){
    var canvas = document.getElementById("webgl");

    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log("获取WebGL上下文失败!");
        return;
    }

    gl.clearColor(1,0,0,1);
    gl.clear(gl.COLOR_BUFFER_BIT);
}