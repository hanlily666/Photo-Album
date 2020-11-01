let img,a,canvas,timer=0, offset=0,easing=0.05;
const max = 150, sw = 160, sh = 160;
function preload(){
  img=loadImage('images/mix2.png');
  song=loadSound('music/hub.m4a');
}
function setup() {
  img.resize(750,0);
  song.play();
  canvas = createCanvas(img.width, img.height);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
  canvas.parent("sketch-div");
	canvas.elt.onmousemove = ()=>{
		timer = max;
		a = img.get(mouseX, mouseY, sw, sh);
	}
	canvas.elt.onmousemove();
}

function draw() {
	// try{
		background('#CAB3A6');
      // let dx = mouseX - img.width / 2 - offset;
      // offset += dx * easing;
		image(a, mouseX, mouseY);
		noStroke();
		fill(color(202,179,166,map(timer,0,max,0,255)));
		rect(mouseX, mouseY, sw, sh);
		if(timer>0) timer--;
	 // }
		// catch(e){
		// alert(e);
		// }
}
