var rocket; 
var baseLine;
var color;

function setup()
{
     createCanvas(800, 600);
    background(10);
    
    //stars
    for (var i = 0; i < 500; i++) {
        fill(255);
        ellipse(random(0,width), random(0,height), 3,3);
    }
    //planets
    
    for (var i = 0; i < 10; i++) {
        fill(random(0,255),random(0,255),random(0,255));
        ellipse(random(0,width), random(0,height),random(10,100));
    }
    
    baseLine = height - 100

     rocket =    {
        x: width/2,
        y: baseLine, 
        thrust: false, 
        moveLeft: false,
        moveRight: false,
        drawRocket: function(){
            fill(180)
            beginShape();
            vertex(rocket.x + 10, rocket.y + 60);
            vertex(rocket.x + 10, rocket.y + 20);
            vertex(rocket.x + 15, rocket.y);
            vertex(rocket.x + 20, rocket.y + 20);
            vertex(rocket.x + 20, rocket.y + 60);
            endShape(CLOSE);

            fill(255, 0, 100);
            beginShape();
            vertex(rocket.x - 10, rocket.y + 70);
            vertex(rocket.x + 10, rocket.y + 40);
            vertex(rocket.x + 10, rocket.y + 60);
            endShape(CLOSE);

            beginShape();
            vertex(rocket.x + 40, rocket.y + 70);
            vertex(rocket.x + 20, rocket.y + 40);
            vertex(rocket.x + 20, rocket.y + 60);
            endShape(CLOSE);

            if (rocket.thrust)
            {
                fill(255, 150, 0);
                beginShape();
                vertex(rocket.x + 10, rocket.y + 60);
                vertex(rocket.x + 13, rocket.y + 80);
                vertex(rocket.x + 15, rocket.y + 70);
                vertex(rocket.x + 18, rocket.y + 80);
                vertex(rocket.x + 20, rocket.y + 60);
                endShape(CLOSE);
            }
                }
    };
    
}
function draw()
{
    //move the rocket
    if (rocket.thrust && rocket.y > 0)
	{
		rocket.y -= 10;
	}
	else if (rocket.y < baseLine)
	{
		rocket.y += 5;
	}

	if (rocket.moveLeft && rocket.x > 0 && rocket.y != baseLine)
	{
		rocket.x -= 10;
	}

	if (rocket.moveRight && rocket.x < width && rocket.y != baseLine)
	{
		rocket.x += 10;
	}
    
  //draw the rocket
    
    

    
    rocket.drawRocket();
    
    
}

function keyPressed()
{
	if (key == "W")
	{
		rocket.thrust = true;
	}

	if (key == "A")
	{
		rocket.moveLeft = true;
	}

	if (key == "D")
	{
		rocket.moveRight = true;
	}
}

function keyReleased()
{
    if(key == "W")
    {
	   rocket.thrust = false;
    }
    
    if(key == "A")
    {
	   rocket.moveLeft = false;
    }
    
    if(key == "D")
    {
	   rocket.moveRight = false;
    }

}