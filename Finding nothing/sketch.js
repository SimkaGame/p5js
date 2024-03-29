var map;
var pirateFont;
var treasureX;
var treasureY;
var message = "Pieces-o-nothing!";
var clicks = 0;
var stage = 1;
var textOn;
var point;


function setup()
{
    createCanvas(800, 600);
	map = loadImage("map.jpg");

	treasureX = random(230, 500);
	treasureY = random(100, 330);

	pirateFont = loadFont("bsg.ttf");
	textFont(pirateFont);
    
    //point
    point = 
    {
        X: treasureX,
        Y:  treasureY,
        radius: 30
    }
    textOn = false;
    
    color = {
        r: 0,
        g: 0,
        b: 0
    }
}



function draw()
{
    
	image(map, 0, 0, width, height);
    fill(color.r,color.g,color.b);
    text('The proximity indicator',30,520);
    
	fill(0);
    
    
  if (stage == 1) {
        text("Press LMB to start", 230, 250);
  }
  
    
    
    noStroke();
    fill(0,0,0);
    textSize(80);
    textAlign(760,580);
    //displaying number of clicks
    text(clicks, 680, 560);
    textAlign(LEFT);
	textSize(40);
	text("Count clicks " + message, 615, 500);
    
    
    
    

	if (stage == 3){
        textAlign(LEFT);
	textSize(40);
	text("You've found " + message, 30, 550);
    text("X", treasureX-15, treasureY+15);
    text("Press 'R' to restart",230,250)
    }
    
    gameChar_x = 45;
	gameChar_y = 137;
    //head
	fill(218,169,193)
    ellipse(mouseX,mouseY-50,30,30);
    //body
    fill(155,79,79)
    rect(mouseX-10,mouseY-35,20,22)
    //arm_left
    fill(151,38,38)
    rect(mouseX-20,mouseY-35,10,15)
    //arm_right
    fill(151,38,38)
    rect(mouseX+10,mouseY-35,10,15)
    //leg_right
    fill(151,38,38)
    rect(mouseX+2,mouseY-13,8,15)
    //leg_left
    fill(151,38,38)
    rect(mouseX-10,mouseY-13,8,15)
    
    //point
    fill(0,0,0,0)
    ellipse(point.X, point.Y, point.radius, point.radius);
    if (textOn) {
        textSize(30);
        fill(0,0,0);
    }

}

//function is called when user clicks
function mousePressed() {
  //add 1 to variable clicks
  clicks ++;

if (stage == 1){
    stage = 2;
    clicks = 0;
}
else if  (dist(mouseX, mouseY, point.X, point.Y) <= point.radius && stage == 2) 
    {
        textOn = true;
        stage = 3;
    }

}
function keyTyped() {
    if (key === 'r' && stage ==3){
        stage = 1;
    }
}