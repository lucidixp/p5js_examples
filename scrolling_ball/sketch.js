var x = 0;

function setup() {
  createCanvas(600,400)  
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(5);
  noFill();
  ellipse(x,200,100,100);
  
  x = x + 3;
  
  if (x > 650) {
    x = -50;
    
  }
  
}