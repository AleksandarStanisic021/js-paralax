import "./style.css";
import layer1 from "./layer-1.png";
import layer2 from "./layer-2.png";
import layer3 from "./layer-3.png";
import layer4 from "./layer-4.png";
import layer5 from "./layer-5.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);

let gameSpeed = 5;
let playerSpeed = 5;

const backgroundLayer1 = new Image();
backgroundLayer1.src = layer1;
const backgroundLayer2 = new Image();
backgroundLayer2.src = layer2;
const backgroundLayer3 = new Image();
backgroundLayer3.src = layer3;
const backgroundLayer4 = new Image();
backgroundLayer4.src = layer4;
const backgroundLayer5 = new Image();
backgroundLayer5.src = layer5;

class Layer {
  constructor(image, speedModifier) {
    this.x = 0;
    this.y = 0;
    this.width = 2400;
    this.height = 700;
    this.x2 = this.width;
    this.image = image;
    this.speedModifier = speedModifier;
    this.speed = gameSpeed * this.speedModifier;
  }
  update() {
    this.speed = gameSpeed * this.speedModifier;
    if (this.x <= -this.width) {
      this.x = this.width + this.x2 - this.speed;
    }
    if (this.x2 <= -this.width) {
      this.x2 = this.width + this.x - this.speed;
    }
    this.x = Math.floor(this.x - this.speed);
    this.x2 = Math.floor(this.x2 - this.speed);
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x2, this.y, this.width, this.height);
  }
}

const layerInstance1 = new Layer(backgroundLayer1, 0.2);
const layerInstance2 = new Layer(backgroundLayer2, 0.4);
const layerInstance3 = new Layer(backgroundLayer3, 0.6);
const layerInstance4 = new Layer(backgroundLayer4, 0.8);
const layerInstance5 = new Layer(backgroundLayer5, 1);

const gameObjects = [
  layerInstance1,
  layerInstance2,
  layerInstance3,
  layerInstance4,
  layerInstance5,
];

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  gameObjects.forEach((gameObject) => {
    gameObject.update();
    gameObject.draw();
  });
  requestAnimationFrame(animate);
}

animate();
