let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  
  createCanvas(500, 400);
  background(69);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal= 200;
  posicaoVertical= 200;
}

 function draw() {
   
  stroke ('blue')
  fill(cor)
  circle(posicaoHorizontal, posicaoVertical, 50);
 // console.log(mouseIsPressed);
  
  if (mouseIsPressed) {
    rect (mouseX, mouseY, 20, 35,);
  }
}