let circleRadius = 80;
let circles = [];
let img;
let colors = [];
let timer = 0;

function preload() {
  img = loadImage("montpellier.jpg");
}

function setup() {
  createCanvas(600, 800);
  background(0);

  colors = [
    [255, 78, 80],
    [252, 145, 58],
    [249, 214, 46],
    [234, 227, 116],
    [226, 244, 199],
  ];

  for (let y = 0; y < height + circleRadius; y += circleRadius / 2) {
    for (let x = 0; x < width + circleRadius; x += circleRadius / 2) {
      circles.push(new Circle(x, y, y));
    }
  }

  image(img, 0, 0);

  circles.forEach((circle) => {
    let alpha = random(50) < 10 ? 0 : random(255);
    circle.fill = color(
      colors[floor(random(colors.length - 1))][0],
      colors[floor(random(colors.length - 1))][1],
      colors[floor(random(colors.length - 1))][2],
      alpha
    );
  });
}

function draw() {
  image(img, 0, 0);

  circles.forEach((circle) => {
    circle.y > height + circleRadius
      ? (circle.y = -circleRadius)
      : (circle.y += 1);
    circle.radius = circle.radius > 20 ? 10 : circle.radius;
    circle.draw();
  });

  if (millis() >= 1000 + timer) {
    timer = millis();
  }
}

class Circle {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    noStroke();
    fill(this.fill, this.fill, this.fill);
    circle(this.x, this.y, this.y / 20);
  }
}
