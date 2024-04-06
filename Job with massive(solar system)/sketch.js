var sizes = [4, 9, 10, 5, 75, 60, 40, 40];
var names = ["Mercury", "Venus", "Earth", "Mars", "Jupiter",
            "Saturn", "Uranus", "Neptune"];
var colours = ["grey", "brown", "green", "red", "orange", "red","blue","grey"];
var start_pos_x = 50;
var distance = 220;

function setup()
{

    createCanvas(2000,600);
    textAlign(CENTER);
    
    background(0);
    for (var i = 0; i < 500; i++) {
        fill(255);
        ellipse(random(0,width), random(0,height), 3,3);
    }

    
    
}

function draw()
{   
    for (var i = 0; i < 8; i++) {
        fill(colours[i]);
        ellipse(start_pos_x + distance * i, height/2, sizes[i]*3, sizes[i]*3);
        fill(255);
        text(names[i], start_pos_x + distance * i, height/2 + 150);  
    }
    
}