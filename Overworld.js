class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
        this.backgroundScale = 1.5;
    }

    startGameLoop() {
        const step = () => {
            //clear off the canvas
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            //Draw Background layer
            this.map.drawBackgroundImage(this.ctx);
            // this.map.drawLowerImage(this.ctx);

            //Draw Game Objects
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    arrow: this.directionInput.direction
                });
                object.sprite.draw(this.ctx);
            })

            //Draw Foreground layer
            this.map.drawForegroundImage(this.ctx);
            // this.map.drawUpperImage(this.ctx);

            requestAnimationFrame(() => {
                step();
            })
        }
        step();
    }

    init() {
        this.map = new OverworldMap(window.OverworldMaps.TestLevel);
        
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        
        this.startGameLoop();


    }
}