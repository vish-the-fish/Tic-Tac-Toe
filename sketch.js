var back;
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;
var c7;
var c8;
var c9;
var replay;
var game = "tie";
var c11 = 0;
var c22 = 0;
var c33 = 0;
var c44 = 0;
var c55 = 0;
var c66 = 0;
var c77 = 0;
var c88 = 0;
var c99 = 0;
var tie = 0;
var farm, Blank, x, o, replayImage;
var player = 1;
function preload(){
  farm = loadImage("farm.png");
  Blank = loadImage("Blank.png");
  x = loadImage("X.png");
  o = loadImage("O.png"); 
  replayImage = loadImage("Replay11.png");
}
function setup() {
  // createCanavas(400,400);
  textSize(25);
  back = createSprite(200,200,400,400);
  back.addAnimation(farm);
  c1 = createSprite(100,100);
  c2 = createSprite(200,100);
  c3 = createSprite(300,100);
  c4 = createSprite(100,200);
  c5 = createSprite(200,200);
  c6 = createSprite(300,200);
  c7 = createSprite(100,300);
  c8 = createSprite(200,300);
  c9 = createSprite(300,300);
  replay = createSprite(30,30);
  replay.addAnimation(replayImage);
  replay.scale = 0.2;
  c1.visible = false;
  c2.visible = false;
  c3.visible = false;
  c4.visible = false;   
  c5.visible = false;
  c6.visible = false;
  c7.visible = false;
  c8.visible = false;
  c9.visible = false;
  // var player = 1;
  c1.addAnimation(Blank);
  c2.addAnimation(Blank);
  c3.addAnimation(Blank);
  c4.addAnimation(Blank);
  c5.addAnimation(Blank);
  c6.addAnimation(Blank);
  c7.addAnimation(Blank);
  c8.addAnimation(Blank);
  c9.addAnimation(Blank); 
}

function draw() {
  background("white");
  drawSprites();
  stroke("yellow");
  strokeWeight(3);
  line(150,50,150,350);
  line(250,50,250,350);
  line(50,50,50,350);
  line(350,50,350,350);
  line(50,150,350,150);
  line(50,350,350,350);
  line(50,250,350,250);
  line(50,50,350,50);
  if(player == 1){
    text("X turn",180,25);
  }else if(player == 2){
    text("O Turn",180,25);
  }
  if(player == 1 && c11 == 0 && mousePressedOver(c1)){
    c1.addImage(x);
    // c1.addAnimation(label);
    c1.visible = true;
    player = 2;
    tie = tie + 1;
    c11 = 1;
  }
   if(player == 1 && c22 == 0 && mousePressedOver(c2)){
    c2.addImage(x);
    // c2.changeAnimation(x);
    c2.visible = true;
    player = 2;
    tie = tie + 1;
    c22 = 1;
  }
     if(player == 1 && c33 == 0 && mousePressedOver(c3)){
    c3.addImage(x);
    c3.visible = true;
    player = 2;
    tie = tie + 1;
    c33 = 1;
  }
     if(player == 1 && c44 == 0 && mousePressedOver(c4)){
    c4.addImage(x);
    c4.visible = true;
    player = 2;
    tie = tie + 1;
    c44 = 1;
  }
     if(player == 1 && c55 == 0 && mousePressedOver(c5)){
    c5.addImage(x);
    c5.visible = true;
    player = 2;
    tie = tie + 1;
    c55 = 1;
  }
     if(player == 1 && c66 == 0 && mousePressedOver(c6)){
    c6.addImage(x);
    c6.visible = true;
    player = 2;
    tie = tie + 1;
    c66 = 1;
  }
     if(player == 1 && c77 == 0 && mousePressedOver(c7)){
    c7.addImage(x);
    c7.visible = true;
    player = 2;
    tie = tie + 1;
    c77 = 1;
  }
     if(player == 1 && c88 == 0 && mousePressedOver(c8)){
    c8.addImage(x);
    c8.visible = true;
    player = 2;
    tie = tie + 1;
    c88 = 1;
  }
     if(player == 1 && c99 == 0 && mousePressedOver(c9)){
    c9.addImage(x);
    c9.visible = true;
    player = 2;
    tie = tie + 1;
    c99 = 1;
  }
  //repeat for o 
  if(player == 2 && c11 == 0 && mousePressedOver(c1)){
    c1.addImage(o);
    c1.visible = true;
    player = 1;
    tie = tie + 1;
    c11 = 2;
  }
   if(player == 2 && c22 == 0 && mousePressedOver(c2)){
    c2.addImage(o);
    c2.visible = true;
    player = 1;
    tie = tie + 1;
    c22 = 2;
  }
     if(player == 2 && c33 == 0 && mousePressedOver(c3)){
    c3.addImage(o);
    c3.visible = true;
    player = 1;
    tie = tie + 1;
    c33 = 2;
  }
     if(player == 2 && c44 == 0 && mousePressedOver(c4)){
    c4.addImage(o);
    c4.visible = true;
    player = 1;
    tie = tie + 1;
    c44 = 2;
  }
     if(player == 2 && c55 == 0 && mousePressedOver(c5)){
    c5.addImage("o");
    c5.visible = true;
    player = 1;
    tie = tie + 1;
    c55 = 2;
  }
     if(player == 2 && c66 == 0 && mousePressedOver(c6)){
    c6.addImage("o");
    c6.visible = true;
    player = 1;
    tie = tie + 1;
    c66 = 2;
  }
     if(player == 2 && c77 == 0 && mousePressedOver(c7)){
    c7.addImage("o");
    c7.visible = true;
    player = 1;
    tie = tie + 1;
    c77 = 2;
  }
     if(player == 2 && c88 == 0 && mousePressedOver(c8)){
    c8.addImage("o");
    c8.visible = true;
    player = 1;
    tie = tie + 1;
    c88 = 2;
  }
     if(player == 2 && c99 == 0 && mousePressedOver(c9)){
    c9.addImage("o");
    c9.visible = true;
    player = 1;
    tie = tie + 1;
    c99 = 2;
  }
  //determine the winners
  if(c11 == 1 && c22 == 1 && c33 == 1){
    game = "win";
    textSize(20);
    text("X Wins",124,220);
  }
  if(c11 == 1 && c44 == 1 && c77 == 1){
    game = "win";
    textSize(20);
    text("X Wins",124,220);
  }
  if(c11 == 1 && c55 == 1 && c99 == 1){
    game = "win";
    textSize(20);
    text("X Wins",124,220);
  }
  if(c33 == 1 && c55 == 1 && c77 == 1){
    game = "win";
    textSize(20);
    text("X Wins",124,220);
  }
  if(c88 == 1 && c22 == 1 && c55 == 1){
    game = "win";
    textSize(20);
    text("X Wins",124,220);
  }
  if(c33 == 1 && c66 == 1 && c99 == 1){
    game = "win";
    textSize(20);
    text("X Wins",124,220);
  }
  if(c44 == 1 && c55 == 1 && c66 == 1){
    game = "win";
    textSize(20);
    text("X Wins",124,220);
  }
  if(c77 == 1 && c88 == 1 && c99 == 1){
    game = "win";
    textSize(20);
    text("X Wins",124,220);
  }
    if(player == 1 && c11 == 0 && mousePressedOver(c1)){
    c1.setAnimation("X");
    c1.visible = true;
    player = 2;
    tie = tie + 1;
    c11 = 1;
  }
   if(player == 1 && c22 == 0 && mousePressedOver(c2)){
    c2.setAnimation("X");
    c2.visible = true;
    player = 2;
    tie = tie + 1;
    c22 = 1;
  }
     if(player == 1 && c33 == 0 && mousePressedOver(c3)){
    c3.setAnimation("X");
    c3.visible = true;
    player = 2;
    tie = tie + 1;
    c33 = 1;
  }
     if(player == 1 && c44 == 0 && mousePressedOver(c4)){
    c4.setAnimation("X");
    c4.visible = true;
    player = 2;
    tie = tie + 1;
    c44 = 1;
  }
     if(player == 1 && c55 == 0 && mousePressedOver(c5)){
    c5.setAnimation("X");
    c5.visible = true;
    player = 2;
    tie = tie + 1;
    c55 = 1;
  }
     if(player == 1 && c66 == 0 && mousePressedOver(c6)){
    c6.setAnimation("X");
    c6.visible = true;
    player = 2;
    tie = tie + 1;
    c66 = 1;
  }
     if(player == 1 && c77 == 0 && mousePressedOver(c7)){
    c7.setAnimation("X");
    c7.visible = true;
    player = 2;
    tie = tie + 1;
    c77 = 1;
  }
     if(player == 1 && c88 == 0 && mousePressedOver(c8)){
    c8.setAnimation("X");
    c8.visible = true;
    player = 2;
    tie = tie + 1;
    c88 = 1;
  }
     if(player == 1 && c99 == 0 && mousePressedOver(c9)){
    c9.setAnimation("X");
    c9.visible = true;
    player = 2;
    tie = tie + 1;
    c99 = 1;
  }
  //repeat for o 
  if(player == 2 && c11 == 0 && mousePressedOver(c1)){
    c1.setAnimation("o");
    c1.visible = true;
    player = 1;
    tie = tie + 1;
    c11 = 2;
  }
   if(player == 2 && c22 == 0 && mousePressedOver(c2)){
    c2.setAnimation("o");
    c2.visible = true;
    player = 1;
    tie = tie + 1;
    c22 = 2;
  }
     if(player == 2 && c33 == 0 && mousePressedOver(c3)){
    c3.setAnimation("o");
    c3.visible = true;
    player = 1;
    tie = tie + 1;
    c33 = 2;
  }
     if(player == 2 && c44 == 0 && mousePressedOver(c4)){
    c4.setAnimation("o");
    c4.visible = true;
    player = 1;
    tie = tie + 1;
    c44 = 2;
  }
     if(player == 2 && c55 == 0 && mousePressedOver(c5)){
    c5.setAnimation("o");
    c5.visible = true;
    player = 1;
    tie = tie + 1;
    c55 = 2;
  }
     if(player == 2 && c66 == 0 && mousePressedOver(c6)){
    c6.setAnimation("o");
    c6.visible = true;
    player = 1;
    tie = tie + 1;
    c66 = 2;
  }
     if(player == 2 && c77 == 0 && mousePressedOver(c7)){
    c7.setAnimation("o");
    c7.visible = true;
    player = 1;
    tie = tie + 1;
    c77 = 2;
  }
     if(player == 2 && c88 == 0 && mousePressedOver(c8)){
    c8.setAnimation("o");
    c8.visible = true;
    player = 1;
    tie = tie + 1;
    c88 = 2;
  }
     if(player == 2 && c99 == 0 && mousePressedOver(c9)){
    c9.setAnimation("o");
    c9.visible = true;
    player = 1;
    tie = tie + 1;
    c99 = 2;
  }
  //determine the winners
  if(c11 == 2 && c22 == 2 && c33 == 2){
    game = "win";
    textSize(20);
    text("O Wins",124,220);
  }
  if(c11 == 2 && c44 == 2 && c77 == 2){
    game = "win";
    textSize(20);
    text("O Wins",124,220);
  }
  if(c11 == 2 && c55 == 2 && c99 == 2){
    game = "win";
    textSize(20);
    text("O Wins",124,220);
  }
  if(c33 == 2 && c55 == 2 && c77 == 2){
    game = "win";
    textSize(20);
    text("O Wins",124,220);
  }
  if(c88 == 2 && c22 == 2 && c55 == 2){
    game = "win";
    textSize(20);
    text("O Wins",124,220);
  }
  if(c33 == 2 && c66 == 2 && c99 == 2){
    game = "win";
    textSize(20);
    text("O Wins",124,220);
  }
  if(c44 == 2&& c55 == 2 && c66 == 2){
    game = "win";
    textSize(20);
    text("O Wins",124,220);
  }
  if(c77 == 2 && c88 == 2 && c99 == 2){
    game = "win";
    textSize(20);
    text("O Wins",124,220);
  }
  if(game == "tie"&& tie == 9 ){
        fill("red")
        text("Its a tie! Press replay to play again",10,220)

  }
  if(mousePressedOver(replay)){
    game = "tie";
    tie = 0;
    c1.visible = false;
    c2.visible = false;
    c3.visible = false;
    c4.visible = false;   
    c5.visible = false;
    c6.visible = false;
    c7.visible = false;
    c8.visible = false;
    c9.visible = false;
    c1.setAnimation("Blank");
    c2.setAnimation("Blank");
    c3.setAnimation("Blank");
    c4.setAnimation("Blank");
    c5.setAnimation("Blank");
    c6.setAnimation("Blank");
    c7.setAnimation("Blank");
    c8.setAnimation("Blank");
    c9.setAnimation("Blank");
    c11 = 0;
    c22 = 0;
    c33 = 0;
    c44 = 0;
    c55 = 0;
    c66 = 0;
    c77 = 0;
    c88 = 0;
    c99 = 0;
  }
}
