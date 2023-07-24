document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
const KeyboardHelper = { left: 37, up: 38, right: 39, down: 40 };
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;
function keyDownHandler(event) {
  rightPressed = event.keyCode === KeyboardHelper.right;
  leftPressed = event.keyCode === KeyboardHelper.left;
  upPressed = event.keyCode === KeyboardHelper.up;
  downPressed = event.keyCode === KeyboardHelper.down;
}
function keyUpHandler(event) {
  rightPressed = event.keyCode !== KeyboardHelper.right;
  leftPressed = event.keyCode !== KeyboardHelper.left;
  upPressed = event.keyCode !== KeyboardHelper.up;
  downPressed = event.keyCode !== KeyboardHelper.down;
}

let app = new PIXI.Application({ width: 1920, height: 1080 });
document.body.appendChild(app.view);

let characterSprite = PIXI.Sprite.from("./assets/character_64px.png");
let groundSprite = PIXI.Sprite.from("./assets/ground.png");
characterSprite.anchor.set(0.5);
groundSprite.anchor.set(0.5);
app.stage.addChild(characterSprite);
app.stage.addChild(groundSprite);

let gravity = planck.Vec2(0.0, -10.0);
let world = planck.World({ gravity: gravity });
let groundBodyDef = {
  position: planck.Vec2(15.0, 8.0),
};
let groundBody = world.createBody(groundBodyDef);
let groundBox = planck.Box(5.0, 0.5);
groundBody.createFixture(groundBox, 0.0);
let characterBody = world.createBody({
  type: "dynamic",
  fixedRotation: true,
  position: planck.Vec2(9.9, 15.0),
});
let dynamicBox = planck.Box(0.5, 0.5);
let fixtureDef = {
  shape: dynamicBox,
  density: 1.0,
  friction: 0.3,
};
characterBody.createFixture(fixtureDef);

let timeStep = 1 / 60;
let velocityIterations = 8;
let positionIterations = 3;

// This function will be called on each frame update (tick)
function gameLoop(delta) {
  // Step the physics simulation
  world.step(timeStep * delta, velocityIterations, positionIterations);
  if (rightPressed) {
    console.log("pressing right");
    characterBody.app;
  }

  // Update the sprite position based on the physics body position
  let characterPosition = characterBody.getPosition();
  let characterAngle = characterBody.getAngle();
  let pixiCharacterPos = plankPositionToPixi(characterPosition);
  let groundPos = plankPositionToPixi(groundBody.getPosition());
  /* console.log(
    "ground pos:",
    groundBody.getPosition(),
    "ground location:",
    groundPos
  );
  console.log(
    "character pos:",
    characterPosition,
    "character location:",
    pixiCharacterPos
  ); */

  characterSprite.position.set(pixiCharacterPos.x, pixiCharacterPos.y);
  characterSprite.rotation = characterAngle;
  groundSprite.position.set(groundPos.x, groundPos.y);
  // You can add other game logic or updates here if needed

  // Render the PIXI.js stage
  app.render();
}

// Register the game loop function with Pixi.js ticker
app.ticker.add(gameLoop);
