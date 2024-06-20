/*

The Game Project

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isFalling;
var isRight;
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
var isInCayon;
var treeCoor_x;
var cloud;
var clouds_coor_x;
var clouds_coor_y;
var coin;
var viewTime;
var textTimer;
var counter;
var sky;
var platforms;
var isJumping;
var isContact;
var posE;
var health;
var heart;


function setup()
{
	createCanvas(1024*1.5, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/4;
	gameChar_y = floorPos_y - 1;
    speed = 4;
    JUMPSPEED = 15;
    jumpSpeed = JUMPSPEED;
    groundHeight = 412;
    treeHeight = 100;
    isJumping = false;
    isContact = false;
    
    viewTime = false;
    viewTimer = 0;
    health = 5;
    
    counter = 0;
    
    platforms = [];
    
    platforms.push(createPlatforms(100, floorPos_y - 100,250));
    platforms.push(createPlatforms(500, floorPos_y - 180,120));
    platforms.push(createPlatforms(700, floorPos_y - 300,180));
    platforms.push(createPlatforms(900, floorPos_y - 120,200));
    platforms.push(createPlatforms(0, floorPos_y,400));
    platforms.push(createPlatforms(480, floorPos_y,1530));
    console.log(platforms);
    
    
    
    //diamond
    position = {
		pos_x: random(30, 1000),
		pos_y: 385,
		scale: 1.3
    };
    
    
    sky = {
        r:100,
        g:155,
        b:255
    }
    
    sun = {
        x:random(0,1500), //450,
        y: random(-200,700),//200
        diameter: 350,
        };
    
    //Enemies
    posE = 110;
    speedE = 2;
    
}

function draw()
{
    background(sky.r,sky.g,sky.b); //fill the sky blue
    
    
    //sun
    noStroke();
    fill(255, 255, 0);
    ellipse(sun.x, sun.y, sun.diameter);
    
    //green ground
	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y);
    
    
    drawCloud();
    drawMountain();
    drawTree();
    drawDiamond();
    checkCoins(position);
    checkEnemy();
    moveSun();
    drawEnemies();
    drawHeart();
    
    for (var i = 0; i < platforms.length; i ++){
        platforms[i].draw();
    }
    
    drawCanyon();
    
    if (viewTime && textTimer < 50){
        fill('yellow');
        textSize(50);
        text('GOT IT',random(50, width), random(height/2, height));
        textTimer +=1;
}
	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    moveLogic();
    
      fill(0);   
      strokeWeight(4);
      textSize(20);
      text("X: "+ round(mouseX), mouseX - 50, mouseY - 25);
      text("Y: "+ round(mouseY), mouseX - 50, mouseY);
      stroke('black');
      fill(51,255,221);
      textSize(35);
      text('Counter diamonds:  '+counter,20,50);
}
function moveLogic()
{
    //the game character
    noStroke();
    
    isInCanyon();
    
	if(isLeft && (isFalling || isJumping))
	{
        for (var i = 0; i < platforms.length; i++){
            isContact = platforms[i].checkContact(gameChar_x, gameChar_y);
            if (isContact) {
                break;
            }
        }
        drawJumpingLeft();
        gameChar_x -=speed;
        makeJump2();
        makeFalling();
        

	}
	else if(isRight && (isFalling || isJumping))
	{
        for (var i = 0; i < platforms.length; i++){
            isContact = platforms[i].checkContact(gameChar_x, gameChar_y);
            if (isContact) {
                break;
            }
        }
		drawJumpingRight();
        gameChar_x +=speed;
        makeJump2();
        makeFalling();

	}
    
    else if(isLeft)
 {
        
        for (var i = 0; i < platforms.length; i++){
            isContact = platforms[i].checkContact(gameChar_x, gameChar_y);
             if (isContact) {
                break;
            }
            }
            if (!isContact && gameChar_y != floorPos_y) {
                isFalling = true;
            }
        gameChar_x -=speed;
        
        drawGoLeft();

 }
 else if(isRight)
 {
        drawGoRight();
        gameChar_x += speed;
        for (var i = 0; i < platforms.length; i++){
            isContact = platforms[i].checkContact(gameChar_x, gameChar_y);
            if (isContact) {
                break;
            }
        }
        if (!isContact && gameChar_y != floorPos_y) {
                isFalling = true;
            }
 }

	else if(isFalling || isJumping)
	{
        for (var i = 0; i < platforms.length; i++){
            isContact = platforms[i].checkContact(gameChar_x, gameChar_y);
            if (isContact) {
                break;
            }
        }
        
        drawJumpingFront();
        makeJump2();
        makeFalling();

        
        

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
            
        push();
        
        cloud = {
            x:clouds_coor_x[i],
            y:clouds_coor_y[i],
            diameter:40
    };
            
        translate(cloud.x, cloud.y);
        scale(1);
            
        noStroke(); 
        //fill the sky blue 
        fill(133,189,239);
        ellipse(120,0,cloud.diameter);   
        ellipse(0,0,cloud.diameter);
        ellipse(30,0,cloud.diameter*1.5);    
        ellipse(90,0,cloud.diameter*1.5);
        ellipse(60,-10,cloud.diameter*2);
            
        pop();
        
        }
    }

function isInCanyon() {
        if (gameChar_x > 420 && gameChar_x < 450 && gameChar_y >= floorPos_y){
        isFalling = true;
        isLeft = false;
        isRight = false;
            }
        if(gameChar_y >= 630){
            gameChar_x = random(50,1500);
            gameChar_y = groundHeight;
        }
    }

function drawCanyon(){
    
    canyon = {
    x1:400,
    y1:500
    };
    
    //canyon_left
    noStroke();
    fill(65,18,18);
    rect(401,432,20,500);
    //canyon_middle
    fill(0,0,0);
    rect(421,432,45,500);
    //canyon_left
    fill(65,18,18);
    rect(465,432,20,500);
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
        isJumping = true;
    }
}


function keyReleased()
{
    if (keyCode == 68){
        isRight = false;
    }
    if (keyCode == 65){
        isLeft = false;
    }
}


function checkCoins(position){
    if (dist(gameChar_x,gameChar_y-45,position.pos_x,position.pos_y) < 20){
        position.pos_x = random(15,width - 15);
        position.pos_y = random(floorPos_y -40,floorPos_y -110);
        viewTime = true;
        textTimer = 0;
        counter +=1;
    }
}

function checkEnemy(){
    if(dist(gameChar_x,gameChar_y-45,posE,300) < 20){
        gameChar_x = random(50,1500);
        gameChar_y = groundHeight - 1;
        health -= 1;
    }
}

function moveSun(){
    //закат
    if  (280 < sun.y && sun.y < 590){
        sky.r = 221;
        sky.g = 130;
        sky.b = 110;
    }
    //ночь
    else if (sun.y < -190 || sun.y > 590){
        sky.r = 44;
        sky.g = 56;
        sky.b = 97;
    }
    //остальные значения(День)
}

function drawHeart(){
    
    heart = {
        x:47,
        y:107,
        s:5
    }
    
    //health(main)
    noStroke();
    fill('red');
    rect(heart.x,heart.y - 5,heart.s,heart.s);
    rect(heart.x,heart.y - 10,heart.s,heart.s);
    rect(heart.x - 5,heart.y - 10,heart.s,heart.s);
    rect(heart.x + 5,heart.y - 10,heart.s,heart.s);
    rect(heart.x,heart.y - 5,heart.s,heart.s);
    rect(heart.x -5,heart.y - 15,heart.s * 3,heart.s);
    rect(heart.x - 10,heart.y - 15,heart.s * 5,heart.s);
    rect(heart.x - 10,heart.y - 20,heart.s * 5,heart.s);
    stroke('black')
    text(health,95,108);
    
    //health(stroke)
    noStroke();
    fill('black');
    rect(heart.x,heart.y,heart.s,heart.s);
    rect(heart.x - 5,heart.y - 5,heart.s,heart.s);
    rect(heart.x - 10,heart.y - 10,heart.s,heart.s);
    rect(heart.x - 15,heart.y - 20,heart.s,heart.s * 2);
    rect(heart.x - 10,heart.y - 25,heart.s * 2,heart.s);
    rect(heart.x,heart.y - 20,heart.s,heart.s);
    rect(heart.x + 5,heart.y - 25,heart.s * 2,heart.s);
    rect(heart.x + 15,heart.y - 20,heart.s,heart.s*2);
    rect(heart.x + 10,heart.y - 10,heart.s,heart.s);
    rect(heart.x + 5,heart.y - 5,heart.s,heart.s);
}


function drawTree(){
    
    treeCoor_x = [50,250,400,590,720,850,990,1100,1250,1300];
    
    for (var i = 0; i < treeCoor_x.length; i++){
        
        push();
        
        tree = {
        x: treeCoor_x[i],
        y: groundHeight + 2,
        trunkWidth: 30,
        trunkHeight: 20,
        canopyWidth: 120,
        canopyHeight: 100
      };
        
    
        translate(tree.x, tree.y);
        scale(0.7);

        fill(139, 69, 19);
        rect(0,0, tree.trunkWidth, tree.trunkHeight+6);

        fill(50, 190, 50);
        triangle(- 80,0,0, - 150,120,0);

        fill(50, 100, 50);
        triangle(35,0,0,-150,120,0);

        fill(50, 190, 50);
        triangle(- 70,- 50,0,- 200,100,- 50);

        fill(50, 100, 50);
        triangle(24,- 50,0,- 200,100,-50);

        fill(50, 190, 50);
        triangle(-55,- 100,0,- 250,80,- 100);

        fill(50, 100, 50);
        triangle(17 ,- 100,0,- 250,80,- 100);
        
        pop();
        
    }
}

function createPlatforms(x, y, length) {
    var isContact;
    var platform = {
        x: x,
        y: y,
        length: length,
        draw: function() {
            noStroke();
            fill(0,155,0);
            rect(this.x, this.y, this.length, 20);
        },
        checkContact: function(gc_x, gc_y){
            if(gc_x > this.x && gc_x < this.x + this.length){
                var distance = this.y - gc_y;
                if (distance >= 0 && distance < 7){
                    console.log("set isContact true by checkContact");
                    isContact = true;
                    return isContact;
                }
            }
             console.log("set isContact false by checkContact");
             isContact = false;
             return isContact;
        }
    }
    
    return platform;
    
}

function drawMountain(){
    
    mountain_coor_x = [200,1000];
    
    for (var i = 0; i < mountain_coor_x.length; i++ ) {
        

        
        vertex = {
            x: mountain_coor_x[i],
            y1: 98,
            y2: 432,
            y3: 432

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

function drawEnemies() {
    posE = posE + speedE; // Move slightly to the right every frame by changing the value of x by 1
	if (posE > 325 || posE < 105){
      speedE *= -1;
      }
  if (posE == 0){
      speedE *= -1 ;
      }
    //drawing
    //body
    fill(254,212,188);
    rect(posE + 6,315, 13, 13);
    //legs
    fill('brown');
    rect(posE,326,10,5);
    rect(posE + 15,326,10,5);
    //head
    fill(245,57,12);
    triangle(posE + 3,319,posE + 12,305,posE + 22,319);
    //eyes
    stroke('black');
    strokeWeight(2);
    point(posE + 10,313);
    point(posE + 16,313);
}

function drawDiamond() {
    
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


function makeJump2() {
    if (isJumping) {
        gameChar_y -= jumpSpeed;
        jumpSpeed -= 1;
        if (jumpSpeed == 0){
            jumpSpeed = JUMPSPEED;
            isJumping = false;
            isFalling = true;
        }
        
    }
}

function makeFalling() {
    if (isFalling) {
        gameChar_y +=4;
        
        if (gameChar_y >= floorPos_y){
            isFalling = false;
        }
        if (isContact){
            isFalling = false;
        }
    }
}

function drawJumpingLeft() {
  //Jumping to the left
  //head
    
    push();
    
    translate(gameChar_x,gameChar_y);
    scale(1);
    
    fill(218,169,193)
    ellipse(0,-60,30,30);
    //body
    fill(155,79,79)
    rect(-5,-45,12,22);
    //arm_left
    fill(151,38,38);
    rect(-3,-55,8,17);
    //leg_left
    fill(151,38,38);
    rect(-5,-23,15,10);
    
    pop();
}

function drawJumpingRight() {
     //head
    
    push();
    
    translate(gameChar_x,gameChar_y);
    scale(1);
    
    fill(218,169,193);
    ellipse(0,-60,30,30);
    //body
    fill(155,79,79);
    rect(-5,-45,12,22);
    //arm_left
    fill(151,38,38);
    rect(-3,-53,8,17);
    //leg_right
    fill(151,38,38);
    rect(-10,-23,15,10);
    
    pop();
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
    push();
    
    translate(gameChar_x,gameChar_y);
    scale(1);
    
    fill(218,169,193);
    ellipse(0,-60,30,30);
    //body
    fill(155,79,79);
    rect(-10,-45,20,22);
    //arm_left
    fill(151,38,38);
    rect(-20,-45,10,15);
    //arm_right
    fill(151,38,38);
    rect(10,-45,10,10);
    //leg_right
    fill(151,38,38);
    rect(2,-23,8,15);
    //leg_left
    fill(151,38,38);
    rect(-10,-23,8,10);
    
    pop();
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