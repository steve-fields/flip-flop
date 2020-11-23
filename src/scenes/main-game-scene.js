import { Scene } from 'phaser';

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


    const earth = this.physics.add.image(400, 100, 'earth');

    earth.setScale(1.2);
    earth.setVelocity(100, 200);
    earth.setBounce(1, 1);
    earth.setCollideWorldBounds(true);

    emitter.startFollow(earth);
  }
}
