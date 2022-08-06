class ThrowableObject extends MovableObject {

    IMAGES_FLYING = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];


    IMAGES_SHATTERING = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];


    constructor(x, y) {
        super().loadImages(this.IMAGES_FLYING);
        this.loadImages(this.IMAGES_SHATTERING);
        this.loadImage(this.IMAGES_FLYING[0]);
        this.x = x;
        Object.freeze(this.x);
        this.y = y;
        this.height = 60;
        this.width = 40;
        this.throw();
        this.animate();
    }


    /**
     * This function is used to throw a bottle.
     */
    throw () {
        this.speedY = 20;
        this.applyGravity();
        setInterval(() => {
            if (this.isAboveGround()) {
                this.x += 10;
            }
        }, 1000 / 60);
    }


    animate() {
        let timeoutSet = false;

        let interval = setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_FLYING);
            } else {
                if (!timeoutSet) {
                    timeoutSet = true;
                    this.currentImage = 0;

                    setTimeout(() => {
                        clearInterval(interval);
                        let index = world.throwableObjects.indexOf(this);
                        world.throwableObjects.splice(index, 1);
                    }, 400);
                }
                this.playAnimation(this.IMAGES_SHATTERING);
            }
        }, 100);
    }
}