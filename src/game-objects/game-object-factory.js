export function createEarth(scene) {
  const earth = scene.physics.add.image(400, 300, 'earth');

  earth.setScale(1.2);
  earth.setCircle(70, 30, 30);
  earth.onCollide = true;

  return earth;
}

export function createEnemy(scene, spawnX, spawnY, scale) {
  // 1. Spawn at x, y
  // 2. Set velocity towards planet
  // 3. Create sprite
  // 4. Set enemy size
  // 5. Turn enemy so it faces towards planet

  const enemy = scene.physics.add.image(100, 100, 'earth');

  enemy.setCircle(70, 30, 30);
  enemy.onCollide = true;

  enemy.setVelocity(100, 200);
  enemy.setCollideWorldBounds(true);
  enemy.setBounce(1, 1);

  return enemy;
}

export function createEarthBullet(scene, clickX, clickY) {
  // 1. spawn at earth
  // 2. set velocity in direction towards clickX, clickY
  // 3. Create sprite
}
