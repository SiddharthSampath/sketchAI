
  $(document).ready(function() {
  $('body').css('cursor', 'pointer');
  });

  //main function for canvas
  $(function(){

  var canvas=document.getElementById("canvas");
  var ctx=canvas.getContext("2d");

  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.lineWidth=3;
  var lastX;
  var lastY;

  var mouseX;
  var mouseY;
  var canvasOffset=$("#canvas").offset();
  var offsetX=canvasOffset.left;
  var offsetY=canvasOffset.top;
  var isMouseDown=false;


  function handleMouseDown(e){
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    // Put your mousedown stuff here
    lastX=mouseX;
    lastY=mouseY;
    isMouseDown=true;
  }

  function handleMouseUp(e){
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    // Put your mouseup stuff here
    isMouseDown=false;
  }

  function handleMouseOut(e){
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    // Put your mouseOut stuff here
    isMouseDown=false;
  }

  function handleMouseMove(e){
    mouseX=parseInt(e.clientX-offsetX);
    mouseY=parseInt(e.clientY-offsetY);

    // Put your mousemove stuff here
    if(isMouseDown){
        ctx.beginPath();
        if(mode=="pen"){
            ctx.globalCompositeOperation="source-over";
            ctx.moveTo(lastX,lastY);
            ctx.lineTo(mouseX,mouseY);
            ctx.stroke();
        }else{
            ctx.globalCompositeOperation="destination-out";
            ctx.arc(lastX,lastY,5,0,Math.PI*2,false);
            ctx.fill();
        }
        lastX=mouseX;
        lastY=mouseY;
    }
  }

  $("#canvas").mousedown(function(e){handleMouseDown(e);});
  $("#canvas").mousemove(function(e){handleMouseMove(e);});
  $("#canvas").mouseup(function(e){handleMouseUp(e);});
  $("#canvas").mouseout(function(e){handleMouseOut(e);});
  //cursor change when erase is clicked and changing 'mode' everytime draw or erase is clicked
  var mode="pen";
  $("#pen").click(function(){ mode="pen";
  //context.strokeStyle = "#000";
  //context.lineWidth = 1;
  $('body').css('cursor', 'pointer');});
  $("#eraser").click(function(){ mode="eraser";
  $('body').css('cursor', 'grabbing');});

  }); // end $(function(){});
