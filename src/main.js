import "./style.css";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

console.log(canvas);
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
