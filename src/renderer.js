let app = new PIXI.Application({ width: 1920, height: 1080 });
document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from("./assets/character_64px.png");
app.stage.addChild(sprite);

let gravity = planck.Vec2(0.0, -10.0);
let world = planck.World({ gravity: gravity });
let groundBodyDef = {
  position: planck.Vec2(15.0, 8.0),
};
let groundBody = world.createBody(groundBodyDef);
let groundBox = planck.Box(5.0, 0.5);
groundBody.createFixture(groundBox, 0.0);
let body = world.createBody({
  type: "dynamic",
  position: planck.Vec2(9.0, 15.0),
});
let dynamicBox = planck.Box(1.0, 1.0);
let fixtureDef = {
  shape: dynamicBox,
  density: 1.0,
  friction: 0.3,
};
body.createFixture(fixtureDef);

let timeStep = 1 / 60;
let velocityIterations = 8;
let positionIterations = 3;

// This function will be called on each frame update (tick)
function gameLoop(delta) {
  // Step the physics simulation
  world.step(timeStep * delta, velocityIterations, positionIterations);

  // Update the sprite position based on the physics body position
  let position = body.getPosition();
  let angle = body.getAngle();
  console.log(position.x, position.y);
  let pixiPos = plankPositionToPixi(position);
  console.log(pixiPos.x, pixiPos.y);
  sprite.position.set(pixiPos.x, pixiPos.y);
  sprite.rotation = angle;

  // You can add other game logic or updates here if needed

  // Render the PIXI.js stage
  app.render();
}

// Register the game loop function with Pixi.js ticker
app.ticker.add(gameLoop);
