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
var vertex;
var vertex_small;
var mountain_coor_x;
var tree;
var groundHeight;
var treeHeight;
var diamond;
var position;
var canyon;
var isInCayon;
var treeCoor_x;
var cloud;
var clouds_coor_x;
var clouds_coor_y;


function setup()
{
	createCanvas(1024*1.5, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/4;
	gameChar_y = floorPos_y;
    speed = 4;
    jumpSpeed = 10;
    JUMPSPEED = 10;
    groundHeight = 412;
    treeHeight = 100;
    
    isInCayon = false;
    
    
    canyon = {
    x1:400,
    y1:500
    }
    
    position = {
		pos_x: random(30, 1000),
		pos_y: random(350, 390),
		scale: 1.3
    }
    diamond = {
		up_y: position.pos_y,
		up_1x: position.pos_x,
		up_2x: position.pos_x + 10 * position.scale,
		up_3x: position.pos_x + 20 * position.scale,
		midl_y: position.pos_y + 10 * position.scale,
		midl_1x: position.pos_x - 5 * position.scale,
		midl_2x: position.pos_x + 5 * position.scale,
		midl_3x: position.pos_x + 15 * position.scale,
		midl_4x: position.pos_x + 25 * position.scale,
		down_x: position.pos_x + 10 * position.scale,
		down_y: position.pos_y + 30 * position.scale
	};
    
    
    
    sun = {
        x: 450,
        y: 200,
        diameter: 350,
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
    rect(401,432,20,50)
    //canyon_middle
    fill(0,0,0);
    rect(421,432,45,50)
    //canyon_left
    fill(65,18,18);
    rect(465,432,20,50)
    
    
    
    //sun
    fill(255, 255, 0);
    ellipse(sun.x, sun.y, sun.diameter);
    
    
    
    
    
    
    drawMountain();
    drawTree();
    drawCloud();
    drawDiamond();
	
	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
moveLogic();
}

function moveLogic()
{
    //the game character
    noStroke();
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
		isInCanyon();
        stopLeft();
        if (gameChar_x > 419 && gameChar_x < 450){
        gameChar_y = floorPos_y + 48;
    } else {
        gameChar_y = floorPos_y;
    }

	}
	else if(isRight)
	{
        drawGoRight();
        gameChar_x += speed;
        isInCanyon();
        if (gameChar_x > 419 && gameChar_x < 450){
        gameChar_y = floorPos_y + 48;
    } else {
        gameChar_y = floorPos_y;
    }
		

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
}
    //cloud
    function drawCloud(){
        clouds_coor_x = [90,400,800,1100,1300];
        clouds_coor_y = [170,150,200,155,165];
        
        for (var i = 0; i < clouds_coor_x.length; i++ ) {
        
    cloud = {
        x:clouds_coor_x[i],
        y:clouds_coor_y[i],
        diameter:40
    };
            
        
    noStroke(); 
    //fill the sky blue 
    fill(133,189,239);
    ellipse(cloud.x+120,cloud.y,cloud.diameter);   
    ellipse(cloud.x,cloud.y,cloud.diameter);
    ellipse(cloud.x+30,cloud.y,cloud.diameter*1.5);    
    ellipse(cloud.x+90,cloud.y,cloud.diameter*1.5);
    ellipse(cloud.x+60,cloud.y-10,cloud.diameter*2);
        
        }
    }

function isInCanyon() {
        if (gameChar_x > 471 && gameChar_x < 500){
        gameChar_y = floorPos_y;
    } else {
        gameChar_y = floorPos_y;
    }
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


    
        


function drawTree(){
    
    treeCoor_x = [200,600,850,1300];
    
    for (var i = 0;i < treeCoor_x.length; i++){
    tree = {
    x: treeCoor_x[i],
    y: groundHeight,
    trunkWidth: 30,
    trunkHeight: 20,
    canopyWidth: 120,
    canopyHeight: 100
  };
    
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
    }
}

function drawMountain(){
    
    mountain_coor_x = [200,1000];
    
    for (var i = 0; i < mountain_coor_x.length; i++ ) {
        
        
    vertex = {
        x: mountain_coor_x[i],
        y1: 100,
        y2: 434,
        y3: 434
        
    };
    
    vertex_small = {
        x: mountain_coor_x[i],
        y1: 100,
        y2: 184,  
        y3: 184
    }; 
    
    // main triangle
    noStroke();
    fill(47, 79, 79); // установка цвета перед отрисовкой
    triangle(vertex.x+500, vertex.y1, vertex.x+200, vertex.y2, vertex.x+800, vertex.y3);

    // second triangle
    noStroke();
    fill(255, 228, 225);
    triangle(vertex_small.x+500, vertex_small.y1, vertex_small.x+576, vertex_small.y2, vertex_small.x+425, vertex_small.y3);
        
    }   
}

function drawDiamond() {
	fill(30, 144, 255);
	triangle(diamond.up_1x, diamond.up_y, diamond.midl_2x, diamond.midl_y, diamond.up_2x, diamond.up_y);
	triangle(diamond.up_2x, diamond.up_y, diamond.midl_3x, diamond.midl_y, diamond.up_3x, diamond.up_y);
	fill(135, 206, 250);
	triangle(diamond.midl_1x, diamond.midl_y, diamond.up_1x, diamond.up_y, diamond.midl_2x, diamond.midl_y);
	triangle(diamond.midl_2x, diamond.midl_y, diamond.up_2x, diamond.up_y, diamond.midl_3x, diamond.midl_y);
	triangle(diamond.midl_3x, diamond.midl_y, diamond.up_3x, diamond.up_y, diamond.midl_4x, diamond.midl_y);
	fill(72, 61, 139);
	triangle(diamond.midl_1x, diamond.midl_y, diamond.down_x, diamond.down_y, diamond.midl_2x, diamond.midl_y);
	triangle(diamond.midl_3x, diamond.midl_y, diamond.down_x, diamond.down_y, diamond.midl_4x, diamond.midl_y);
	fill(123, 104, 238);
	triangle(diamond.midl_2x, diamond.midl_y, diamond.down_x, diamond.down_y, diamond.midl_3x, diamond.midl_y);
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