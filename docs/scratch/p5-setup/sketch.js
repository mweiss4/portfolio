function setup() {
    let c = createCanvas(innerWidth, innerHeight);
    c.parent("sketch-parent");
}

function draw() {
    background(200, map(mouseX, 0, innerWidth, 0, 255), 100);
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}