function shadow() { 
    rectMode(CENTER)
    noStroke()
    squareColor = color(20, 30, 20);
    if (items === "bridge_key & candle") {
      squareColor.setAlpha(0);
    } else {
      squareColor.setAlpha(130);
    }
    fill(squareColor);
    rect(-100, 940, 2500, 900)

}