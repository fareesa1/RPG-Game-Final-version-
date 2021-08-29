function spawnEnemies() {
    enemy_1 = createSprite(100, 30, 50, 50)
    enemy_2 = createSprite(-267, 216, 50, 50)
    enemy_3 = createSprite(-158, -94, 50, 50)
    enemy_4 = createSprite(258, 751, 50, 50)
    enemy_5 = createSprite(13, 822, 50, 50)

    enemy_6 = createSprite(1027, -467, 50, 50)
    enemy_6.scale = 2.0
    enemy_6.addImage("enemyUp", enemyImg)
    // enemy_7 = createSprite(x, y, 50, 50)

    enemyGroup.add(enemy_1)
    enemyGroup.add(enemy_2)
    enemyGroup.add(enemy_3)
    enemyGroup.add(enemy_4)
    enemyGroup.add(enemy_5)
    enemyGroup.add(enemy_6)
    // enemyGroup.add(enemy_7)
    for (var i = 0; i < 5; i++) {
        enemyGroup[i].addImage("enemyUp", enemyImg)
        enemyGroup[i].velocityX = random(-3, 3)
        enemyGroup[i].velocityY = random(-3, 3)
    }
        enemyGroup[5].velocityX = random(-5,5)
        enemyGroup[5].velocityY = random(-5,5)
}

function enemyAttack() {
    if (playerSprite === "sword" && player.isTouching(enemy_1)) {
        console.log("works")
        enemy_1.destroy();
    }
    if (playerSprite === "sword" && player.isTouching(enemy_2)) {
        console.log("works")
        enemy_2.destroy();
    }
    if (playerSprite === "sword" && player.isTouching(enemy_3)) {
        console.log("works")
        enemy_3.destroy();
    }
    if (playerSprite === "sword" && player.isTouching(enemy_4)) {
        console.log("works")
        enemy_4.destroy();
    }
    if (playerSprite === "sword" && player.isTouching(enemy_5)) {
        console.log("works")
        enemy_5.destroy();
    }
    if (playerSprite === "sword" && player.isTouching(enemy_6)) {
        console.log("works")
        if (frameCount % 5 == 0) {
            bossHealth -= Math.round(20)
          }
    }
    if(bossHealth === 0){
        enemy_6.destroy ();
        gameStates = 3;
    }

}
