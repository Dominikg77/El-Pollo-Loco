class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBarHealth = new statusBarHealth(`health`);
    statusBarCoin = new StatusbarCoin(`coin`);
    statusBarBottle = new StatusbarBottle(`bottle`);
    throwableObjects = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext(`2d`);
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }
    setWorld() {
        this.character.world = this;
    }
    run() {
        setInterval(() => {
            this.checkCollsition();
            this.checkThrowObjects();
        }, 100);
    }


    checkThrowObjects() {
        if (this.keyboard.Space) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollsition() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBarHealth.setPrecentage(this.character.energy);
            }
        });
    }

    checkCollisionWithCoin() {
        this.level.coin.forEach((coin) => {
            if (this.character.characterIsColiding(coin)) {
                this.statusBarCoin.amount++;
                this.statusBarCoin.setAmount();
                this.level.coin.splice(this.level.coin.indexOf(coin), 1);
                console.log('Collision with ');
                // this.coinSound.play();
            }
        });
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0); //Back
        // --- space for fixed object---
        this.addToMap(this.statusBarHealth);
        this.addToMap(this.statusBarCoin);
        this.addToMap(this.statusBarBottle);

        this.ctx.translate(this.camera_x, 0); //Forwards

        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coin);
        this.ctx.translate(-this.camera_x, 0);
        let self = this
        requestAnimationFrame(function() { //hier wird die Draw methode so h??uig aufgerufen, wie es die Graik Karte zul??sst (immer wieder)
            self.draw(); // requet muss eine Funktion rein geschrieben werden, die wird ausgel??sst wenn alles dr??ber fertg gezeichnet ist 
            // in dieser Funktion funktioniert das Wort This nicht deswegen haben wir hier eine Varbiable zugewissen
        });
    };


    addObjectsToMap(objekt) {
        objekt.forEach(o => {
            this.addToMap(o);
        }); // wir f??hren dies f??r jedes Element aus
    }


    addToMap(mo) {
        if (mo.otherDirection) {

            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        if (mo.otherDirection) {
            this.flipImageBack(mo)
        }
    }

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0); // breite angeben
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1; // x kordiante umdrehen
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();

    }

}