///                    Описание
//Данное творенье - попытка повторить картину "Круг в круге" Кадинского
///Чтобы найти объект,просто наведите на середину окружности и сверьте с объектами в функции draw,для остальных почти также, найдите их конец или начало и свертесь.

///                    Примечание
///Некоторые фигуры не в цикле из-за проблем с толщиной фигур
                    "strokeWeight();"





var diametr_coor; ///диаметр окружности
var circle_x; /// координата "x" для цикла
var circle_y; /// координата "y" для цикла
var circ; ///   объект для упрощение кода
var colour;

function setup(){
  createCanvas(590,614);
  img = loadImage('assets/moonwalk.jpg');
    
}

function draw(){
    background(228,212,195);
    
    //line trianlge
    
    noStroke();
    fill(208,180,122);           //beige
    triangle(50,614,0,614,588,0);
    
    noStroke();
    fill(208,180,122);           //beige
    triangle(0,614,588,0,540,0);
    
    noStroke();
    fill(208,180,122);           //beige
    triangle(0,450,0,614,540,0);

    noStroke();
    fill(91,150,136,180);      //turquoise
    triangle(110,0,200,0,590,590);
    
    noStroke();
    fill(91,150,136,180);       //turquoise
    triangle(200,0,590,590,590,365);

    
    //circles with stroke
    
    strokeWeight(8);
    stroke(51);
    fill(207,23,38); //red
    ellipse(125,240,40);
        
    strokeWeight(3);
    stroke(51);
    fill(207,23,38); //red
    ellipse(260,72,15);
    
    strokeWeight(1);
    stroke(0,0,0);  
    fill(11,95,106); //turquoise
    ellipse(455,290,50);
    
    
    strokeWeight(1);
    stroke(0,0,0);  
    fill(228,197,96,180); //yellow
    ellipse(225,335,150);
    
    strokeWeight(1);
    stroke(0,0,0);  
    fill(121,154,137,180); //turquoise
    ellipse(230,243,70);
    
    //line
    stroke(0); 
    line(214,389,155,469);
    
    line(168,477,221,400);
    
    strokeWeight(2);
    stroke(0,0,0);  
    fill(194,25,37,180); //red
    ellipse(205,400,50);
    
    //line
    strokeWeight(1);
    line(360,470,381,319);
    
    strokeWeight(1);
    line(376,494,430,124);
    
    strokeWeight(1);
    stroke(0,0,0);  
    fill(228,197,96,180); //yellow
    ellipse(380,370,100);
    
    
    strokeWeight(1);
    stroke(0,0,0);  
    fill(236,174,176,180); //pink 
    ellipse(226,177,120);
    
    strokeWeight(1);
    stroke(0,0,0);  
    fill(194,25,37,180); //red
    ellipse(305,210,90);
    
    strokeWeight(1);
    stroke(0,0,0);  
    fill(194,25,37,100); //red
    ellipse(130,430,30);
    
    strokeWeight(25);
    stroke(0,0,0);  
    fill(194,25,37,0); //empty circle
    ellipse(300,280,530);
    
    strokeWeight(4);
    stroke(0,0,0);  
    fill(48,64,104); //blue
    ellipse(92,345,16);
    
    strokeWeight(3);
    stroke(0,0,0);  
    fill(90,139,110,180); //turquoise
    ellipse(150,348,45);
    
    strokeWeight(10); // point
    stroke(0,0,0);
    point(245,428);
    
    strokeWeight(1);
    stroke(0,0,0);  
    fill(181,107,97,220); //pink 
    ellipse(285,417,12);
    
    strokeWeight(2);
    stroke(0,0,0);  
    fill(203,128,124,180); //pink 
    ellipse(325,480,36);
    
    strokeWeight(34); // point
    stroke(0,0,0);
    point(408,406);
    
    strokeWeight(2);
    stroke(0,0,0);  
    fill(114,57,66,180); //pink 
    ellipse(463,429,25);
    
    strokeWeight(37); // point
    stroke(25,23,33);
    point(360,193);
    
    noStroke();
    fill(188,21,33); //red
    ellipse(299,356,18);
    
    noStroke();
    fill(23,111,95,180); //turquoise
    ellipse(393,275,130);
    
    noStroke();  
    fill(31,95,97); //turquoise
    ellipse(405,245,30);
    
    noStroke();
    fill(80,85,61,180); // gray
    ellipse(283,320,170);
    
    strokeWeight(3); 
    stroke(0,0,0);
    fill(238,71,63,180); // orange
    ellipse(273,276,55);
    
    strokeWeight(20); // point
    stroke(0,0,0);
    point(273,276);
    
    noStroke();
    fill(115,68,85,180); // purple
    ellipse(405,165,75);
    
    //lines
    strokeWeight(1);
    stroke(0);
    line(312,124,330,152);
    
    line(303,133,327,163);
    
    line(330,128,136,380);
    
    line(275,167,106,326);
    
    line(148,253,155,204);
    
    line(83,230,110,191);
    
    line(275,167,106,326);
    
    line(73,239,101,188);
    
    strokeWeight(2);
    line(417,103,184,474);
    
    line(260,433,145,456);
    
    stroke(0);
    strokeWeight(1);
    line(85,190,474,330);
    
    line(82,202,470,345);
    
    stroke(0);
    strokeWeight(2);
    line(76,300,500,387);
    
    strokeWeight(1);
    stroke(0);
    line(171,429,253,474);
    
    strokeWeight(3);
    line(439,435,435,195);
    
    strokeWeight(1);
    line(108,356,470,396);
    
    line(115,326,407,480);
    
    fill(214,168,99); // yellow
    ellipse(352,440,15);
    
    line(344,468,396,441);
    
    
    line(353,475,405,447);
    
    line(360,483,414,453);
    
    line(423,126,366,489);
    
    strokeWeight(2);
    line(431,216,455,217);
    
    line(430,224,460,225);
    
    line(136,155,494,215);
    
     strokeWeight(1);
    line(179,120,492,350);
    
    image(img, 0, height / 2, img.width / 2, img.height / 2);
    
    
    
    //the cursor coordinate
    fill('black');   
    strokeWeight(1);
    text("Y: "+mouseY, mouseX - 50, mouseY);
    text("X: "+mouseX, mouseX - 50, mouseY - 25);
}

//function drawCircle(){
//    
//    circle_x = [400,393];
//    circle_y = [166,275];
//    diametr_coor = [75,130];
//    colour = [(118,69,86),(30,107,87)];
//    
//    for (var i = 0; i < circle_x.length; i++){
//        
//    circ = {
//        x:circle_x[i],
//        y:circle_y[i],
//        z:diametr_coor[i]
//        
//    };
//        
//    //draw circles without stroke
//        
//    fill(colour[i]); //purple
//    ellipse(circ.x,circ.y,circ.z);
//        
//    fill(colour[i]); //turquoise
//    ellipse(circ.x,circ.y,circ.z);
//        
//    
//        
//    
//        
//  }    
//}