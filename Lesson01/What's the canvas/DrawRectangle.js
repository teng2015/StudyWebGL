/**
 * Created by wayne on 16/3/21.
 */
function main(){
    //DOM获取canvas
    var canvas = document.getElementById("example");
    //获取不到canvas时进行提示,并结束该函数
    if(!canvas){
        console.log("获取不到canvas元素对象!");
        return;
    }

    //获取绘图上下文
    var ctx = canvas.getContext("2d");
    //fillStyle属性设置或返回用于填充绘画的颜色、渐变或模式
    //颜色可用16进制表示 如: ctx.fillStyle = "#0000ff"
    ctx.fillStyle = "rgba(0,0,255,1.0)";
    //fillStyle渐变
    //var gradient = ctx.createLinearGradient(0,0,400,400);
    //gradient.addColorStop(0,"white");
    //gradient.addColorStop(1,"black");
    //ctx.fillStyle=gradient;

    ctx.fillRect(0,0,500,500);
}
