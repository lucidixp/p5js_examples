function Branch(begin, end){
  this.begin = begin;
  this.end = end;
  this.finished = false;
  
  this.show = function () {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);
  }
  
  this.branchA = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(PI / 6.5);
    dir.mult(0.80);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);
    return b;
  }
  
  this.branchB = function() {
    var dir = p5.Vector.sub(this.end, this.begin);
    dir.rotate(-PI / 6.5);
    dir.mult(0.80);
    var newEnd = p5.Vector.add(this.end, dir);
    var b = new Branch(this.end, newEnd);
    return b;
  }
  
  
}