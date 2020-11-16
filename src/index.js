import { Game, AUTO } from 'phaser';
import MainGameScene from './scenes/main-game-scene';

const config = {
  type: AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: new MainGameScene(),
};

// eslint-disable-next-line no-unused-vars
const game = new Game(config);

console.log('Hello World!');
