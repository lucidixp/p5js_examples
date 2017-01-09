var tree =[];
var leaves = [];
var count =0;
function setup() {
  createCanvas(displayWidth,displayHeight);
  var a = createVector(width / 2,height);
  var b = createVector(width / 2,height - 60);
  var root = new Branch(a, b);
  
  tree[0] = root
  
}

   function touchStarted() {
   for(var i = tree.length -1; i >= 0; i--) {
     if (!tree[i].finished) {
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
     }
     tree[i].finished = true;
   }
   
   count++;
   
   if (count == 12) {
     for (var i = 0; i < tree.length; i++){
            if (!tree[i].finished){
              var leaf = tree[i].end.copy();
              leaves.push(leaf);
              tree[i].finished = true;
        
     }
     
   }
 }
}
function draw() {
  background(51);

  for (var i = 0; i < tree.length; i++) {
    tree[i].show();
  }
  
   for (var i = 0; i < leaves.length; i++) {
   fill(255,0,100);
   ellipse(leaves[i].x, leaves[i].y ,2 ,2);
  }
    
}
