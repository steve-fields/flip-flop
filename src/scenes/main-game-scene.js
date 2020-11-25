import { Scene } from 'phaser';
import { createEarth, createEnemy } from '../game-objects/game-object-factory';

export default class MainGameScene extends Scene {
  preload() {
    this.load.image('sky', 'http://labs.phaser.io/assets/skies/space3.png');
    this.load.image('green', 'http://labs.phaser.io/assets/particles/green.png');
    this.load.image('earth', '../../../assets/earthPNG.png');
  }

  create() {
    this.add.image(400, 300, 'sky');

    const particles = this.add.particles('green');

    const emitter = particles.createEmitter({
      speed: 100,
      scale: { start: 1, end: 0 },
      blendMode: 'ADD',
    });

    const earth = createEarth(this); // this = the MainGameScene object
    const enemies = createEnemy(this);

    this.physics.add.collider(earth, enemies, (earthCollision, enemyCollision) => {
      enemyCollision.destroy();
      // This can be used for HP when enemy hits earth
    });

    emitter.startFollow(earth);
  }
}
