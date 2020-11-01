var img,a,canvas;
var vScale = 16;

var particles = [];

var slider;
function preload (){
  img=loadImage("mix1.png");
  song=loadSound('A random day.m4a');
}
function setup() {
  img.resize(750,0);
  canvas=createCanvas(img.width,img.height);
  canvas.parent('sketch_div');
  pixelDensity(1);
  song.play();

    for (var i = 0; i < 100; i++) {
    if(mouseIsPressed){
    particles[i] = new Particle(mouseX,mouseY);
        }
    else {
      particles[i] = new Particle(random(width),random(height));
    }
    }
  slider = createSlider(0, 255, 127);
  background(255);
}

function draw() {
  // background(51);
  img.loadPixels();
for (var i = 0; i < particles.length; i++) {
    // if(mouseIsPressed){
    particles[i].update();
  // }
    particles[i].show();
  }
}
