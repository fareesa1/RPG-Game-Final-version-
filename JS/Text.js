function textAlive(){
    fill("red")
    textSize(50)
    if (health > 0) {
      text("HEALTH: " + health, camera.x - 900, camera.y - 450)
    }
    else {
      gameStates = 2
    }
    textSize(50)
    fill("red")
    if (bossHealth > 0) {
      if (camera.x === 600 && camera.y === -50) {
        text("BOSS HEALTH: " + bossHealth, camera.x + 200, camera.y - 450)
      }

    }
    else if (bossHealth === 0) {
      enemy_6.destroy();
      // console.log("GAME FINISHED")
      fill("red")
      textAlign(CENTER)
      text("THANKS FOR PLAYING", camera.x, camera.y)
      text("REFRESH PAGE TO PLAY AGAIN", camera.x, camera.y + 100)
    }
}

function textDead(){
    textSize(200)
    textWidth(100)
    fill("blue")
    textAlign(CENTER)
    text("YOU DIED", camera.x, camera.y)
}