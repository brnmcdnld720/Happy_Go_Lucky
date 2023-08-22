class Overworld {
    constructor(config) {
        this.element = config.element;
        this.canvas = this.element.querySelector(".game-canvas");
        this.ctx = this.canvas.getContext("2d");
    }

        init() {
            const image = new Image();
            image.onload = () => {
                this.ctx.drawImage(image, 0,0);
            };
            image.src = 'Assets/01-pizza-legends-intro/images/maps/DemoLower.png'

            const x = 5;
            const y = 6;

            const shadow = new Image();
            shadow.onload = () => {
                this.ctx.drawImage(
                    shadow, 
                    0, 0, //x, y top left cut
                    32, 32, // width and height of cut
                    x * 16 -8, y * 16 - 18, // x, y position of character on map
                    32, 32); // width and height of size to draw
            }
            
            shadow.src = "Assets/01-pizza-legends-intro/images/characters/shadow.png"

            const hero = new Image();
            hero.onload = () => {
                this.ctx.drawImage(
                    hero, 
                    0, 0, //x, y top left cut
                    32, 32, // width and height of cut
                    x * 16 -8, y * 16 - 18, // x, y position of character on map
                    32, 32); // width and height of size to draw
            }
            hero.src = "Assets/01-pizza-legends-intro/images/characters/people/hero.png"
        }

}