class StatusbarEnergy extends DrawableObject {


    IMAGES = [
        './img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        './img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        './img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        './img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        './img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        './img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];

    percentage = 100;

    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.setPercentage(100);
        this.x = 50;
        this.y = 20;
        this.width = 200;
        this.height = 60;


    }


    /**
     * This function is used to set the percentage of the character energy.
     */
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    /**
     * This function is used to return the correct mumber of the image for the current amount.
     */
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
}