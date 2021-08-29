function Movement() {
  // move with arrow keys 
  if (keyDown("UP_ARROW") || keyDown("w")) {
    player.y -= 10
    player.changeImage("front")
    playerSprite = "up"
  }
  if (keyDown("DOWN_ARROW") || keyDown("s")) {
    player.y += 10
    player.changeImage("back")
    playerSprite = "down"
  }
  if (keyDown("RIGHT_ARROW") || keyDown("d")) {
    player.x += 10
    player.changeImage("right")
    playerSprite = "right"
  }
  if (keyDown("lEFT_ARROW") || keyDown("a")) {
    player.x -= 10
    player.changeImage("left")
    playerSprite = "left"
  }
  if (keyDown("z")) {
    camera.zoom = camera.zoom - 0.1;
  }
  if (keyDown("space")) {

    sword.play();
    setTimeout(() =>{sword.stop()},120)

    if (playerSprite === "up") {
      player.changeImage("frontSword")
      playerSprite = "sword"
      setTimeout(() => {
        player.changeImage("front")
        playerSprite = "up"
      }, 200)
    }

    if (playerSprite === "down") {
      player.changeImage("backSword")
      playerSprite = "sword"
      setTimeout(() => {
        player.changeImage("back")
        playerSprite = "down"
      }, 200)
    }

    if (playerSprite === "left") {
      player.changeImage("leftSword")
      playerSprite = "sword"
      setTimeout(() => {
        player.changeImage("left")
        playerSprite = "left"
      }, 200)
    }

    if (playerSprite === "right") {
      player.changeImage("rightSword")
      playerSprite = "sword"
      setTimeout(() => {
        player.changeImage("right")
        playerSprite = "right"
      }, 200)
    }

  }

}
