var x = 0
function setup() {
  // put setup code here
  createCanvas(320, 240);
}

function draw() {
  // put drawing code here
  console.log(x);
  background(100);
  ellipse(x, 120, 16, 16);
  x = x + 1
  if (x > width){
    x = 0;
  }
}