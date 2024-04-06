/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isFalling;
var isRight;
var isPlummeting
var speed;
var jumpSpeed;
var JUMPSPEED;
var cloud;
var sun;
var vertex; // объявление переменной vertex
var vertex_small;
var tree;
var groundHeight;
var treeHeight;
var diamond;
var canyon


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    speed = 4;
    jumpSpeed = 10;
    JUMPSPEED = 10;
    groundHeight = 412;
    treeHeight = 100;
    
    canyon = {
    x1:400,
    y1:500
    }
    
    diamond = {
    up_y:10,  
    up_1x:10,
    up_2x:20,
    up_3x:30,
    
    midl_y:18,    
    midl_1x:5,
    midl_2x:15,    
    midl_3x:25,    
    midl_4x:35,

    
    down_x:20,
    down_y:40
    
  };
    
    cloud = {
        x1:350,
        y1:170,
        x2:380,
        y2:180,
        x3:410,
        y3:180,
        x4:320,
        y4:180,
        x5:290,
        y5:180,
        diameter:40
    };
    
    tree = {
    x: 200,
    y: groundHeight,
    trunkWidth: 30,
    trunkHeight: 20,
    canopyWidth: 120,
    canopyHeight: 100
  };
    
    sun = {
        x: 450,
        y: 200,
        diameter: 350,
        };
    
    //mountain
    vertex = {
        x1: 400+300,
        y1: 100,
        x2: 100+300,
        y2: 434,
        x3: 700+300,
        y3: 434
        
    };
    
    vertex_small = {
        x1: 400+300,
        y1: 100,
        x2: 476+300, //
        y2: 184,
        x3: 325+300, // 
        y3: 184
    }; 
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//canyon_left
    fill(65,18,18);
    rect(401,432,20,180)
    //canyon_middle
    fill(0,0,0);
    rect(421,432,45,180)
    //canyon_left
    fill(65,18,18);
    rect(465,432,20,180)
    
    
    fill(139, 69, 19);
    rect(tree.x, tree.y, tree.trunkWidth, tree.trunkHeight);
  
    fill(50, 190, 50);
    triangle(tree.x - 80,tree.y,tree.x,tree.y - 150,tree.x + 120, tree.y);
    
    fill(50, 100, 50);
    triangle(tree.x + 35 ,tree.y,tree.x,tree.y - 150,tree.x + 120, tree.y);
  
    fill(50, 190, 50);
    triangle(tree.x - 70,tree.y - 50,tree.x,tree.y - 200,tree.x + 100, tree.y - 50);
    
    fill(50, 100, 50);
    triangle(tree.x +24,tree.y - 50,tree.x,tree.y - 200,tree.x + 100, tree.y - 50);
  
    fill(50, 190, 50);
    triangle(tree.x - 55 ,tree.y - 100,tree.x,tree.y - 250,tree.x + 80, tree.y - 100);
    
    fill(50, 100, 50);
    triangle(tree.x + 17 ,tree.y - 100,tree.x,tree.y - 250,tree.x + 80, tree.y - 100);
    
    //sun
    stroke(255,255,0)
    fill(255, 255, 0);
    stroke(255, 215, 0);
    ellipse(sun.x, sun.y, sun.diameter);
    
    // main triangle
    noStroke();
    fill(47, 79, 79); // установка цвета перед отрисовкой
    triangle(vertex.x1, vertex.y1, vertex.x2, vertex.y2, vertex.x3, vertex.y3);

    // second triangle
    noStroke();
    fill(255, 228, 225);
    triangle(vertex_small.x1, vertex_small.y1, vertex_small.x2, vertex_small.y2, vertex_small.x3, vertex_small.y3);
    
    //cloud
    noStroke()
    fill(133,189,239);
    ellipse(cloud.x3+200,cloud.y3,cloud.diameter);
    ellipse(cloud.x5+200,cloud.y5,cloud.diameter);
	ellipse(cloud.x4+200,cloud.y4,cloud.diameter*1.5);
    ellipse(cloud.x2+200,cloud.y2,cloud.diameter*1.5);
    ellipse(cloud.x1+200,cloud.y1,cloud.diameter*2);
    
    //diamond
    noStroke();
  fill(30,144,255);
  triangle(diamond.up_1x,diamond.up_y, diamond.midl_2x, diamond.midl_y, diamond.up_2x,diamond.up_y);
  triangle(diamond.up_2x,diamond.up_y, diamond.midl_3x, diamond.midl_y, diamond.up_3x,diamond.up_y)
  
  fill(135,206,250);
  triangle(diamond.midl_1x, diamond.midl_y, diamond.up_1x, diamond.up_y, diamond.midl_2x, diamond.midl_y)
  triangle(diamond.midl_2x, diamond.midl_y, diamond.up_2x, diamond.up_y, diamond.midl_3x, diamond.midl_y)
  triangle(diamond.midl_3x, diamond.midl_y, diamond.up_3x, diamond.up_y, diamond.midl_4x, diamond.midl_y)
  
  fill(72,61,139);
  triangle(diamond.midl_1x, diamond.midl_y, diamond.down_x, diamond.down_y, diamond.midl_2x, diamond.midl_y)
  triangle(diamond.midl_3x, diamond.midl_y, diamond.down_x, diamond.down_y, diamond.midl_4x, diamond.midl_y)
  
  fill(123,104,238);
  triangle(diamond.midl_2x, diamond.midl_y, diamond.down_x, diamond.down_y, diamond.midl_3x, diamond.midl_y)

	//the game character
    noStroke()
	if(isLeft && isFalling)
	{
        drawJumpingLeft();
        gameChar_x -=speed;
        makeJump();
        

	}
	else if(isRight && isFalling)
	{
		drawJumpingRight();
        gameChar_x +=speed;
        makeJump();

	}
	else if(isLeft)
	{
        
        drawGoLeft();
		
        stopLeft();

	}
	else if(isRight)
	{
        drawGoRight();
        gameChar_x += speed;
		

	}
	else if(isFalling || isPlummeting)
	{
        drawJumpingFront();
        makeJump();

        
        

	}
	else
	{
        drawStandingFront();
		

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here

}

function keyPressed()
{
    if (keyCode == 68){
        isRight = true;
    }
    if (keyCode == 65){
        isLeft = true;
    }
    
    if (keyCode == 32){
        isFalling = true;
    }
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
    if (keyCode == 68){
        isRight = false;
    }
    if (keyCode == 65){
        isLeft = false;
    }
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}

function makeJump(){
            gameChar_y -= jumpSpeed; //=10
        jumpSpeed -= 1;
        
        if (jumpSpeed == -11){
            jumpSpeed = JUMPSPEED;
            isFalling = false;
        }
}
function stopLeft(){
    if (gameChar_x == 401){
            gameChar_x == 401;
        }
        else{
            gameChar_x -= speed
        }
}

function drawJumpingLeft() {
  //Jumping to the left
    //head
 fill(218,169,193)
    ellipse(gameChar_x,gameChar_y-60,30,30);
    //body
    fill(155,79,79)
    rect(gameChar_x-5,gameChar_y-45,12,22);
    //arm_left
    fill(151,38,38);
    rect(gameChar_x-3,gameChar_y-55,8,17);
    //leg_left
    fill(151,38,38);
    rect(gameChar_x-5,gameChar_y-23,15,10);
}

function drawJumpingRight() {
     //head
 fill(218,169,193);
    ellipse(gameChar_x,gameChar_y-60,30,30);
    //body
    fill(155,79,79);
    rect(gameChar_x-5,gameChar_y-45,12,22);
    //arm_left
    fill(151,38,38);
    rect(gameChar_x-3,gameChar_y-53,8,17);
    //leg_right
    fill(151,38,38);
    rect(gameChar_x-10,gameChar_y-23,15,10);
}

function drawGoLeft() {
     //head
 fill(218,169,193);
    ellipse(gameChar_x,gameChar_y-50,30,30);
    
    //body
    fill(155,79,79);
    rect(gameChar_x-5,gameChar_y-35,12,22);
    //arm_left
    fill(151,38,38);
    rect(gameChar_x-3,gameChar_y-35,8,17);
    //leg_right
    fill(151,38,38);
    rect(gameChar_x-5,gameChar_y-13,10,15);
}

function drawGoRight() {
        //head
 fill(218,169,193);
    ellipse(gameChar_x,gameChar_y-50,30,30);
    //body
    fill(155,79,79);
    rect(gameChar_x-5,gameChar_y-35,12,22);
    //arm_left
    fill(151,38,38);
    rect(gameChar_x-3,gameChar_y-35,8,17);
    //leg_right
    fill(151,38,38);
    rect(gameChar_x-3,gameChar_y-13,10,15);
}

function drawJumpingFront() {
     //head
 fill(218,169,193);
    ellipse(gameChar_x,gameChar_y-60,30,30);
    //body
    fill(155,79,79);
    rect(gameChar_x-10,gameChar_y-45,20,22);
    //arm_left
    fill(151,38,38);
    rect(gameChar_x-20,gameChar_y-45,10,15);
    //arm_right
    fill(151,38,38);
    rect(gameChar_x+10,gameChar_y-45,10,10);
    //leg_right
    fill(151,38,38);
    rect(gameChar_x+2,gameChar_y-23,8,15);
    //leg_left
    fill(151,38,38);
    rect(gameChar_x-10,gameChar_y-23,8,10);
}

function drawStandingFront() {
        //head
 fill(218,169,193)
    ellipse(gameChar_x,gameChar_y-50,30,30);
    //body
    fill(155,79,79)
    rect(gameChar_x-10,gameChar_y-35,20,22);
    //arm_left
    fill(151,38,38)
    rect(gameChar_x-20,gameChar_y-35,10,15);
    //arm_right
    fill(151,38,38);
    rect(gameChar_x+10,gameChar_y-35,10,15);
    //leg_right
    fill(151,38,38);
    rect(gameChar_x+2,gameChar_y-13,8,15);
    //leg_left
    fill(151,38,38);
    rect(gameChar_x-10,gameChar_y-13,8,15);
}