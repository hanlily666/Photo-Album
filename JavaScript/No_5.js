let song,img,canvas;
// let a;
let i;
function preload(){
  song=loadSound("leaves.m4a");
  img=loadImage("zhang/fall.jpeg");
}

function setup() {
  img.resize(500,0);
  canvas=createCanvas(img.width, img.height);
  canvas.parent('sketch_div');
  // leavesound();
  mouseOver();
}

function draw() {
  copy(img,mouseX,mouseY,50,50,mouseX,mouseY,50,50);
  // leavesound();

}
function mouseOver(){

  song.play();
}
// function leavesound(){

//     if (mouseMoved()){
//       song.play();}
//     else {
//       song.pause();
//   }

// }
// function mouseMoved(){
//   song.play();
// }
