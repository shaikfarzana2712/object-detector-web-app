img="";
status="";
objects=[];

function preload(){
  img=loadImage('dining room.jpg')
}

function setup() {
  canvas=createCanvas(640,420);
  canvas.center();
  objectDetector=ml5.objectDetector('cocossd',modelLoded)
  document.getElementById("status").innerHTML="Status:Detecting Object"
  }
function draw() {
    image(img,0,0,640,420)
    if(status!=""){
      for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status:Object Detected";

        fill("#FF0000");
        Percent=floor(objects[i].confidence*100);
        text(objects[i].label+""+Percent+"%",objects[i].x,objects[i].y);
        noFill();
        stroke("#FF0000");
        rect(objects[1].x,objects[i].y,objects[i].width,objects[i].height)
      }
    }
    
   }

   function modelLoded(){
    console.log("Model Loaded!")
    status=true;
    objectDetector.detect(img,gotResult);
   }

   function gotResult(error,results){
   if(error){
    console.log(error);
   }
   console.log(results);
   objects=results;
  }