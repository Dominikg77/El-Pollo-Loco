class MovableObject extends DrawableObject {
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
        if (this instanceof ThrowableObject) { // Throwable object should always fall 
            return true
        } else {
            return this.y < 160
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