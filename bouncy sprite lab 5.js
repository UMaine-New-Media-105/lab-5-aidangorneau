  //defining the positions, speeds, and directions
let x 
let y
let speedX
let speedY
let directionX
let directionY

function setup() {
  createCanvas(500, 400); // made canvas non-square to make path more random
  //calling functions 
  speedX = 2
  speedY = 2
  x = random(25, 475)//random min and max values for x
  y = random(25, 375)//random min and max values for y
  directionX = 1
  directionY = 1
}

function draw() {
  background(220);
  //setting speed and checking for direction
  x += speedX * directionX
  y += speedY * directionY
  drawSprite(x, y)  //drawing the sprite by calling x and y
  console.log(speedX, speedY)// printing speed values in console
  if (x>=475 || x <=25){ // changing direction on x axis
    directionX *= -1;
  }  
  if (y>=375 || y <=25){ // changing direction on y axis
    directionY *= -1;
  }
  
}

function drawSprite(x, y){//drawing sprite and translating it to the random x and y positions
  push();
  translate(x, y);
  noStroke()
  fill("blue");
  ellipse(0, 0, 50);
  ellipse(0, 0, 25, 75)
  ellipse(0, 0, 75, 25)
  pop();
}

function keyPressed(){
  if (keyCode == UP_ARROW){//increases speed of sprite when up arrow is pressed
    speedX += 1;
    speedY += 1;
  }  
  if (keyCode == DOWN_ARROW){//decreases speed of sprite when down arrow is pressed
    speedX += -1;
    speedY += -1;
  }
    if (keyCode == RIGHT_ARROW){//changes x axis speed 
    speedX += 1;
  }
  if (keyCode == LEFT_ARROW){//changes x axis speed
    speedX += -1;
  }
}
