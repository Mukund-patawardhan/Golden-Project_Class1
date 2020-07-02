var canvas;
var form;
var gameState=0;

function setup() {
  canvas=createCanvas(windowWidth,windowHeight);

  game=new Game ();
}

function draw() {
  background("white");  

  if(gameState===0){
    game.form();
  }
  if(gameState===1){
    game.game();
  }
  

}

function keyPressed(){
  if(keyCode===RIGHT_ARROW){
    game.move(10,0);
  }
  if(keyCode===LEFT_ARROW){
    game.move(-10,0);
  }
  if(keyCode===UP_ARROW){
    game.move(0,-10);
  }
  if(keyCode===DOWN_ARROW){
    game.move(0,10);
  }
}
