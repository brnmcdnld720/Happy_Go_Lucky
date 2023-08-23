class Sprite {
    constructor(config) {
        
        //Set up the image
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }
        
        //Shadow
        this.shadow = new Image();
        this.useShadow = true;
        if (this.useShadow) this.shadow.src = "Assets/01-pizza-legends-intro/images/characters/shadow.png"
        this.shadow.onload = () => {
            this.isShadowLoaded = true;
        }

        //Configuring Animation & Initial State
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        //Reference the game object
        this.gameObject = config.gameObject;
    }

    draw(ctx) {
        const x = this.gameObject.x - 8 ;
        const y = this.gameObject.y - 18;
        const dw = this.gameObject.dw;
        const dh = this.gameObject.dh;
        const w = this.gameObject.w;
        const h = this.gameObject.h;
        const shadowX = x - this.gameObject.shadowX || x;
        const shadowY = y - this.gameObject.shadowY || y;

        this.isShadowLoaded && ctx.drawImage(this.shadow, shadowX, shadowY);

        ctx.drawImage(this.image,
            0, 0,
            dw, dh,
            x, y,
            w, h            
        )
    }
}