class StatusbarBottles extends DrawableObject {

    IMAGES = [
        './img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        './img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'
    ];


    amount = 0;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setAmount(0);
        this.x = 50;
        this.y = 70;
        this.width = 200;
        this.height = 60;
    }



    /**
     * This function is used to set the amount of the bottle statusbar.
     */
    setAmount() {
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * This function is used to return the correct mumber of the image for the current amount.
     */
    resolveImageIndex() {
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