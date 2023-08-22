/** @type {HTMLCanvasElement} */


const canvas = document.getElementById("canvasMain");
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 480;

const mapTest1 = new Image();
mapTest1.src = 'Assets/Map1Test.png';
// const background = new Image();
// background.src = 'Assets/Map1.bg.png';
// const foreground = new Image();
// foreground.src = 'Assets/Map1.fg.png';

/** TODO
update player class
    methods -----
        collision detection
        player collision box?
        player states01
        player animation
create file for settings
    control for movement variables
***/


class Player{
    constructor({position, properties, image, velocity, backgroundSprites, backgroundPosition}){
        this.position = position;
        this.properties = properties;
        this.velocity = velocity;
        this.image = image;
        this.backgroundSprites = backgroundSprites;
        this.backgroundPosition = backgroundPosition
    }
    draw(){
        //TODO sprite for stand in
        ctx.drawImage(this.backgroundSprites, this.backgroundPosition.x, this.backgroundPosition.y);
        ctx.fillStyle = 'white';
        ctx.fillRect(this.position.playerX, this.position.playerY, this.properties.playerWidth, this.properties.playerHeight);
    }
    movement() {
        if (keys.w.pressed && lastKeyPressed === 'w') this.backgroundPosition.y += this.velocity;
        else if (keys.s.pressed && lastKeyPressed === 's') this.backgroundPosition.y -= this.velocity;
        else if (keys.a.pressed && lastKeyPressed === 'a') this.backgroundPosition.x += this.velocity;
        else if (keys.d.pressed && lastKeyPressed === 'd') this.backgroundPosition.x -= this.velocity;
    }
}
class Sprite {
    constructor({position, velocity, image}) {
        this.position = position;
        this.image = image
        this.velocity = velocity;
    }
    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, 4800, 4800);
    }
}


const player = new Player({
    position:{
        playerX: CANVAS_WIDTH / 2 - 16,
        playerY: CANVAS_HEIGHT / 2 - 32,
    },
    backgroundPosition:{
        x: -200,
        y: -120,
    },
    properties:{
        playerWidth: 32,
        playerHeight: 64,
        playerCollisionBox:{
            topLeft: [0,0],
            bottomRight: [3,3]
        }
    },
    backgroundSprites: mapTest1,
    velocity: 3,
    
})

//-------------- key pressing functionality ------------
let lastKeyPressed = '';
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}
function playerKeyDownMovement(keyDown){
    switch(keyDown.key){
        case 'w':
            keys.w.pressed = true;
            lastKeyPressed = 'w';
            break;
        case 'a':
            keys.a.pressed = true;
            lastKeyPressed = 'a';
            break;
        case 's':
            keys.s.pressed = true;
            lastKeyPressed = 's';
            break;
        case 'd':
            keys.d.pressed = true;
            lastKeyPressed = 'd';
            break;    
    }
}
function playerKeyUpMovement(keyup){
    switch(keyup.key){
        case 'w':
            keys.w.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;    
    }
}
window.addEventListener('keydown', (e) => {
    playerKeyDownMovement(e)
});
window.addEventListener('keyup', (e) => {
    playerKeyUpMovement(e)
});
//-------------------------------------------------------

function animate(){
    
    
    player.draw();
    player.movement();
    window.requestAnimationFrame(animate);
}
animate();