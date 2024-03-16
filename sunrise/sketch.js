var groundHeight;
var mountain1;
var mountain2;

var tree;

var moon;
var sun;
var darkness;
var cloud1
var cloud2

function setup()
{
	createCanvas(800, 600);
	//set the groundHeight proportional to the canvas size
	groundHeight = (height / 3) * 2;

	//initalise the mountain objects with properties to help draw them to the canvas
	mountain1 = {
		x: 400,
		y: groundHeight,
		height: 320,
		width: 230
	};
	mountain2 = {
		x: 550,
		y: groundHeight,
		height: 200,
		width: 130
	};

	//initalise the tree object
	tree = {
		x: 173,
		y: groundHeight + 20,
		trunkWidth: 20,
		trunkHeight: 150,
		canopyWidth: 130,
		canopyHeight: 160
	};

    //initalise the sun 
	sun = {
		x: 150,
		y: 70,
		diameter: 80,
	};
    
    moon =  {
        x: 600, 
        y: 70, 
        diameter: 80,};
    
    cloud1 = {
        x_1:150,
        y_1:110,
        x_2:180,
        y_2:100,
        x_3:210,
        y_3:110,
        diameter:60};
    
    cloud2 = {
        x_1:400,
        y_1:40,
        x_2:430,
        y_2:35,
        x_3:460,
        y_3:40,
        diameter:60};
    
}


	//set the initial darkness
	



function draw()
{
    darkness = min(185,mouseX/5.5);
	//TASK: update the values for the moons brightness, the sun's position and the darkness.
	//You can either map this to the mouse's location (i.e. the futher left the mouse is the more daylight) or you can just change the values gradually over time.


	//draw the sky
	background(150-darkness, 200-darkness, 255-darkness);
	noStroke();

	//draw the sun
	fill(255, 255, 0);
	ellipse(sun.x, max(sun.y, mouseX), sun.diameter);
    
    //draw the moon
    fill(min(255, 150+darkness/2),min(255, 200+darkness/2),min(255, 255+darkness/2));
    ellipse(moon.x, moon.y, moon.diameter );
    
    //TASK: you'll need to draw the moon too. Make sure you use brightness to adjust the colour

	//draw the ground and make it green
	fill(70-darkness, max(100, 200-darkness), 0);
	rect(0, groundHeight, width, height - groundHeight);

	//draw the mountains
	fill(max(40, 120-darkness));
	triangle(mountain1.x, mountain1.y,
		mountain1.x + mountain1.width, mountain1.y,
		mountain1.x + (mountain1.width / 2), mountain1.y - mountain1.height);

	triangle(mountain2.x, mountain2.y,
		mountain2.x + mountain2.width, mountain2.y,
		mountain2.x + (mountain2.width / 2), mountain2.y - mountain2.height);
    
    //shadow cloud1
    fill(26,52,58);
    ellipse(cloud1.x_1+mouseX/2,cloud1.y_1*4.3,cloud1.diameter*1.4);
    ellipse(cloud1.x_2+mouseX/2,cloud1.y_2*4.6,cloud1.diameter*1.4);
    ellipse(cloud1.x_3+mouseX/2,cloud1.y_3*4.3,cloud1.diameter*1.3);
    

    //shadow cloud2
    fill(26,52,58,250);
    ellipse(cloud2.x_1+mouseX/8,cloud2.y_1*14,cloud2.diameter*1.4);
    ellipse(cloud2.x_2+mouseX/8,cloud2.y_2*16,cloud2.diameter*1.1);
    ellipse(cloud2.x_3+mouseX/8,cloud2.y_3*13.9,cloud2.diameter);

    fill(max(70, 128-darkness),0,0); 
    rect(tree.x,tree.y,tree.trunkWidth,tree.trunkHeight);
    fill(0,max(80,144-darkness),48-darkness);
    ellipse(tree.x+7, tree.y, tree.canopyWidth, tree.canopyHeight);
    
    
    //cloud1
    fill(193-darkness,239-darkness,250 - darkness);
    ellipse(cloud1.x_1+mouseX/2,cloud1.y_1,cloud1.diameter*1.4);
    ellipse(cloud1.x_2+mouseX/2,cloud1.y_2,cloud1.diameter*1.4);
    ellipse(cloud1.x_3+mouseX/2,cloud1.y_3,cloud1.diameter*1.3);
    
    
    //cloud2
    fill(193-darkness,239-darkness,250 - darkness);
    ellipse(cloud2.x_1+mouseX/8,cloud2.y_1,cloud2.diameter*1.4);
    ellipse(cloud2.x_2+mouseX/8,cloud2.y_2,cloud2.diameter*1.1);
    ellipse(cloud2.x_3+mouseX/8,cloud2.y_3,cloud2.diameter);
    



}