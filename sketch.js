
//Sprites
var front, back, left, right;
var frontSword, backSword, leftSword, rightSword;
var playerSprite
var health, bossHealth;
var enemyGroup;
var enemy_1, enemy_2, enemy_3, enemy_4, enemy_5, enemy_6, enemy_7;
var enemyImg

var gameStates
var speedX = 3
var speedY = 3
var colorHandle = 30;
var alpha = 0
var eligible = false;

var theme, sword,houseInteract;

function preload() {
  //loading Images
  lightWaterImage = loadImage("Water.png")

  mapImg = loadImage("Map2.png")

  front = loadImage("Player_Sprites/frontSprite.png")
  back = loadImage("Player_Sprites/backSprite.png")
  left = loadImage("Player_Sprites/leftSprite.png")
  right = loadImage("Player_Sprites/rightSprite.png")

  frontSword = loadImage("Player_Sprites/frontSword.png")
  backSword = loadImage("Player_Sprites/backSword.png")
  leftSword = loadImage("Player_Sprites/leftSword.png")
  rightSword = loadImage("Player_Sprites/rightSword.png")

  shipImg1 = loadImage("Game_Assets/Objects/Other/Ship1.png")

  houseImg1 = loadImage("Game_Assets/Objects/Houses/1.png")
  houseImg2 = loadImage("Game_Assets/Objects/Houses/2.png")
  houseImg3 = loadImage("Game_Assets/Objects/Houses/3.png")
  houseImg4 = loadImage("Game_Assets/Objects/Houses/4.png")
  houseImg5 = loadImage("Game_Assets/Objects/Houses/5.png")
  houseImg6 = loadImage("Game_Assets/Objects/Houses/6.png")

  theme = loadSound("Sounds/Theme.mp3")
  sword = loadSound("Sounds/Sword_use.wav")
  houseInteract = loadSound("Sounds/LOZ_Fanfare.wav")  
  
  enemyImg = loadImage("Enemy_Sprites/EnemyUp.png")
}

function setup() {
  createCanvas(1600, 800);
  enemyGroup = createGroup()
  spawnObjects();

  sound();

  spawnEnemies();

  // start camera
  camera.on()
  health = 100
  bossHealth = 500

  gameStates = 1
}

function draw() {
  if (gameStates == 1) {
    background('lightblue');
    //collision
    player.collide(lightGreenBoundry);
    player.collide(bridges);
    player.collide(darkgreenBoundry);
    player.collide(ship);
    player.collide(screenBorders);
    player.collide(houses);
    player.collide(bridgeBorder);
    player.collide(mountainBorders);

    enemyGroup.bounceOff(lightGreenBoundry);
    enemyGroup.bounceOff(darkgreenBoundry);
    enemyGroup.bounceOff(houses);
    enemyGroup.bounceOff(screenBorders);
    enemyGroup.bounceOff(mountainBorders);
    // enemies.bounceOff(houses)

    if (frameCount % 30 === 0) {
      enemy_1.velocityX = random(-speedX, speedX)
      enemy_1.velocityY = random(speedY, -speedY)
    }

    if (enemyGroup.isTouching(player)) {
      if(playerSprite === "up"|| playerSprite === "down" || playerSprite === "left" || playerSprite === "right")
      if (frameCount % 10 == 0) {
        health -= Math.round(5)
        // health = Math.round(health)
      }
    }

    if (items === "bridge_key") {
      bridgeBorder.destroy()
    }

    enemyAttack();

    // players movement with camera positions
    Movement();

    if (items === "bridge_key & candle")
    shipMovement();

    drawSprites();

    cameraMovement();

    shadow();

    getKey2();

    getKeyInfo();

    houseEnter();

    textAlive();
  }
  if(gameStates === 2){
    textDead();
  }

  if(gameStates === 3){
    // console.log("GAME FINISHED")
  fill("green")
  textAlign(CENTER)
  text("THANKS FOR PLAYING",camera.x,camera.y)
  text("REFRESH PAGE TO PLAY AGAIN",camera.x,camera.y + 100)
  }
}

function sound (){
  theme.play(0,1,0.5);
  theme.loop();
  // theme.volume(0.2)
}
