function setup()
{
	//create a canvas for the robot
	createCanvas(500, 1500);
    stroke(0,0,250)
}

function draw()
{
	strokeWeight(6);

	//robots head
	fill(26,211,232);
	rect(100, 100, 300, 300, 20);


	//robots antenna
	fill(250, 250, 0);
	ellipse(250, 70, 60, 60);

	fill(200, 0, 200);
	rect(210, 80, 80, 30);

	//robots eyes
	fill(255);
	ellipse(175, 200, 80, 80);
	point(190, 225);
    arc(330, 195, 80, 80, 0, PI);
	//ellipse(325, 200, 80, 80);
	point(339, 225);
    
    //robots eyebrow_1
    fill(128, 32, 13);
    rect(130, 150, 90, 20);
    
    //robots eyebrow_2
    fill(128, 32, 13);
	rect(285, 180, 90, 20);


	//robots nose
	fill(255, 255, 255);
    ellipse(255, 240, 30, 30);
    

	//robots ears
    fill(0, 0, 0);
	rect(80, 180, 30, 100);
	rect(390, 180, 30, 100);

	//robots mouth
	fill(255,255,255);
	beginShape();
	vertex(175, 340);
	vertex(200, 390);
	vertex(225, 340);
	vertex(250, 340);
	vertex(275, 340);
	vertex(300, 390);
	vertex(325, 340);
	endShape();
    rect(175,340,50,0,5)
    rect(275,340,50,0,5)
    
    //robot legs
    fill(26,211,232);
	rect(125, 700, 60, 200);
    
    fill(26,211,232);
	rect(300, 700, 60, 200);
    
    //body robot
    fill(26,211,232);
    ellipse(250, 600, 300,400);
    
    //arms robot
    fill(26,211,232);
    rect(350, 450, 60, 200);
    fill(26,211,232);
    rect(100, 450, 60, 200);
}