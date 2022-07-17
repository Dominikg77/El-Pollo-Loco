class Level {
    enemies;
    clouds;
    coin;
    backgroundObjects;
    level_end_x = 2100;

    constructor(enemies, clouds, coin, backgroundObjects) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.coin = coin;
        this.backgroundObjects = backgroundObjects;
    }

}