class Statusbar extends DrawableObject {

    //Health
    IMAGES_Health = [
        `img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png`,
        `img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png`,
        `img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png`,
        `img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png`,
        `img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png`,
        `img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png`
    ];

    IMAGES_Coin = [
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png`,
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png`,
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png`,
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png`,
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png`,
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png`
    ];

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
        if (x = `health`) {
            this.health();
        }
        if (x = `coin`) {
            this.coin();
        }
        //if (x = `bottle`) {
        //  this.bottle();
        // }

    }


    health() {
        this.loadImages(this.IMAGES_Health);
        this.x = 50;
        this.y = 5;
        this.width = 200;
        this.height = 40;
        this.setPrecentage(100);
    }

    setPrecentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_Health[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }


    coin() {
        this.loadImages(this.IMAGES_Coin);
        this.setAmountCoin(0);
        this.x = 50;
        this.y = 70;
        this.width = 200;
        this.height = 40;
    }

    setAmountCoin() {
        let path = this.IMAGES_Coin[this.resolveImageIndexAmount()];
        this.img = this.imageCache[path];
    }

    bottle() {
        this.loadImages(this.IMAGES_Bottle);
        this.setAmountBottle(0);
        this.x = 50;
        this.y = 90;
        this.width = 200;
        this.height = 40;
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