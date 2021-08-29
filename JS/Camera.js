function cameraMovement(){
    if (player.y < 542 && player.y > -320 && player.x < 790) {
        if (camera.y >= 10) {
          camera.x = -277
          camera.y = camera.y - 60
        }
      }
      else if (player.x > 790 && player.y <= 342) {
        camera.x = 600
        camera.y = -50
      }
  
      else if (player.y >= 542) {
        if (camera.y < 900) {
          camera.y = camera.y + 60
          camera.x = -100
        }
      }

      camera.zoom = 0.8;
}