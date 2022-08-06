class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_X = 0;
    statusbarEnergy = new StatusbarEnergy();
    statusbarBottles = new StatusbarBottles();
    statusbarCoins = new StatusbarCoins();
    throwableObjects = [];
    bottle = new Bottle();
    bottleSound = new Audio('audio/bottle.mp3');
    hitChickenSound = new Audio('audio/chicken.mp3');
    hitEndbossSound = new Audio('audio/endboss_hit.mp3');
    coinSound = new Audio('audio/coin.mp3');

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }


    /**
     * This function is used to hand over the worlt object to the character.
     */
    setWorld() {
        this.character.world = this;
    }


    /**
     * This function is used to run the checks every 200ms.
     */
    run() {
        setInterval(() => {
            this.checkCollisionsWithEnemy();
            this.checkCollisionBottleAndEnemy();
        }, 50)
        setInterval(() => {
            this.checkCollisionsWithEndboss();
            this.checkCollisionWithBottle();
            this.checkCollisionWithCoin();
            this.checkCollisionBottleAndEndboss();
            this.checkTrowableObjects();
        }, 150);
        setInterval(() => {
            this.checkCollisionBottleAndEndboss();
            this.checkCharacterIsNearToEndboss();
        }, 2800)
    }


    /**
     * This function is used to check if the bttle hits the endboss.
     */
    checkCollisionBottleAndEndboss() {
        this.hitEndbossSound.volume = 0.75;
        this.throwableObjects.forEach((bottle) => {
            this.level.endboss.forEach((endboss) => {
                if (endboss.isColliding(bottle)) {
                    endboss.endbossHurt();
                    this.hitEndbossSound.play()
                }
                if (endboss.isDead()) {
                    endboss.endbossDies();
                    setTimeout(() => {
                        this.level.endboss.splice(this.level.endboss.indexOf(endboss), 1);
                    }, 943);
                }
            });
        });
    }


    /**
     * This function is used to check if the bttle hits an enemy.
     */
    checkCollisionBottleAndEnemy() {
        this.hitChickenSound.volume = 0.65;
        this.throwableObjects.forEach((bottle) => {
            this.level.enemies.forEach((enemy) => {
                if (enemy.isColliding(bottle)) {
                    enemy.kill();
                    this.hitChickenSound.play();
                }
            });
        });
    }


    /**
     * This function is used to throw a bottle, if the character has one.
     */
    checkTrowableObjects() {
        if (this.keyboard.SPACE) {
            if (this.statusbarBottles.amount > 0) {
                this.statusbarBottles.amount--;
                if (this.character.otherDirection == true) {
                    console.log('throw left');
                    let bottle = new ThrowableObjectLeft(this.character.x, this.character.y + this.character.height / 2);
                    this.throwableObjects.push(bottle);
                    this.checkCollisionBottleAndEnemy();
                }
                if (this.character.otherDirection == false) {
                    let bottle = new ThrowableObject(this.character.x + this.character.width, this.character.y + this.character.height / 2);
                    this.throwableObjects.push(bottle);
                }
                this.statusbarBottles.setAmount();
                this.checkCollisionBottleAndEnemy();
            }
        }
    }


    /**
     * This function is used to check if the charackter colides with a bottle and add it to the bottle statusbar.
     */
    checkCollisionWithBottle() {
        this.bottleSound.volume = 0.65;
        this.level.bottles.forEach((bottle) => {
            if (this.character.isColliding(bottle)) {
                this.statusbarBottles.amount++;
                this.statusbarBottles.setAmount();
                this.level.bottles.splice(this.level.bottles.indexOf(bottle), 1);
                console.log('Collision with ', bottle);
                this.bottleSound.play();
            }
        });
    }


    /**
     * This function is used to check if the charackter colides with a coin and add it to the coin statusbar.
     */
    checkCollisionWithCoin() {
        this.coinSound.volume = 0.65;
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.statusbarCoins.amount++;
                this.statusbarCoins.setAmount();
                this.level.coins.splice(this.level.coins.indexOf(coin), 1);
                console.log('Collision with ', coin);
                this.coinSound.play();
            }
        });
    }


    /**
     * This function is used to check if the charackter colides with an anemy and lower his energy and animate the hit.
     * If the character jumpt on the enemy, the enemy will be killed. 
     */
    checkCollisionsWithEnemy() {
        this.hitChickenSound.volume = 0.65;
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && this.character.isAboveGround()) {
                console.log('chicken dead');
                enemy.kill();
                this.hitChickenSound.play();
            }
            if (this.character.isColliding(enemy) && !enemy.isDead()) {
                this.character.hit();
                this.statusbarEnergy.setPercentage(this.character.energy);
            }
        });
    }


    /**
     * This function is used to check if the charackter colides with the endboss and lower his energy and animate the hit.
     */
    checkCollisionsWithEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss)) {
                this.character.hit();
                this.statusbarEnergy.setPercentage(this.character.energy);
            }
        });
    }


    /**
     * This function is used to check if the charackter is near to the endboss.
     */
    checkCharacterIsNearToEndboss() {
        this.level.endboss.forEach((endboss) => {
            if (this.character.x > 1800) {
                endboss.letEndbossWalk();
                console.log('Contact with endboss')
            }
            if (endboss.x < 0) {
                this.character.characterDies();
            }
        });
    }


    /**
     * This function is used to draw the images on the canvas.
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_X, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_X, 0);
        this.addToMap(this.statusbarEnergy);
        this.addToMap(this.statusbarBottles);
        this.addToMap(this.statusbarCoins);
        this.ctx.translate(this.camera_X, 0);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.level.coins);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_X, 0);

        let self = this;
        requestAnimationFrame(function() {
            self.draw();
        });
    }


    /**
     * This function is used to add the objects to the canvas.
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    /**
     * This function is used to add images to the canvas.
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        //mo.drawFrame(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }


    /**
     * This function is used to flip the image of the character, if it moves baxk.
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }


    /**
     * This function is used to flip the image of the character back to the start direction.
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}