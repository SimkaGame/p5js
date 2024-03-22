var cloud;
var tree;
var sun;
var groundHeight;
var treeHeight;
var gameChar_x = 0;
var gameChar_y = 0;
var vertex; // объявление переменной vertex
var vertex_small;
var ellipse_left;
var ellipse_right;
var diamond;
var hero_1;

function setup()

{
    
	createCanvas(1024, 576);
    
    
    groundHeight = 500;
    treeHeight = 100;
    
  
    tree = {
    x: 750,
    y: groundHeight,
    trunkWidth: 30,
    trunkHeight: 20,
    canopyWidth: 120,
    canopyHeight: 100
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
    
    sun = {
    x: 450,
    y: 200,
    diameter: 350,
    };
    
    vertex = {
        x1: 400+300,
        y1: 100,
        x2: 100+300,
        y2: 500,
        x3: 700+300,
        y3: 500
        
    };
    
    vertex_small = {
        x1: 400+300,
        y1: 100,
        x2: 476+300, //
        y2: 200,
        x3: 325+300, // 
        y3: 200
    }; 
    
    ellipse_left = {
        x1: 30,
        y1: 30,
        d1: 30
        
    };    
    
    ellipse_right = {
        x1: 30,
        y1: 30,
        d1: 30
    };
    
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
}

function draw()
{   
    
	background(100, 155, 255); //fill the sky blue
    
    
    fill(0,102,0);
	rect(0, groundHeight, width, height - groundHeight);
    
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
    
    
    stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
    //head
	fill(218,169,193)
    ellipse(gameChar_x,gameChar_y-50,30,30);
    //body
    fill(155,79,79)
    rect(gameChar_x-10,gameChar_y-35,20,22)
    //arm_left
    fill(151,38,38)
    rect(gameChar_x-20,gameChar_y-35,10,15)
    //arm_right
    fill(151,38,38)
    rect(gameChar_x+10,gameChar_y-35,10,15)
    //leg_right
    fill(151,38,38)
    rect(gameChar_x+2,gameChar_y-13,8,15)
    //leg_left
    fill(151,38,38)
    rect(gameChar_x-10,gameChar_y-13,8,15)
    
    
    


	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);

	gameChar_x = 245;
	gameChar_y = 137;
	//head
	fill(218,169,193)
    ellipse(gameChar_x,gameChar_y-60,30,30);
    //body
    fill(155,79,79)
    rect(gameChar_x-10,gameChar_y-45,20,22)
    //arm_left
    fill(151,38,38)
    rect(gameChar_x-20,gameChar_y-45,10,15)
    //arm_right
    fill(151,38,38)
    rect(gameChar_x+10,gameChar_y-45,10,10)
    //leg_right
    fill(151,38,38)
    rect(gameChar_x+2,gameChar_y-23,8,15)
    //leg_left
    fill(151,38,38)
    rect(gameChar_x-10,gameChar_y-23,8,10)
    
    
        


	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//head
	fill(218,169,193)
    ellipse(gameChar_x,gameChar_y-50,30,30);
    
    //body
    fill(155,79,79)
    rect(gameChar_x-5,gameChar_y-35,12,22)
    //arm_left
    fill(151,38,38)
    rect(gameChar_x-3,gameChar_y-35,8,17)
    //leg_right
    fill(151,38,38)
    rect(gameChar_x-5,gameChar_y-13,10,15)


	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
    //head
	fill(218,169,193)
    ellipse(gameChar_x,gameChar_y-50,30,30);
    //body
    fill(155,79,79)
    rect(gameChar_x-5,gameChar_y-35,12,22)
    //arm_left
    fill(151,38,38)
    rect(gameChar_x-3,gameChar_y-35,8,17)
    //leg_right
    fill(151,38,38)
    rect(gameChar_x-3,gameChar_y-13,10,15)


	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//head
	fill(218,169,193)
    ellipse(gameChar_x,gameChar_y-60,30,30);
    //body
    fill(155,79,79)
    rect(gameChar_x-5,gameChar_y-45,12,22)
    //arm_left
    fill(151,38,38)
    rect(gameChar_x-3,gameChar_y-45,8,17)
    //leg_right
    fill(151,38,38)
    rect(gameChar_x-3,gameChar_y-23,10,15)



	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
    //head
	fill(218,169,193)
    ellipse(gameChar_x,gameChar_y-60,30,30);
    //body
    fill(155,79,79)
    rect(gameChar_x-5,gameChar_y-45,12,22)
    //arm_left
    fill(151,38,38)
    rect(gameChar_x-3,gameChar_y-45,8,17)
    //leg_right
    fill(151,38,38)
    rect(gameChar_x-5,gameChar_y-23,10,15)

	
    
   

    //cloud
    noStroke()
    fill(133,189,239);
    ellipse(cloud.x3+200,cloud.y3,cloud.diameter);
    ellipse(cloud.x5+200,cloud.y5,cloud.diameter);
	ellipse(cloud.x4+200,cloud.y4,cloud.diameter*1.5);
    ellipse(cloud.x2+200,cloud.y2,cloud.diameter*1.5);
    ellipse(cloud.x1+200,cloud.y1,cloud.diameter*2);

    
    //tree
    noStroke()
    fill(139, 69, 19,240);
    rect(tree.x, tree.y, tree.trunkWidth, tree.trunkHeight);

    fill(50, 190, 50,240);
    triangle(tree.x - 80,tree.y,tree.x,tree.y - 150,tree.x + 120, tree.y);
    fill(50, 100, 50);
    triangle(tree.x + 35 ,tree.y,tree.x,tree.y - 150,tree.x + 120, tree.y);

    fill(50, 190, 50.240);
    triangle(tree.x - 70,tree.y - 50,tree.x,tree.y - 200,tree.x + 100, tree.y - 50);
    fill(50, 100, 50,240);
    triangle(tree.x +24,tree.y - 50,tree.x,tree.y - 200,tree.x + 100, tree.y - 50);

    fill(50, 190, 50,240);
    triangle(tree.x - 55 ,tree.y - 100,tree.x,tree.y - 250,tree.x + 80, tree.y - 100);
    fill(50, 100, 50,240);
    triangle(tree.x + 17 ,tree.y - 100,tree.x,tree.y - 250,tree.x + 80, tree.y - 100);
    
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
}
