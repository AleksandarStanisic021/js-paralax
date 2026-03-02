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

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgroundLayer2, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  requestAnimationFrame(animate);
}

animate();
