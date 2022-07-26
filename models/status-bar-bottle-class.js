class StatusbarBottle extends DrawableObject {


    IMAGES_Bottle = [
        `img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png`,
        `img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png`,
        `img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png`,
        `img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png`,
        `img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png`,
        `img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png`
    ];

    percentage = 100;
    amount = 0;
    world;

    constructor(type, world) {
        super();
        this.world = world
        let x = type;
        if (x = `bottle`) {
            this.bottle();
        }

    }

    bottle() {
        this.loadImages(this.IMAGES_Bottle);
        this.setAmountBottle(0);
        this.x = 50;
        this.y = 120;
        this.width = 200;
        this.height = 60;
    }

    setAmountBottle() {
        let path = this.IMAGES_Bottle[this.resolveImageIndexAmount()];
        this.img = this.imageCache[path];
    }


    resolveImageIndexAmount() {
        if (this.amount == 0) {
            return 0;
        } else if (this.amount == 1) {
            return 1;
        } else if (this.amount == 2) {
            return 2;
        } else if (this.amount == 3) {
            return 3;
        } else if (this.amount == 4) {
            return 4;
        } else {
            return 5;
        }
    }
}