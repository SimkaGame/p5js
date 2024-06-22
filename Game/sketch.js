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
var diamond;
var position;
var treeCoor_x;
var clouds_coor_x;
var clouds_coor_y;
var viewTime;
var textTimer;
var counter;
var sky;
var platforms;
var isJumping;
var isContact;
var health = 5;
var heart;
var stage = 2;
var clicks = 0;
var heart_coor_x;
var diamonde;
var positione;
var enemy_coor_x = [110, 730,690];
var enemy_coor_y = [319, 162,420];
var enemy_limit_l = [70, 600,650];
var enemy_limit_r = [250, 736,1400];
var enemy_speed = [1, 2, 5];
var enemies = [];
var enemy;



function setup()
{
	createCanvas(1024*1.5, 576);
	floorPos_y = height * 3/4;
    gameChar_x = random(50,290);
	gameChar_y = floorPos_y;
    speed = 4;
    JUMPSPEED = 15;
    jumpSpeed = JUMPSPEED;
    groundHeight = 412;
    isJumping = false;
    isContact = false;
    viewTime = false;
    viewTimer = 0;
    counter = 0;
    
    
    platforms = [];
    
    platforms.push(createPlatforms(70, floorPos_y - 100,200));
    platforms.push(createPlatforms(340, floorPos_y - 150,150));
    platforms.push(createPlatforms(590, floorPos_y - 260,160));
    platforms.push(createPlatforms(800, floorPos_y - 170,150));
    platforms.push(createPlatforms(935, floorPos_y - 100,150));
    
    //floor
    platforms.push(createPlatforms(0, floorPos_y,324));
    platforms.push(createPlatforms(622, floorPos_y,1500));
    
    
    
    //diamond
    position = {
		pos_x: 430,
		pos_y: 240,
		scale: 1.3
    };
    
    
    sky = {
        r:100,
        g:155,
        b:255
    }
    
    sun = {
        x:random(0,1500),
        y: random(-200,700),
        diameter: 350
        };
    
    
    for (var i = 0; i < enemy_coor_x.length; i++) {
        enemies.push({
            x: enemy_coor_x[i],
            y: enemy_coor_y[i],
            sz: 5,
            l: enemy_limit_l[i],
            r: enemy_limit_r[i],
            speed: enemy_speed[i]
            });
    }
    
}

function draw()
{
    
    
    if(stage == 2){
        background('black');
        textSize(40);
        fill('red');
        text("Лкм", 740, 450);
        fill(255,127,80);
        text("Нажмите        для старта", 565, 450);
        textSize(25);
        fill('red');
        text("Цель игры:",100, 100);
        fill(255,127,80);
        text("Собрать как можно больше кристаллов",100,130);
        fill('red');
        text("Правила:",100, 200);
        fill(255,127,80);
        text("Прикосновение к врагу и падение в яму",100, 230);
        text("отнимают жизни, если счетик будет = 0",100,260);
        text("игра будет окончена",100, 290);
    }
    
    if(stage == 3){
        background('black');
        //Hero (670 300)
        fill(218,169,193)
        ellipse(670,300 - 50,30,30);
        //body
        fill(155,79,79)
        rect(670 - 10,300 - 35,20,22);
        //arm_left
        fill(151,38,38)
        rect(670 - 20,300 - 35,10,15);
        //arm_right
        fill(151,38,38);
        rect(670 + 10,300 - 35,10,15);
        //leg_right
        fill(151,38,38);
        rect(670 + 2,300 - 13,8,15);
        //leg_left
        fill(151,38,38);
        rect(670 - 10,300 - 13,8,15);
        
        //Health
        fill('white');
        textSize(40);
        text('X',750,283);
        textSize(70);
        fill('red');
        text(health,820,290);
        textSize(40);
        fill('red');
        text("Лкм", 790, 450);
        fill(255,127,80);
        text("Нажмите ещё раз        для старта", 450, 450);
        
        
}

    
    
    if(stage == 4){
        
    //main picture
        
    background(sky.r,sky.g,sky.b); //fill the sky
        
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
        fill('orange');
        textSize(50);
        text('Well done',random(50, width), random(height/2, height));
        textTimer +=1;
}
        moveLogic();
    
        fill(0);   
        strokeWeight(4);
        textSize(20);
        text("X: "+ round(mouseX), mouseX - 50, mouseY - 25);
        text("Y: "+ round(mouseY), mouseX - 50, mouseY);
        stroke('black');
        fill(51,255,221);
        textSize(35);
        text('X  ' + counter,75,50);
        
        
      //diamond
      positione = {
		pos_x: 30,
		pos_y: 21,
		scale: 1  
      }
        
      diamonde = {
		up_y: positione.pos_y,
		up_1x: positione.pos_x,
		up_2x: positione.pos_x + 10 * positione.scale,
		up_3x: positione.pos_x + 20 * positione.scale,
		midl_y: positione.pos_y + 10 * positione.scale,
		midl_1x: positione.pos_x - 5 * positione.scale,
		midl_2x: positione.pos_x + 5 * positione.scale,
		midl_3x: positione.pos_x + 15 * positione.scale,
		midl_4x: positione.pos_x + 25 * positione.scale,
		down_x: positione.pos_x + 10 * positione.scale,
		down_y: positione.pos_y + 30 * positione.scale
	};
    
    noStroke();
	fill(30, 144, 255);
	triangle(diamonde.up_1x, diamonde.up_y, diamonde.midl_2x, diamonde.midl_y, diamonde.up_2x, diamonde.up_y);
	triangle(diamonde.up_2x, diamonde.up_y, diamonde.midl_3x, diamonde.midl_y, diamonde.up_3x, diamonde.up_y);
	fill(135, 206, 250);
	triangle(diamonde.midl_1x, diamonde.midl_y, diamonde.up_1x, diamonde.up_y, diamonde.midl_2x, diamonde.midl_y);
	triangle(diamonde.midl_2x, diamonde.midl_y, diamonde.up_2x, diamonde.up_y, diamonde.midl_3x, diamonde.midl_y);
	triangle(diamonde.midl_3x, diamonde.midl_y, diamonde.up_3x, diamonde.up_y, diamonde.midl_4x, diamonde.midl_y);
	fill(72, 61, 139);
	triangle(diamonde.midl_1x, diamonde.midl_y, diamonde.down_x, diamonde.down_y, diamonde.midl_2x, diamonde.midl_y);
	triangle(diamonde.midl_3x, diamonde.midl_y, diamonde.down_x, diamonde.down_y, diamonde.midl_4x, diamonde.midl_y);
	fill(123, 104, 238);
	triangle(diamonde.midl_2x, diamonde.midl_y, diamonde.down_x, diamonde.down_y, diamonde.midl_3x, diamonde.midl_y);
 
    }
    
    if (stage == 5){
        background('black');
        fill('red');
        textSize(70);
        text('Вы проиграли',570,270);
        textSize(40);
        fill('red');
        text("R", 690, 450);
        fill(255,127,80);
        text("Нажмите      для перезапуска игры", 503, 450);
        
    }
    
    if (health == 0){
        stage = 5;
    }
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
        fill(133,189,239,250);
        ellipse(120,0,cloud.diameter);   
        ellipse(0,0,cloud.diameter);
        ellipse(30,0,cloud.diameter*1.5);    
        ellipse(90,0,cloud.diameter*1.5);
        ellipse(60,-10,cloud.diameter*2);
            
        pop();
        
        }
    }

function isInCanyon() {
        if (gameChar_x > 326 && gameChar_x < 622 && gameChar_y >= floorPos_y){
        isFalling = true;
        isLeft = false;
        isRight = false;
        isJumping = false;
            }
        if(gameChar_y >= 630){
            gameChar_x = random(50,290);
            gameChar_y = floorPos_y;
            health -= 1;
            stage = 3;
            clicks = 1;
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
    rect(304,432,20,500);
    //canyon_middle
    fill(0,0,0);
    rect(324,432,300,500);
    //canyon_left
    fill(65,18,18);
    rect(624,432,20,500);
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
//    if (keyCode == 82){
//        counter = 0;
//        health = 5;
//        gameChar_x = random(50,290);
//        sun.x = random(0,1500);
//        sun.y = random(-200,700);   
//    }
    
    if (stage == 5 && keyCode == 82){
        health = 5;
        stage = 3;
        clicks = 1;
    }
    
}
console.log()

function keyReleased()
{
    if (keyCode == 68){
        isRight = false;
    }
    if (keyCode == 65){
        isLeft = false;
    }
}

function mousePressed(){
    clicks ++;
    if (stage == 1){
        stage = 2;
        clicks = 0;
    }
    
    else if (clicks == 1){
        stage = 3;
    }
    else if(clicks == 2){
        stage = 4;
    }
    if (health == 0){
        stage = 5;
    }
}

function checkCoins(position){
    
    
    if (dist(gameChar_x,gameChar_y-45,position.pos_x,position.pos_y) < 35)
    {
        position.pos_x = random(650,width - 15);
        position.pos_y = random(floorPos_y -40,floorPos_y -110);
        viewTime = true;
        textTimer = 0;
        counter +=1;
        if (counter % 5 ==0){
            health +=1;
        }
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
    
    else if (-190 < sun.y || sun.y < 280){
        sky.r = 100;
        sky.g = 155;
        sky.b = 255;
    }
    //остальные значения(День)
}

function drawHeart(){
    
    heart_coor_x = [40,85,130,175,220,265,308,353,398,443];
    
    for (var i = 0; i < health; i ++){
    
    heart = {
        x:heart_coor_x[i],
        y:98,
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
    rect(heart.x -5,heart.y - 15,heart.s,heart.s);
    rect(heart.x - 10,heart.y - 15,heart.s * 5,heart.s);
    rect(heart.x - 10,heart.y - 20,heart.s * 5,heart.s);
    
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
}


function drawTree(){
    
    treeCoor_x = [50,250,720,850,990,1100,1250,1300];
    
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
    
for (var i = 0; i < enemies.length; i++) {
        enemy = enemies[i];

        enemy.x += enemy.speed;
        if (enemy.x > enemy.r || enemy.x < enemy.l) {
            enemy.speed *= -1;
        }
    
    //светящиеся глаза ночью
    if (sun.y < -190 || sun.y > 590){
    fill('purple');
    rect(enemy.x + 5,enemy.y -50,enemy.sz,enemy.sz);
    rect(enemy.x + 30,enemy.y -50,enemy.sz,enemy.sz);
    }
    fill(255,255,255,150);
    rect(enemy.x,enemy.y,enemy.sz * 4,enemy.sz);
    rect(enemy.x - 10,enemy.y - 5,enemy.sz * 8,enemy.sz);
    rect(enemy.x - 15,enemy.y - 10,enemy.sz * 10,enemy.sz);
    rect(enemy.x - 15,enemy.y - 15,enemy.sz * 10,enemy.sz);
    rect(enemy.x - 20,enemy.y - 20,enemy.sz * 11,enemy.sz);
    rect(enemy.x - 20,enemy.y - 25,enemy.sz * 12,enemy.sz);
    rect(enemy.x - 10,enemy.y - 30,enemy.sz * 10,enemy.sz);
    rect(enemy.x - 10,enemy.y - 35,enemy.sz * 10,enemy.sz);
    rect(enemy.x - 10,enemy.y - 40,enemy.sz * 5,enemy.sz);
    rect(enemy.x + 25,enemy.y - 40,enemy.sz * 3,enemy.sz);
    rect(enemy.x - 5,enemy.y - 45,enemy.sz * 4,enemy.sz);
    rect(enemy.x + 25,enemy.y - 45,enemy.sz * 3,enemy.sz);
    rect(enemy.x - 5,enemy.y - 50,enemy.sz * 2,enemy.sz);
    rect(enemy.x + 10,enemy.y - 50,enemy.sz * 4,enemy.sz);
    rect(enemy.x + 35,enemy.y - 50,enemy.sz,enemy.sz);
    rect(enemy.x - 5,enemy.y - 55,enemy.sz * 9,enemy.sz);
    rect(enemy.x,enemy.y - 60,enemy.sz * 7,enemy.sz);
    rect(enemy.x + 5,enemy.y - 65,enemy.sz * 5,enemy.sz);
    rect(enemy.x - 25,enemy.y - 30,enemy.sz,enemy.sz);
    }
}

function checkEnemy() {
    for (var i = 0; i < enemies.length; i++) {
        enemy = enemies[i];
        
        if (dist(gameChar_x, gameChar_y - 45, enemy.x, enemy.y) < 45) {
            gameChar_x = random(50, 290);
            gameChar_y = floorPos_y;
            health -= 1;
            stage = 3;
            clicks = 1;
        }
    }
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