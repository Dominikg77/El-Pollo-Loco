class MovableObject {
    x = 120;
    y = 280;
    img;
    heigth = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;
    speed = 0.15
    otherDirection = false;


    loadImage(path) {
        this.img = new Image(); // <img id="image">" ist das selbe wie Image()
        this.img.src = path;
    }

    /**
     * 
     * @param {Array} arr -[`img/image1.png`,`img/image2.png`....] 
     */
    loadImages(arr) {
        arr.forEach(path => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    playAnimation(images) {
        let i = this.currentImage % this.IMAGES_WALKING.length; // let i= 0% 6; // i = 0, 1, 2, 3, 4, 5 und dann wieder 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        console.log(`Moving right`)
    }
    moveleft() {
        setInterval(() => {
            this.x -= this.speed; // 60 mal pro sekunde 0.15 bewegen
        }, 1000 / 60); // 60fps
    }
}