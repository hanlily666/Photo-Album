let s=function(a){
  let img,song;
  a.preload=function(){
    song=myp5.loadSound('mingzi.mp3');
    img=myp5.loadImage('Group 9.jpg');
  }
  a.setup=function() {
    a.createCanvas(1000,1000);
    a.image(img,0,0,750,500);

  // testfield.changed();
  // // textfield.input();
  // submit=select('#submit');
  // submit.

  }

 a.mouseClicked=function(){
   song.play();
   // a.song.loop=false;
  }
}
var myp5=new p5(s,'sketch_div1');

var t=function(a){

  let bot = new RiveScript();
  bot.loadFile('brain.rive', brainReady, brainError);
let button = select('#submit');
let user_input = select('#user_input');
let output = select('#output');

button.mousePressed(chat);

function chat() {
  let input = user_input.value();
  let reply = bot.reply('local-user', input);
  output.html(reply);
  }
}
var myp5=new p5(t,'sketch_div2');
