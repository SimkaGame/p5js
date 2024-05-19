/*
Robot upgrade.

The robots have have their firmware upgraded. They have developed a range of new abilities and attributes!

You need to search through the complex robots object and highlight them in a couple of circumstances:

* We want to find any robot whose last name is Katan
* We want to recognise the robot with the highest IQ, they'll be useful for the most complex tasks
* The robot with the oldest serial number is getting old we need to identify them as they are ready for retirement
* One of the robots has gone rouge find the one whose abilities include "destroy humanity"
* Robots with narrow heads can't take all the upgrades, identify robots with heads less than 70 wide

The robots array has been created for you but you'll need to use the console to understand how it is made up.
Even though the robots are drawn as a grid the array is a single dimension.
When you have found a particular robot call the highlight function and it will be encircled in the browser output
you need to give the highlight function 4 arguments the robot object, and red, green and blue values to set the colour of the highlight.
*/


var robots = [];
var smart;
var old;

function setup()
{
	createCanvas(1000, 1000);
	//lists of first and second names to select from
	fillRobots();

	background(20);
    
    smart = 
    {
        id: 0,
        iq: 0
    }
    
    old = 
    {
        id: 0,
        number: 0
    }
    
    
    
	for (var i = 0; i < robots.length; i++)
	{
		drawRobot(robots[i].physical);
//        console.log(robots[i]);
	}
    // TASK1
    for (var i = 0; i < robots.length; i++) {
        if (robots[i].secondName == "Katan"){
            console.log(robots[i]);
            highlight(robots[i], 255, 0, 0); // Highlight red
            break;
        }
    //TASK2
    if (robots[i].iq > smart.iq){
        smart.iq = robots[i].iq;
        smart.id = i; 
    }
        
    //TASK3
    if (robots[i].serialNumber > old.number){
        old.number = robots[i].serialNumber;
        old.id = i;
    }
       
    
    

    
    }
    //TASK2
    highlight(robots[smart.id], 255,125,0); // Highlight orange
    console.log('The smartest robot   ' + smart.id +  '   and his Iq =   ' + smart.iq);
    
    //TASK3
    highlight(robots[old.id], 51,0,102); // Highlight purple
    console.log('The oldest robot   ' + old.id +  '   and his serialNumber =   ' + old.number);
    
    
    //TASK4
    for (var i = 0; i < robots.length; i++){
        if (robots[i].abilities = "destroy humanity"){
            console.log(robots[i]);
            highlight(robots[i], 255, 153, 153); // Highlight pink
            break;
        }
    }
    
    //TASK5
    for (var i = 0; i < robots.length; i++){
        if  (robots[i].physical.headWidth < 70){
            console.log(robots[i]);
            highlight(robots[i], 51, 25, 0); // Highlight brown
            break;
        }
    }
    
    
    
    
}

function highlight(robot, r, g, b)
{
	push()
	stroke(r, g, b);
	strokeWeight(4);
	noFill();
	rect(robot.physical.x, robot.physical.y, 120, 120);
	pop();
}

//fill the robots array with a variety of complex properties
function fillRobots()
{
	var firstNames = ["Asad", "Agatha", "Benny", "Beau", "Carol", "Colin", "Data", "Delia", "Edward", "Ethal", "Freddy", "Fiona", "Georgina", "Greg", "Hal", "Holly", "Ishmail", "India", "Jamie", "Joanna", "Kym", "Kelly", "liam", "Leanne", "Marvin", "Michaela", "Nicholas", "Niamh", "Oscar", "Olivia", "Quentin", "Queenie", "Richard", "Rebecca", "Simon", "Simone", "Thomas", "Tilly", "Ulysses", "Ursula", "Vinny", "Violet", "William", "Winifred", "Xander", "Xanthe", "Yves", "Yvonne", "Zach", "Zara"];

	var secondNames = ["Anstead", "Brown", "Chan", "Depp", "English", "Forth", "Goodwin", "Holmes", "Iqbal", "Jameson", "Katan", "Lingard", "Munster", "Nicoles", "Oscar", "Quest", "Reagan", "Shiffman", "Tolworth", "Underwood", "Venn", "Walsh", "Xu", "Young", "Zerdin"]

	//fill the robots array
	for (var i = 0; i < 64; i++)
	{
		//give the robot a random name
		var fn = firstNames[parseInt(random(0, firstNames.length - 1))];
		var sn = secondNames[parseInt(random(0, secondNames.length - 1))];

		//set the robots unique skills - deduct randomly from the list so the robot has 4 skills
		var abilities = ["clean house", "make bed", "babysit", "cook", "school run", "laundry", "grow vegetables", "charity work", "darn socks", "do shopping", "take out rubbish", "feed the cat", "mow lawn", "paint fence"];
		while (abilities.length > 4)
		{
			abilities.splice(random(0, abilities.length), 1);
		}

		//add the robot to the robots array setting random properties for remaining values
		robots.push(
		{
			firstName: fn,
			secondName: sn,
			iq: round(random(300, 3000)),
			serialNumber: round(random(10000, 100000)),
			abilities: abilities,
			physical:
			{
				r: round(random(0, 255)),
				g: round(random(0, 255)),
				b: round(random(0, 255)),
				headWidth: round(random(60, 100)),
				x: 20 + i % 8 * 120,
				y: 20 + floor(i / 8) * 120
			}

		})
	}

	//pick a random robot and make them go rouge
	robots[round(random(0, robots.length - 1))].abilities.splice(random(0, 4), 1, "destroy humanity");
}

//draw a single robot to the canvas
//takes a robots physical object and it's first and last name argument
function drawRobot(physical)
{
	//draw the robots
	strokeWeight(2);
	stroke(0);

	//set a drawing x and y for the robot that ensure it's drawn in the cente of the
	//grid cell
	var x = physical.x + 10 + (100 - physical.headWidth) / 2;
	var y = physical.y + 10;

	//robot head
	fill(physical.r, physical.g, physical.b);
	rect(x, y, physical.headWidth, 100);

	//ears
	fill(physical.g, physical.r, physical.b);

	rect(x - 7, y + 30, 10, 33);
	rect(x + physical.headWidth - 3, y + 30, 10, 33);

	//robots' antennas
	fill(250, 250, 0);
	ellipse(x + physical.headWidth * 0.5, y - 7, 10, 10);

	fill(255 - physical.r, 255 - physical.g, 255 - physical.b);
	rect(x + physical.headWidth * 0.5 - 10, y - 3, 20, 10);
	//
	//eyes
	fill(255);
	ellipse(x + physical.headWidth * 0.25, y + 30, 26, 26);
	point(x + physical.headWidth * 0.25, y + 30);
	ellipse(x + physical.headWidth * 0.75, y + 30, 26, 26);
	point(x + physical.headWidth * 0.75, y + 30);


	//robots' noses
	fill(255, 0, 0);
	triangle(x + physical.headWidth * 0.5, y + 35, x + physical.headWidth * 0.35, y + 60, x + physical.headWidth * 0.65, y + 60);

	//robot 1 mouth
	noFill();
	beginShape();
	vertex(x + physical.headWidth * 0.28, y + 75);
	vertex(x + physical.headWidth * 0.36, y + 85);
	vertex(x + physical.headWidth * 0.42, y + 75);
	vertex(x + physical.headWidth * 0.50, y + 85);
	vertex(x + physical.headWidth * 0.58, y + 75);
	vertex(x + physical.headWidth * 0.66, y + 85);
	vertex(x + physical.headWidth * 0.74, y + 75);
	endShape();
}