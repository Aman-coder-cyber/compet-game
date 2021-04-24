var gameState, play1, level1, level2, level3, level4, level5, intro, map, finance, military
var heath, police, education, otherGames, respect, g1, g2
var gameState = 0

 function preload() {
  //doctorr = loadImage('doctor.png')
  //engineerr = loadImage('engineer.png')
  //policee = loadImage('police.png')
  //policee2 = loadImage('police2.png')

//startbg = loadImage('gateway.jpg')
 //mapi = loadImage('mapI.png')

}

function setup() {
  createCanvas(displayWidth-15, 1000)
  
  level1 = createSprite(100, displayHeight/6, 50, 50)
  level2 = createSprite(displayWidth/3.4, displayHeight/6, 50, 50)
  level3 = createSprite(displayWidth/5.1, displayHeight/6, 50, 50)
  level4 = createSprite(displayWidth/6.8, displayHeight/6, 50, 50)
  level5 = createSprite(displayWidth/1.7, displayHeight/3, 50, 50)
  intro = createSprite(displayWidth/2, displayHeight/2, 50, 50)
  
  backgroundemg = createSprite(displayWidth/2, displayHeight/2, displayWidth, 1000)
    play1 = createSprite(displayWidth/2, displayHeight/1.5, 100, 50)
  logo = createSprite(displayWidth/2, displayHeight/3, 500, 100)

  bgs1 = createSprite(200, 500, 200, 500)
  bg2s1 = createSprite(1175, 500, 200, 500)
  bg3s1 = createSprite(450, 700, 200, 500)
  bg4s1 = createSprite(925, 700, 200, 500)
  g1 = createSprite(displayWidth/8, displayHeight/5, 100, 100)
  g2 = createSprite(displayWidth/8, displayHeight/2.5, 100, 100) 
  g3 = createSprite(displayWidth/16, displayHeight/5, 100, 100)
  g4 = createSprite(displayWidth/16, displayHeight/2.5, 100, 100)

  ebackground = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight)
  eImage = createSprite(displayWidth/1.5, displayHeight/1.5, 500, 100)
  eImage2 = createSprite(displayWidth/8, displayHeight/1.5, 500, 100)
  
  map = createSprite(displayWidth/2, displayHeight/2, 500, 500)
  
  finance = createSprite(800, 180, 100, 100)
  finance.shapeColor = "yellow"
  military = createSprite(800, 580, 100, 100)
  military.shapeColor = "yellow"
  police = createSprite(550, 580, 100, 100)
  police.shapeColor = "yellow"
  health = createSprite(550, 180, 100, 100)
  health.shapeColor = "yellow"
  education = createSprite(550, displayHeight/2, 100, 100)
  education.shapeColor = "yellow"
  otherGames =  createSprite(800, displayHeight/2, 100, 100)
  otherGames.shapeColor = "yellow"

  bg1 = createSprite(200, displayHeight/2, 250, 500)
  bg2 = createSprite(1150, displayHeight/2, 250, 500)
  map.depth = finance.depth-1
  map.depth = health.depth-1
  map.depth = police.depth-1
  map.depth = education-1
  map.depth = otherGames.depth-1
  map.depth = military.depth-1


  level1.visible = false;
  level2.visible = false;
  level3.visible = false;
  level4.visible = false;
  level5.visible = false;
  intro.visible = false;

  backgroundemg.visible = false
  play1.visible = false
  logo.visible = false 
  
  g1.visible = false
  g2.visible = false
  g3.visible = false
  g4.visible = false

  ebackground.visible = false
  eImage.visible = false
  eImage2.visible = false
  
  bg1.visible = false;
  bg2.visible = false;
  bgs1.visible = false;
  bg2s1.visible = false;
  bg3s1.visible = false;
  bg4s1.visible = false;

  map.visible = false
  finance.visible = false
  military.visible = false
  police.visible = false
  health.visible = false
  education.visible = false
  otherGames.visible = false
}
function draw() {
  background("yellow"); 
  console.log(gameState)
  respect = 0
  wealth = 0
  if(gameState == 0) {
  backgroundemg.visible = true
  backgroundemg.shapeColor = "red"
  play1.visible = true
  logo.visible = true
  bgs1.visible = true;
  bg2s1.visible = true;
  bg3s1.visible = true;
  bg4s1.visible = true;
  
  }
  else {
  backgroundemg.shapeColor = "red"
  play1.visible = false
  logo.visible = false
  bgs1.visible = false;
  bg2s1.visible = false;
  bg3s1.visible = false;
  bg4s1.visible = false;
  }
  if(gameState == 1) {
  map.visible = true
  finance.visible = true
  military.visible = true
  police.visible = true
  health.visible = true
  education.visible = true
  otherGames.visible = true
  bg1.visible = true;
  bg2.visible = true;
  
  
  }
  else {
  map.visible = false
  finance.visible = false
  military.visible = false
  police.visible = false
  health.visible = false
  education.visible = false
  otherGames.visible = false
  bg1.visible = false
  bg2.visible = false
  }
   //if(mousePressedOver(police) || mousePressedOver(health) || mousePressedOver(finance) | mousePressedOver(education) || mousePressedOver(military)) {
  //gameState = 2
  //level1.visible = true;
  //level2.visible = true;
  //level3.visible = true;
  //level4.visible = true;
  //level5.visible = true;
  //intro.visible = true;
  //back = createSprite(displayWidth/34, displayHeight/34, 100, 40)
  //ebackground.visible = true
  //eImage.visible = true
  //eImage2.visible = true
  //}
  drawSprites();
  //mousePressed();
 
}
function mousePressed() {

var p = dist(police.x, police.y, mouseX, mouseY)
var f = dist(finance.x, finance.y, mouseX, mouseY)
var m = dist(military.x, military.y, mouseX, mouseY)
var h = dist(health.x, health.y, mouseX, mouseY)
var e = dist(education.x, education.y, mouseX, mouseY)
var o = dist(otherGames.x, otherGames.y, mouseX, mouseY)
if(p < police.width && p < police.height || f < finance.width && f < finance.height || m < military.width && m < military.height || h < health.width && h < health.height || e < education.width && e < education.height)  {
  choose();
}
var pl = dist(mouseX, mouseY, play1.x, play1.y)
if(pl>play1.width && pl>play1.height) {
home();
}  
}
function home() {
gameState = 1  
}
function choose() {
gameState = 2
level1.visible = true;
level2.visible = true;
level3.visible = true;
level4.visible = true;
level5.visible = true;
intro.visible = true;
back = createSprite(displayWidth/34, displayHeight/34, 100, 40)
ebackground.visible = true
eImage.visible = true
eImage2.visible = true
}
