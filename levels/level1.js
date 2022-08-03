/**
 * the more objects are entered, the more will be rendered in the game.
 * 
 * @param {Array} array - sets the Enemies for Level 1
 */

let level1;

function initlevel() {
    level1 = new Level(

        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick(),
            new Chick()
        ], [
            new Cloud()
        ], [
            new BackgroundObject('./img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719, 0),
            new BackgroundObject('./img/5.Fondo/Capas/3.Fondo3/2.png', -719, 0),
            new BackgroundObject('./img/5.Fondo/Capas/2.Fondo2/2.png', -719, 0),
            new BackgroundObject('./img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719, 0),

            new BackgroundObject('./img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0, 0),
            new BackgroundObject('./img/5.Fondo/Capas/3.Fondo3/1.png', 0, 0),
            new BackgroundObject('./img/5.Fondo/Capas/2.Fondo2/1.png', 0, 0),
            new BackgroundObject('./img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0, 0),
            new BackgroundObject('./img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719, 0),
            new BackgroundObject('./img/5.Fondo/Capas/3.Fondo3/2.png', 719, 0),
            new BackgroundObject('./img/5.Fondo/Capas/2.Fondo2/2.png', 719, 0),
            new BackgroundObject('./img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719, 0),

            new BackgroundObject('./img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2, 0),
            new BackgroundObject('./img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2, 0),
            new BackgroundObject('./img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2, 0),
            new BackgroundObject('./img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2, 0),
            new BackgroundObject('./img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3, 0),
            new BackgroundObject('./img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3, 0),
            new BackgroundObject('./img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3, 0),
            new BackgroundObject('./img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3, 0),
        ], [
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle(),
            new Bottle()
        ], [
            new Coin(),
            new Coin(),
            new Coin(),
            new Coin()
        ], [
            new Endboss()
        ],

    );
}