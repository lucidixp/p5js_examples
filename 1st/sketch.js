var loc = {
  x: 300,
  y: 200
}

var col = {
  
  a: 255,
  b: 0,
  c: 200
}


function setup() {
 createCanvas(600,400);
}

function draw() {
 background(0);
 
 stroke(50,255,0);
 strokeWeight(4);
 noFill();
 
 
  if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
    
  fill(col.a,col.b,col.c);
  }
  
   ellipse(loc.x, loc.y, 100, 100);

}