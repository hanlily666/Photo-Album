function Particle(x, y) {
  this.x = mouseX;
  this.y = mouseY;
  this.r = random(4, 32);

   this.update = function() {
  if(mouseIsPressed){
       this.x=mouseX;
    this.y=mouseY
  }
    this.x +=random(-10,10);
    this.y +=random(-10,10);

     this.x = constrain(this.x, 0, width);
     this.y = constrain(this.y, 0, height);


  };

  this.show = function() {
    noStroke();
    var px = floor(this.x);
    var py = floor(this.y);
    var col = img.get(px, py);
    //console.log(col);
    fill(col[0], col[1], col[2], slider.value());
    ellipse(this.x, this.y, this.r, this.r);
  };
}
