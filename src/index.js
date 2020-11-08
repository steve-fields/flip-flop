const { MainGameScene } = require("./scenes/main-game-scene");

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: new MainGameScene(),
}

var game = new Phaser.Game(config);