//Hack it - we are the robot family

//TASK 1. modify the code so that all three robots are drawn
//TASK 2. try changing the numbers to create your robot family
//TASK 3. create more arrays and use the values in them to add more variation to the robots


var robotWidths;
var robotHeights;
var headWidths;
var distance;
var robotEyes;
var antennaEL;
var ears;
var arms;

function setup()
{
	//create a canvas for the robot
	createCanvas(2000, 700);
    robotWidths = [70,100,150];
    robotHeights = [50,120,110];
    headWidths = [0.7,0.8,1.2];
    robotNose = [];
    robotEyes = [20,22,26];
    distance = 240;
    antennaEL = [10,15,20];
    ears = [15,25,33];
    arms = [70,85,100];

}

function draw()
{
	strokeWeight(2);
    translate(0, 400);

    //ROBOT 1
    translate(200,0);
    
    
for (var i=0; i <3; i++){
    

    fill(200);
    //body
    rect(-robotWidths[i]/2 + distance * i, -robotHeights[i] - 130, robotWidths[i], 130);
    //arms
    rect(-70 + distance * i, -robotHeights[i] - 130, 30, arms[i]);
    rect(40 + distance * i,  -robotHeights[i] - 130, 30, arms[i]);
    //legs
    rect(-30 + distance * i, -robotHeights[i], 30, robotHeights[i]);
    rect(0 + distance * i,  -robotHeights[i], 30, robotHeights[i]);

    //robot heads
    fill(200);
    rect(-50* headWidths[i] + distance * i, -robotHeights[i] - 230, 100* headWidths[i], 100, 10);

    //ears
    fill(255, 0, 0);
    rect(-50 * headWidths[i] - 10 + distance * i, -robotHeights[i] - 200, 10, ears[i]);
    rect(50 * headWidths[i] + distance * i, -robotHeights[i] - 200, 10, ears[i]);

    //robots' antennas
    fill(250, 250, 0);
    ellipse(0 + distance * i, -robotHeights[i] - 237, antennaEL[i], antennaEL[i]);
    fill(200, 0, 200);
    rect(-10 + distance * i, -robotHeights[i] - 233, 20, 10);

    //robot's eyes
    fill(255)
    ellipse(-25 * headWidths[i] + distance * i, -robotHeights[i] - 200, robotEyes[i],robotEyes[i]);
    point(-25 * headWidths[i] + distance * i, -robotHeights[i] - 200);
    ellipse(25 * headWidths[i] + distance * i, -robotHeights[i] - 200, robotEyes[i], robotEyes[i]);
    point(25 * headWidths[i] + distance * i, -robotHeights[i] - 200);

    //robots' nose
    fill(255, 0, 0);
    triangle(0+ distance * i, -robotHeights[i] - 190 , -15 + distance * i, -robotHeights[i] - 170,15 + distance * i, -robotHeights[i] - 170);

    //robot mouth
    noFill();
    beginShape();
    vertex(-23 + distance * i, -robotHeights[i] - 155);
    vertex(-15 + distance * i, -robotHeights[i] - 145);
    vertex(-9 + distance * i, -robotHeights[i] - 155);
    vertex(-1 + distance * i, -robotHeights[i] - 145);
    vertex(7 + distance * i, -robotHeights[i] - 155);
    vertex(15 + distance * i, -robotHeights[i] - 145);
    vertex(23 + distance * i, -robotHeights[i] - 155);
    endShape();
}
        
    

}