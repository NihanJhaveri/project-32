const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;
var bg = "sunrise1.png";

function preload() {
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
if(backgroundImg){
    background(backgroundImg);
}

    Engine.update(engine);
    fill("black")
    textSize(17);
    if(hour>=12){

        text("time:"+ hour%12+"PM",1000,50);
    }
    else if(hour === 0){
    text("time:12AM", 800, 50);
    }
    else{
        text("time:"+hour%12+"AM", 1000, 50);
    }

    // write code to display time in correct format here


}

async function getBackgroundImg(){
 var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 var responseJSON = await response.json();
 //console.log(responseJSON);
 var datetime = responseJSON.datetime;
 //console.log(datetime);
 hour=datetime.slice(11,13);
 console.log(hour);
 if (hour>=04 && hour>=06){
     debugger;
     bg="sunrise1.png";
 }
 else  if (hour>=06 && hour>=08){
    debugger;
    bg="sunrise2.png";
}
else  if (hour>=08 && hour>=11){
    debugger;
    bg="sunrise3.png";
}
else  if (hour>=11 && hour>=13){
    debugger;
    bg="sunrise4.png";
}
else  if (hour>=13 && hour>=15){
    debugger;
    bg="sunrise5.png";
}
else  if (hour>=15 && hour>=17){
    debugger;
    bg="sunrise6.png";
}
else  if (hour>=17 && hour>=18){
    debugger;
    bg="sunrise7.png";
}
else  if (hour>=18 && hour>=20){
    debugger;
    bg="sunrise8.png";
}
else  if (hour>=20 && hour>=23){
    debugger;
    bg="sunrise9.png";
}
else  if (hour>=23 && hour>=00){
    debugger;
    bg="sunrise10.png";
}
else  if (hour>=00 && hour>=03){
    debugger;
    bg="sunrise11.png";
}
else{
    debugger;
    bg="sunrise2.png";
}
backgroundImg=loadImage(bg);

}
