class StatusbarCoin extends DrawableObject {



    IMAGES_Coin = [
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png`,
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png`,
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png`,
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png`,
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png`,
        `img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png`
    ];


    amount = 0;
    world;

    constructor(type, world) {
        super();
        this.world = world
        let x = type;
        if (x = `coin`) {
            this.coin();
        }

    }


    coin() {
        this.loadImages(this.IMAGES_Coin);
        this.setAmountCoin(0);
        this.x = 50;
        this.y = 70;
        this.width = 200;
        this.height = 60;
    }

    setAmountCoin() {
        let path = this.IMAGES_Coin[this.resolveImageIndexAmount()];
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