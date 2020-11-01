let img,canvas;
let a=0;
let song;
function preload(){
  img=loadImage('zhang/lily.jpeg');
  song=loadSound('rain.m4a');
}
function setup(){
  img.resize(500,0);
  song.play();
  canvas=createCanvas(img.width,img.height);
  canvas.parent('sketch_div');
  copy(img,32,32,32,32,32,32,32,32);
  song.play();


}

function draw() {

}

function mousePressed(){

  // song.play();
  // if !mouseIsPressed song.pause
  a++;
  // let colourAtPixel = img.get(mouseX,mouseY,16,16);
  // console.log(colourAtPixel);
  copy(img,mouseX,mouseY,32,32,mouseX,mouseY,32,32);
  if (a>15) {
    image(img,0,0);
  }
}
