canvas=document.getElementById("c");
ctx=canvas.getContext("2d");

color="jade";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc( 200 , 200 , 50 , 0 , 2*Math.PI);
ctx.stroke();

canvas.addEventListener( "mousedown" , my_mousedown );

function my_mousedown(e)
{
    tix=e.ClientX - canvas.offsetLeft;
    tiy=e.ClientY - canvas.offsetTop;

    circle( tix , tiy )
}

function circle( tix , tiy )
{
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc( tix , tiy , 50 , 0 , 2*Math.PI);
ctx.stroke();
}
