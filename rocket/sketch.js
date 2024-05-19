var rocket; 
var baseLine;
var stars = [];
var planets = [];
var rocketLayer;

function setup(){
    createCanvas(800, 600);
    baseLine = height - 100;

    rocketLayer = createGraphics(width, height);
    rocketLayer.clear();

    // Создаем звезды
    for (var i = 0; i < 500; i++) {
        stars.push({
            x: random(0, width),
            y: random(0, height),
            size: 3
        });
    }

    // Создаем планеты
    for (var i = 0; i < 10; i++) {
        planets.push({
            x: random(0, width),
            y: random(0, height),
            size: random(10, 100),
            color: color(random(0, 255), random(0, 255), random(0, 255))
        });
    }

    rocket = {
        x: width / 2,
        y: baseLine,
        thrust: false, 
        moveLeft: false,
        moveRight: false,
        drawRocket: function() {
            rocketLayer.fill(180);
            rocketLayer.beginShape();
            rocketLayer.vertex(this.x + 10, this.y + 60);
            rocketLayer.vertex(this.x + 10, this.y + 20);
            rocketLayer.vertex(this.x + 15, this.y);
            rocketLayer.vertex(this.x + 20, this.y + 20);
            rocketLayer.vertex(this.x + 20, this.y + 60);
            rocketLayer.endShape(CLOSE);

            rocketLayer.fill(255, 0, 100);
            rocketLayer.beginShape();
            rocketLayer.vertex(this.x - 10, this.y + 70);
            rocketLayer.vertex(this.x + 10, this.y + 40);
            rocketLayer.vertex(this.x + 10, this.y + 60);
            rocketLayer.endShape(CLOSE);

            rocketLayer.beginShape();
            rocketLayer.vertex(this.x + 40, this.y + 70);
            rocketLayer.vertex(this.x + 20, this.y + 40);
            rocketLayer.vertex(this.x + 20, this.y + 60);
            rocketLayer.endShape(CLOSE);

            if (this.thrust) {
                rocketLayer.fill(255, 150, 0);
                rocketLayer.beginShape();
                rocketLayer.vertex(this.x + 10, this.y + 60);
                rocketLayer.vertex(this.x + 13, this.y + 80);
                rocketLayer.vertex(this.x + 15, this.y + 70);
                rocketLayer.vertex(this.x + 18, this.y + 80);
                rocketLayer.vertex(this.x + 20, this.y + 60);
                rocketLayer.endShape(CLOSE);
            }
        }
    };
}

function draw() {
    background(10);

    fill(255);
    for (var i = 0; i < stars.length; i++) {
        ellipse(stars[i].x, stars[i].y, stars[i].size, stars[i].size);
    }

    for (var i = 0; i < planets.length; i++) {
        fill(planets[i].color);
        ellipse(planets[i].x, planets[i].y, planets[i].size, planets[i].size);
    }

    rocketLayer.clear();

    if (rocket.thrust && rocket.y > 0) {
        rocket.y -= 10;
    } else if (rocket.y < baseLine) {
        rocket.y += 5;
    }
    if (rocket.moveLeft && rocket.x > 0 && rocket.y != baseLine) {
        rocket.x -= 10;
    }
    if (rocket.moveRight && rocket.x < width && rocket.y != baseLine) {
        rocket.x += 10;
    }

    rocket.drawRocket();

    image(rocketLayer, 0, 0);
}

function keyPressed() {
    if (key == "W") {
        rocket.thrust = true;
    }
    if (key == "A") {
        rocket.moveLeft = true;
    }
    if (key == "D") {
        rocket.moveRight = true;
    }
}

function keyReleased() {
    if (key == "W") {
        rocket.thrust = false;
    }
    if (key == "A") {
        rocket.moveLeft = false;
    }
    if (key == "D") {
        rocket.moveRight = false;
    }
}