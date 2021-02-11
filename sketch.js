var background,backgroundImage;
var patriot;
var explosionSound;
var explosion;
var scud1,scud2,scud3,scud4,missilelauncher,enemyGroup,patriotGroup,explosionSound;

function preload(){
  
  backgroundImage = loadImage("background image.jpg");
  patriotmissileImage = loadImage("patriot missile.png");
  missilelauncherImage = loadImage("missile launcher.png");
  scud1Image = loadImage("image.png");
  scud2Image = loadImage("image.png");
  scud3Image = loadImage("image.png");
  scud4Image = loadImage("image.png");
  explosionImage = loadImage("explosion.png")
  explosionSound = loadSound("explosion-01.mp3")
  
}



function setup() {
  createCanvas(1300,600 );

  enemyGroup = new Group();
  patriotGroup = new Group();
  score = 0  
 
  
  //creating background
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 1


  //to shoot patriotmissiles
  missilelauncher = createSprite(200,450,20,50);
  missilelauncher.addImage(missilelauncherImage); 
  missilelauncher.scale = 0.80
  
  
  
  
}

function draw() {

  
  
// moving backgroundground
background.velocityX = -4 

if (background.x < 0){
  background.x = background.width/2;
}


// release missiles when space key is pressed
if (keyDown("space")) {
patriotmissile();
explosionSound.play()
}

//creating continous enemy missiles.
var enemeyMissiles = Math.round(random(1,4));

if (World.frameCount % 100 == 0) {
if (enemeyMissiles == 1) {
  scudmissile1();
}if (enemeyMissiles == 2) {
  scudmissile2();
}if (enemeyMissiles == 3) {
  scudmissile3();
}else {
   scudmissile4();
}   
  
}

//to move the missile launcher along with the mouse.
missilelauncher.x = World.mouseX

patriotGroup.depth = missilelauncher.depth
patriotGroup.depth  += 1


if (patriotGroup.isTouching(enemyGroup)){
 score = score + 1
 enemyGroup.destroyEach()
 patriotGroup.destroyEach()
 explosion = createSprite(Math.round(random(patriotGroup.position.X)),Math.round(random(enemyGroup.position.Y)))
 explosion.addImage(explosionImage)

}

 

  drawSprites();

  if (score === 10){
    textSize(80)
    stroke("GREEN")
    strokeWeight(10)
    fill("orange")
    text ("YOU WIN",650,300) 

    scud1.velocityX = 0
    scud2.velocityX = 0
    scud3.velocityX = 0
    scud4.velocityX = 0
    scud1.velocityY = 0
    scud2.velocityY = 0
    scud3.velocityY = 0
    scud4.velocityY = 0
    patriotGroup.velocityX = 0
    patriotGroup.velocityY = 0
    explosionSound.play(false)
   }
  textSize(20)
  stroke("black")
  strokeWeight(5)
  fill("orange")
  text("Score: " +score,850,50)
  text("Press space to launch missiles",10,50)
  text("Destroy 10 Enemies to win",10,70)
}
  

function scudmissile1() {
  var scud1 = createSprite(1500,300, 10, 10);
  scud1.addImage(scud1Image);
  scud1.velocityX = -8;
  scud1.velocityY = -2;
  scud1.lifetime = 300;
  scud1.scale = 0.80;
  enemyGroup.add(scud1)
  return scud1;
  
}

function scudmissile2() {
  var scud2 = createSprite(1500,300, 10, 10);
  scud2.addImage(scud2Image);
  scud2.velocityX = -8;
  scud2.velocityY = -2;
  scud2.lifetime = 300;
  scud2.scale = 0.80;
  enemyGroup.add(scud2)
  return scud2;
}

function scudmissile3() {
  var scud3 = createSprite(1500,300, 10, 10);
  scud3.addImage(scud3Image);
  scud3.velocityX = 8;
  scud3.velocityY = 6;
  scud3.lifetime = 300;
  scud3.scale = 0.80;
  enemyGroup.add(scud3)
  return scud3;   
}

function scudmissile4() {
  var scud4 = createSprite(1500,300, 10, 10);
  scud4.addImage(scud4Image);
  scud4.velocityX = 8;
  scud4.velocityY = 6;
  scud4.lifetime = 300;
  scud4.scale = 0.80
  enemyGroup.add(scud4)
  return scud4;
}


 function patriotmissile() {
 patriot = createSprite(120,425,10,10)
 patriot.addImage(patriotmissileImage);
 patriot.velocityX = 4;
 patriot.velocityY = -4;
 patriot.x = missilelauncher.x-100
 patriot.lifetime = 500;
 patriot.scale = 0.40;
 patriotGroup.add(patriot)

  return patriot;
   
}