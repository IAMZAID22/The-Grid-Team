var ground, b1, b2, b3, ground
var pl1, pl2, pl3, pl4, pl5, pl6, pl7, pl8, pl9, pl10;
var bu1, bu2, bu3;
var pla1, pla2
var lv = 1;
var text1 = "You Win Stage 1";
var text2 = "Press Space for next Stage"
var pla1r,pla1l,pla2r,pla2l
function preload(){
  pla1r = loadImage("player1r.png");
  pla1l = loadImage("player1l.png");
  pla2r = loadImage("player2r.png");
  pla2l = loadImage("player2l.png");
}
function setup() {
  createCanvas(800, 800)

  b1 = createSprite(400, 500, 20, 750);
  b1.shapeColor = "white"
  b2 = createSprite(100, 500, 20, 750);
  b2.shapeColor = "white"
  b3 = createSprite(700, 500, 20, 750);
  b3.shapeColor = "white";


  //platforms
  pl1 = createSprite(355, 670, 70, 10);
  pl1.shapeColor = "red"
  pl2 = createSprite(165, 570, 125, 10)
  pl2.shapeColor = "white";
  pl3 = createSprite(445, 470, 70, 10);
  pl3.shapeColor = "purple"
  pl4 = createSprite(165, 370, 125, 10)
  pl4.shapeColor = "white";
  pl5 = createSprite(355, 270, 70, 10);
  pl5.shapeColor = "yellow"
  pl6 = createSprite(165, 170, 125, 10)
  pl6.shapeColor = "white";
  pl7 = createSprite(645, 570, 125, 10)
  pl7.shapeColor = "white";
  pl8 = createSprite(645, 370, 125, 10)
  pl8.shapeColor = "white";
  pl9 = createSprite(645, 170, 125, 10)
  pl9.shapeColor = "white";
  pl10 = createSprite(400, 120, 200, 10);
  pl10.shapeColor = "white"

  //buttons
  bu1 = createSprite(165, 558, 15, 15)
  bu1.shapeColor = "red"
  bu2 = createSprite(645, 358, 15, 15)
  bu2.shapeColor = "purple"
  bu3 = createSprite(165, 158, 15, 15)
  bu3.shapeColor = "yellow"

  ground = createSprite(400, 790, 800, 50);
  ground.shapeColor = "green"

  pla1 = createSprite(150, 720, 20, 50);
  pla1.addImage(pla1r)
  pla1.scale = 0.4

  pla2 = createSprite(650, 720, 20, 50);
  pla2.addImage(pla2l)
  pla2.scale = 0.4
}

function draw() {
  background(0);

  if (keyDown("w")) {
    pla1.y = pla1.y - 13;

  }
  pla1.velocityY = pla1.velocityY + 1;



  if (keyDown("up_arrow")) {
    pla2.y = pla2.y - 13;

  }
  pla2.velocityY = pla2.velocityY + 1;

  if (keyDown("a")) {
    pla1.x = pla1.x - 4;
    pla1.addImage(pla1l)

  }
  if (keyDown("d")) {
    pla1.x = pla1.x + 4;
    pla1.addImage(pla1r)
  }

  if (keyDown("left")) {
    pla2.x = pla2.x - 4;
    pla2.addImage(pla2l)
  }
  if (keyDown("right")) {
    pla2.x = pla2.x + 4;
    pla2.addImage(pla2r)
  }

  if (pla1.isTouching(bu1) && lv === 1) {
    pl1.x = 445;
    bu1.height = 7;
    bu1.y = 562
  }
  if (pla2.isTouching(bu2) && lv === 1) {
    pl3.x = 352;
    bu2.height = 7;
    bu2.y = 362
  }
  if (pla1.isTouching(bu3) && lv === 1) {
    pl5.x = 445;
    bu3.height = 7;
    bu3.y = 162
  }

  if (pla1.isTouching(pl10) && pla2.isTouching(pl10)&&lv ===1) {
    textSize(20);
    fill("grey");
    text(text2, 400, 600);
    text(text1, 400, 400);
    lv = 2
  }

  if (keyDown("space") && lv === 2) {
    pl3.velocityY = 0;
    pl5.velocityY = 0;
    text1 = ""
    text2 = ""
    b1.x = 450;
    b1.height = 350
    b1.y = 600
    pl2.height = 300
    b1.width = 50
    pl2.y = 650
    pl1.y = 430
    pl1.width = 0.1
    pl3.y = 760
    pl3.x = 650;
    pl7.x = 475
    pl7.width = 100
    pl7.y = 420
    pl8.x = 310
    pl8.y = 330
    pl4.y = 280
    pl6.width = 30;
    pl6.height = 60
    pl6.x = 238
    pl6.y = 305
    pl10.y = 100;
    b2.y = 400;
    b2.height = 800;
    b3.y = 400;
    b3.height = 800;
    pla1.x = 165;
    pla1.y = 350
    bu2.x = 200;
    bu2.y = 492
    pl5.x = 165;
    pl5.y = 270
    bu3.x = 270
    bu3.y = 317
    bu1.x = 450
    bu1.y = 407
    bu1.height = 15;
    bu2.height = 15;
    bu3.height = 15;
    pla2.x = 700
    pla2.y = 700
  }
  if (pla1.isTouching(bu2) && lv === 2) {
    pl3.velocityY = -2;
    bu2.height = 7;
    if (pl3.y < 400) {
      pl3.y = -10
    }
  }
  if (pla2.isTouching(bu1) && lv === 2) {
    pl1.width = 70;
    bu1.height = 7
    pl1.x = 250;
    pl1.y = 400
  }
  if (pla2.isTouching(bu3) && lv === 2) {
    pl5.velocityY = -2
    bu3.height = 7
  }
  if (pla1.isTouching(pl9) && pla2.isTouching(pl9)&&lv ===2) {
    textSize(20);
    fill("grey");
    text(text1, 400, 400);
  }
  pla1.collide(ground);
  pla1.collide(b1);
  pla1.collide(b2);
  pla1.collide(b3);
  pla1.collide(pl1)
  pla1.collide(pl2)
  pla1.collide(pl3)
  pla1.collide(pl4)
  pla1.collide(pl5)
  pla1.collide(pl6)
  pla1.collide(pl7)
  pla1.collide(pl8)
  pla1.collide(pl9)
  pla1.collide(pl10)

  pla2.collide(ground);
  pla2.collide(b1);
  pla2.collide(b2);
  pla2.collide(b3);
  pla2.collide(pl1)
  pla2.collide(pl2)
  pla2.collide(pl3)
  pla2.collide(pl4)
  pla2.collide(pl5)
  pla2.collide(pl6)
  pla2.collide(pl7)
  pla2.collide(pl8)
  pla2.collide(pl9)
  pla2.collide(pl10)

  drawSprites();
}
