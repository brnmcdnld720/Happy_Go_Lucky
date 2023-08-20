/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvasMain");
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 480;

const mapTest1 = new Image();
mapTest1.src = 'Assets/Map1Test.png';
const background = new Image();
background.src = 'Assets/Map1.bg.png';
const foreground = new Image();
foreground.src = 'Assets/Map1.fg.png';

/** TODO
create player class
    constructor ----
        player position (moving the map)
        player properties
    methods -----
        drawPlayer
        collision detection
        player collision box?
        player states
        player animation

***/

//player is always at center of screen
let playerProperties = {
    positionX: CANVAS_WIDTH / 2 - 16,
    positionY: CANVAS_HEIGHT / 2 - 32,
    playerWidth: 32,
    playerHeight: 64,
};
let playerCurrentPositionRelative = {
    x: -200,
    y: -120,
}
background.onload = () => {
    ctx.drawImage(mapTest1, playerCurrentPositionRelative.x, playerCurrentPositionRelative.y, 4800, 4800);
    ctx.fillStyle = 'white';
    ctx.fillRect(playerProperties.positionX, playerProperties.positionY, playerProperties.playerWidth, playerProperties.playerHeight);
}


