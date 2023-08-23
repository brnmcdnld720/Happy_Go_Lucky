class GameObject {
    constructor(config){
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.direction = config.direction || "down";
        this.dw = config.dw || 32,
        this.dh = config.dh || 32,
        this.w = config.w || 32,
        this.h = config.h || 32,
        this.shadowX = config.shadowX,
        this.shadowY = config.shadowY,
        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "Assets/01-pizza-legends-intro/images/characters/people/hero.png",

        });
    }

    update() {

    }
}