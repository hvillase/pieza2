let posX = 40;
//let posY = 40;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  background(255, 200, 200);
}

function draw(){
ellipse(posX, 40, 50, 50);
posX = posX + 1;
//posY = poxY + 2;
	if(posX == windowWidth){
		posX = 40
	}
	
/*if(posY == windowHeight){
		posY = 40;
	}*/
}
	
	
	
	