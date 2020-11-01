let img,p,song;
let x,y,loc,r,g,b,a;
p = 16;

function preload() {
  img = loadImage("Group 9.png");
  song=loadSound('wenrou.mp3');
  // song=loadSound('')
}
function setup() {
  createCanvas(img.width, img.height);
  background('#CAB3A6');
  smooth();
  img.resize(500,0);
  img.loadPixels();
  input=createInput();
  input.position(550,260);
  song.play();
  text('How do you feel right now?',550,250);
}


function draw() {

  for(let i = 0; i < 1000; i++) {
  x = int(random(img.width));
  y = int(random(img.height));
  loc = int((x + y * img.width) * 4);

  // Look up the RGB color in the source image
  r = img.pixels[loc];
  g = img.pixels[loc + 1];
  b = img.pixels[loc + 2];
  a = img.pixels[loc + 3] * 255;
  noStroke();

  // Back to shapes! Instead of setting a pixel, we use the color
  // from a pixel to draw a circle.
  fill(r,g,b,a);
  ellipse(x,y,p,p);
  }

}
function keyPressed(){
   image(img,0,0);
}
