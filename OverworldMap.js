class OverworldMap {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        
        this.backgroundImage = new Image();
        this.backgroundImage.src = config.backgroundSrc;

        this.foregroundImage = new Image();
        this.foregroundImage.src = config.foregroundSrc;

        this.dw = config.dw;
        this.dh = config.dh;
    }

    drawBackgroundImage(ctx){
        ctx.drawImage(this.backgroundImage, 
            0, 0,
            this.dw, this.dh);
    }

    drawForegroundImage(ctx){
        ctx.drawImage(this.foregroundImage, 
            0, 0,
            this.dw, this.dh);
    }

    drawLowerImage(ctx){
        ctx.drawImage(this.backgroundImage, 
            0, 0);
    }

    drawUpperImage(ctx){
        ctx.drawImage(this.foregroundImage, 0, 0);
    }
}

window.OverworldMaps = {
    DemoRoom: {
        backgroundSrc: 'Assets/01-pizza-legends-intro/images/maps/DemoLower.png',
        foregroundSrc: 'Assets/01-pizza-legends-intro/images/maps/DemoUpper.png',
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
                src: "Assets/01-pizza-legends-intro/images/characters/people/hero.png"
            }),
            npc1: new Person({
                x: utils.withGrid(7),
                y: utils.withGrid(9),
                src: "Assets/01-pizza-legends-intro/images/characters/people/npc1.png"
            }),
        }
    },
    Kitchen: {
        backgroundSrc: 'Assets/01-pizza-legends-intro/images/maps/KitchenLower.png',
        foregroundSrc: 'Assets/01-pizza-legends-intro/images/maps/KitchenUpper.png',
        gameObjects: {
            hero: new GameObject({
                x: 3,
                y: 5,
                src: "Assets/01-pizza-legends-intro/images/characters/people/hero.png"
            }),
            npcA: new GameObject({
                x: 9,
                y: 6,
                src: "Assets/01-pizza-legends-intro/images/characters/people/npc2.png"
            }),
            npcB: new GameObject({
                x: 10,
                y: 8,
                src: "Assets/01-pizza-legends-intro/images/characters/people/npc3.png"
            }),
        }
        
    },
    TestLevel: {
        backgroundSrc: 'Assets/DemoScene.png',
        foregroundSrc: 'Assets/DemoSceneFG.png',
        dw: 750,
        dh: 750,
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: utils.withGrid(5),
                y: utils.withGrid(6),
                dw: 16,
                dh: 16,
                w: 16,
                h: 16,
                shadowX: 8,
                shadowY: 14,
                src: "Assets/SpriteSheet.png"
            }),
        }
    },
}