//Player
var player;

//Map
var map, mapImg;

// water
var lightWater, lightWaterImage;

//ship
var ship, shipImg1

//houses
var houses = [];
var house1, house2, house3, house4, house5, house6, house7, house8,
 house9, house10, house11;
var houseImg1, houseImg2, houseImg3, houseImg4, houseImg5,houseImg6;

function spawnObjects() {
    //Creating Water
    lightWater = createSprite(400, 400)
    lightWater.addImage("water", lightWaterImage)
    lightWater.scale = 5.0

    //Creating Map
    map = createSprite(400, 400)
    map.addImage("map", mapImg)
    map.scale = 3.0

    //Called Boundries Function from 'Boundries.js'
    Boundries();

    ship = createSprite(700, 878, 50, 50)
    ship.addImage("ship1", shipImg1)
    ship.scale = 3.0
    ship.setCollider("rectangle", 0, 0, 40, 50)
    // ship.debug = true

    player = createSprite(-578, -312, 50, 50);
    // player = createSprite(1072, -140, 50, 50);

    player.addImage("front", front)
    player.addImage("back", back)
    player.addImage("left", left)
    player.addImage("right", right)

    player.addImage("frontSword", frontSword)
    player.addImage("backSword", backSword)
    player.addImage("leftSword", leftSword)
    player.addImage("rightSword", rightSword)

    player.scale = 1.1
    player.setCollider("rectangle", 0, -5, 40, 60)
    // player.debug = true

    //lightGreen Grass Houses

    house1 = createSprite(-478,100);
    house1.addImage("house4",houseImg4)
    house1.scale = 3.0

    house2 = createSprite(180,190);
    house2.addImage("house1",houseImg1)
    house2.scale = 3.0
    house2.setCollider("rectangle",0,5,25,25)

    house3 = createSprite(-78,-212);
    house3.addImage("house1",houseImg1)
    house3.scale = 3.0
    house3.setCollider("rectangle",0,5,25,25)

    house4 = createSprite(-650,-80);
    house4.addImage("house1",houseImg1)
    house4.scale = 3.0
    house4.setCollider("rectangle",0,5,25,25)

    house5 = createSprite(-288,-22);
    house5.addImage("house6",houseImg6)
    house5.scale = 5.0

    //Darkgreen Grass Houses
    house6 = createSprite(-250,853)
    house6.addImage("house2",houseImg3)
    house6.scale = 3.0

    house7 = createSprite(207,658)
    house7.addImage("house5",houseImg5)
    house7.scale = 3.0
    
    house8 = createSprite(498,763)
    house8.addImage("house5",houseImg5)
    house8.scale = 3.0

    house9 = createSprite(-100,980)
    house9.addImage("house2",houseImg2)
    house9.scale = 3.0

    house10 = createSprite(217,1050)
    house10.addImage("house2",houseImg2)
    house10.scale = 3.0

    house11 = createSprite(458,970)
    house11.addImage("house2",houseImg2)
    house11.scale = 3.0

    //Pushing all houses in the "houses" array
    houses.push(house1,house2,house3,house4,house5,house6,house7,house8
        ,house9,house10,house11)



}