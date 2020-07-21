var skyColor;
var cloud;
var rightCreature; 
var leftCreature;

function setup () {
  createCanvas(400, 400);

  skyColor = color(100, 200, 255);
  cloud = {
    color: color(255, 255, 255, 250),
    height: 100,
    yOffset: 50,
  }

   rightCreature = {
    color1: color(255, 183, 77),
    color2: color(255, 233, 125),
    height: 150,
    width: 200,
    xOffset: 100

  }
  leftCreature = {
    color1: color(255, 150, 141),
    color2: color(255, 141, 160),
    height: 300,
    width: 100,
    xOffset: -50
  }
  // one equal sign = assigning 
}

function draw () {
  background(skyColor);
  helperDrawCloud();

  // #3a Draw leftCreature on the left side of the cloud (Donald Trump?)
  fill(255, 153, 51);
  rect(mouseX - rightCreature.xOffset, mouseY - 60, 60, 70);
  fill(255, 255, 153);
  rect(mouseX - rightCreature.xOffset, mouseY - 65, 80, 20);

  // #3b Draw leftCreature on the left side of the cloud (Joe Biden?)
  fill(255, 228, 196)
  ellipse(mouseX - leftCreature.xOffset, mouseY - 25, 60, 80);
  fill(192, 192, 192);
  rect(mouseX - leftCreature.xOffset + 15, mouseY - 55, 20, 30);
  rect(mouseX - leftCreature.xOffset - 35, mouseY - 55, 20, 30);
  rect(mouseX - leftCreature.xOffset - 30, mouseY - 65, 62, 25);

}

function mousePressed() {
print("clicked");
var randomRed = random(0, 255);
skyColor.setRed(randomRed);
leftCreature.xOffset -= -10
rightCreature.xOffset -= 10
}

console.log(10 + 10 == 20);