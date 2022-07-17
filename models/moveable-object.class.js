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
    speedY = 0;
    acceleration = 1.5;
    energy = 100;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 160
    }

    loadImage(path) {
        this.img = new Image(); // <img id="image">" ist das selbe wie Image()
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth);
    }
    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = `5`;
            ctx.strokeStyle = `blue`;
            ctx.rect(this.x, this.y, this.width, this.heigth);
            ctx.stroke();
        }
    }

    //character.IsColliding(chicken);
    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.heigth > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.heigth;
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; // Differenz in Millesekunden
        timepassed = timepassed / 1000; // Gleich Sekunden
        return timepassed < 0.5;
    }

    isDead() {
        return this.energy == 0;
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
        let i = this.currentImage % images.length; // let i= 0% 6; // i = 0, 1, 2, 3, 4, 5 und dann wieder 0
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }
    moveleft() {
        this.x -= this.speed; // 60 mal pro sekunde 0.15 bewegen
    }

    jump() {
        this.speedY = 25;
    };
}