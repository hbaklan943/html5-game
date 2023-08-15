document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
const KeyboardHelper = {
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  space: 32,
  w: 87,
  d: 68,
  a: 65,
  s: 83,
};
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let upHolding = false;
let downPressed = false;
let spacePressed = false;
let spaceHolding = false;
let wPressed = false;
let wHolding = false;
let dPressed = false;
let aPressed = false;
let sPressed = false;
function keyDownHandler(event) {
  console.log(event.keyCode);
  if (event.keyCode === KeyboardHelper.space) {
    spacePressed = true;
  }
  if (event.keyCode === KeyboardHelper.right) {
    rightPressed = true;
  }
  if (event.keyCode === KeyboardHelper.left) {
    leftPressed = true;
  }
  if (event.keyCode === KeyboardHelper.up) {
    upPressed = true;
  }
  if (event.keyCode === KeyboardHelper.down) {
    downPressed = true;
    character1Body.setAwake(true);
  }
  if (event.keyCode === KeyboardHelper.w) {
    wPressed = true;
  }
  if (event.keyCode === KeyboardHelper.d) {
    dPressed = true;
  }
  if (event.keyCode === KeyboardHelper.a) {
    aPressed = true;
  }
  if (event.keyCode === KeyboardHelper.s) {
    sPressed = true;
    character2Body.setAwake(true);
  }
}
function keyUpHandler(event) {
  if (event.keyCode === KeyboardHelper.space) {
    spacePressed = false;
    spaceHolding = false;
  }
  if (event.keyCode === KeyboardHelper.right) {
    rightPressed = false;
  }
  if (event.keyCode === KeyboardHelper.left) {
    leftPressed = false;
  }
  if (event.keyCode === KeyboardHelper.up) {
    upPressed = false;
    upHolding = false;
  }
  if (event.keyCode === KeyboardHelper.down) {
    downPressed = false;
  }
  if (event.keyCode === KeyboardHelper.w) {
    wPressed = false;
    wHolding = false;
  }
  if (event.keyCode === KeyboardHelper.d) {
    dPressed = false;
  }
  if (event.keyCode === KeyboardHelper.a) {
    aPressed = false;
  }
  if (event.keyCode === KeyboardHelper.s) {
    sPressed = false;
  }
}

let app = new PIXI.Application({ width: 1920, height: 1080 });
document.body.appendChild(app.view);

let character1Sprite = PIXI.Sprite.from("./assets/red_character.png");
let character2Sprite = PIXI.Sprite.from("./assets/blue_character.png");
let platform1Sprite = PIXI.Sprite.from("./assets/ground.png");
let platform2Sprite = PIXI.Sprite.from("./assets/ground.png");
let bulletTexture = PIXI.Texture.from("./assets/bullet.png");
character1Sprite.anchor.set(0.5);
character2Sprite.anchor.set(0.5);
platform1Sprite.anchor.set(0.5);
platform2Sprite.anchor.set(0.5);
app.stage.addChild(character1Sprite);
app.stage.addChild(character2Sprite);
app.stage.addChild(platform1Sprite);
app.stage.addChild(platform2Sprite);

let gravity = planck.Vec2(0.0, -10.0);
let world = planck.World({ gravity: gravity });
let platform1Def = {
  position: planck.Vec2(15.0, 8.0),
  userData: {
    id: 1,
  },
};
let platform2Def = {
  position: planck.Vec2(15.0, 12.0),
  userData: {
    id: 2,
  },
};
let platform1Body = world.createBody(platform1Def);
let platform2Body = world.createBody(platform2Def);
let groundBox = planck.Box(5.0, 0.5);
let platform1Fix = platform1Body.createFixture(groundBox, 0.0);
let platform2Fix = platform2Body.createFixture(groundBox, 0.0);
let character1Body = world.createBody({
  type: "dynamic",
  fixedRotation: true,
  position: planck.Vec2(11, 15.0),
  userData: {
    id: 1,
    direction: true,
  },
});
let character2Body = world.createBody({
  type: "dynamic",
  fixedRotation: true,
  position: planck.Vec2(19, 15.0),
  userData: {
    id: 2,
    direction: true,
  },
});
let dynamicBox = planck.Box(0.5, 0.5);
let fixtureDef = {
  shape: dynamicBox,
  density: 1.0,
  friction: 0.9,
};
let character1Fix = character1Body.createFixture(fixtureDef);
let character2Fix = character2Body.createFixture(fixtureDef);
let bulletBodies = [];
let bulletSprites = [];

let timeStep = 1 / 60;
let velocityIterations = 8;
let positionIterations = 3;

world.on("pre-solve", function (contact, oldManifold) {
  //console.log("Contact!");

  let fixA = contact.getFixtureA();
  let fixB = contact.getFixtureB();

  let isCharPlatformContact;
  let isCharBulletContact;
  let contactingPlatform;
  let contactingCharacter;
  let contactingBullet;
  if (fixA.m_body.m_type == "static") {
    isCharPlatformContact = true;
    contactingPlatform = fixA;
    contactingCharacter = fixB;
  } else if (fixB.m_body.m_type == "static") {
    isCharPlatformContact = true;
    contactingPlatform = fixB;
    contactingCharacter = fixA;
  }
  if (fixA.m_body.m_type == "bullet") {
    if (
      fixA.getBody().getUserData().shooter === fixB.getBody().getUserData().id
    ) {
      return;
    }
    isCharBulletContact = true;
    let vel = fixB.getBody().getLinearVelocity();
    vel.x =
      vel.x + fixA.getBody().getUserData().direction ? vel.x + 5 : vel.x - 5;
    fixB.getBody().setLinearVelocity(vel);
  } else if (fixB.getBody().getType() == "bullet") {
    if (
      fixB.getBody().getUserData().shooter === fixA.getBody().getUserData().id
    ) {
      contact.setEnabled(false);
      return;
    }
    isCharBulletContact = true;
    let vel = fixA.getBody().getLinearVelocity();
    vel.x = fixB.getBody().getLinearVelocity().x > 0 ? vel.x + 5 : vel.x - 5;
    fixA.getBody().setLinearVelocity(vel);
    console.log("force applied");
    console.log(world.getBodyCount());
    world.destroyBody(fixB.getBody());
    console.log(world.getBodyCount());
  }
  if (!isCharPlatformContact) {
    contact.setEnabled(false);
    return;
  }

  if (
    contactingCharacter.getBody().getPosition().y <=
    contactingPlatform.getBody().getPosition().y + 1
  ) {
    contact.setEnabled(false);
  }
  if (contactingCharacter.getBody().getUserData().id == 1 && downPressed) {
    contact.setEnabled(false);
  }
  if (contactingCharacter.getBody().getUserData().id == 2 && sPressed) {
    contact.setEnabled(false);
  }
});

// This function will be called on each frame update (tick)
function gameLoop(delta) {
  // Step the physics simulation
  stats.begin();

  world.step(timeStep * delta, velocityIterations, positionIterations);
  //console.log(character1Body.getLinearVelocity());

  let character1UserData = character1Body.getUserData();
  let character2UserData = character2Body.getUserData();
  if (rightPressed && character1Body.getLinearVelocity().x < 5) {
    character1Body.applyForce(planck.Vec2(70, 0), planck.Vec2(0, 0));
    character1Body.setUserData({ ...character1UserData, direction: true });
  }
  if (dPressed && character2Body.getLinearVelocity().x < 5) {
    character2Body.applyForce(planck.Vec2(70, 0), planck.Vec2(0, 0));
    character2Body.setUserData({ ...character2UserData, direction: true });
  }
  if (leftPressed && character1Body.getLinearVelocity().x > -5) {
    character1Body.applyForce(planck.Vec2(-70, 0), planck.Vec2(0, 0));
    character1Body.setUserData({ ...character1UserData, direction: false });
  }
  if (aPressed && character2Body.getLinearVelocity().x > -5) {
    //console.log("pressing right");
    character2Body.applyForce(planck.Vec2(-70, 0), planck.Vec2(0, 0));
    character2Body.setUserData({ ...character2UserData, direction: false });
  }
  if (upPressed && !upHolding) {
    let vel = character1Body.getLinearVelocity();
    vel.y = 7;
    character1Body.setLinearVelocity(vel);
    //console.log("applied impulse");
    upHolding = true;
  }
  if (wPressed && !wHolding) {
    let vel = character2Body.getLinearVelocity();
    vel.y = 7;
    character2Body.setLinearVelocity(vel);
    //console.log("applied impulse");
    wHolding = true;
  }
  if (spacePressed && !spaceHolding) {
    let bulletBody = world.createBody({
      position: character2Body.getPosition(),
      type: "bullet",
      userData: {
        direction: character2UserData.direction,
        shooter: 2,
      },
    });
    bulletBody.createFixture(planck.Box(0.18, 0.046));
    bulletBody.setLinearVelocity(
      planck.Vec2(character2UserData.direction ? 25 : -25, 0)
    );
    bulletBodies.push(bulletBody);
    let bulletSprite = new PIXI.Sprite(bulletTexture);
    bulletSprite.anchor.set(0.5);
    app.stage.addChild(bulletSprite);
    bulletSprites.push(bulletSprite);
    //console.log(world.getBodyCount());
    spaceHolding = true;
  }

  // Update the sprite position based on the physics body position
  let character1Position = character1Body.getPosition();
  let character2Position = character2Body.getPosition();
  let pixiCharacter1Pos = plankPositionToPixi(character1Position);
  let pixiCharacter2Pos = plankPositionToPixi(character2Position);
  let platform1Pos = plankPositionToPixi(platform1Body.getPosition());
  let platform2Pos = plankPositionToPixi(platform2Body.getPosition());
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

  character1Sprite.position.set(pixiCharacter1Pos.x, pixiCharacter1Pos.y);
  character2Sprite.position.set(pixiCharacter2Pos.x, pixiCharacter2Pos.y);
  platform1Sprite.position.set(platform1Pos.x, platform1Pos.y);
  platform2Sprite.position.set(platform2Pos.x, platform2Pos.y);
  //console.log(bulletSprites, bulletBodies);
  bulletSprites.forEach((sprite, i) => {
    const pos = plankPositionToPixi(bulletBodies[i].getPosition());
    sprite.position.set(pos.x, pos.y);
    if (pos.x < 0 || pos.x > 1920) {
      //console.log(bulletBodies[i]);
      world.destroyBody(bulletBodies[i]);
      bulletBodies.splice(i, 1);
      bulletSprites.splice(i, 1);
      app.stage.removeChild(sprite);
      console.log();
    }
  });

  // Render the PIXI.js stage
  app.render();
  stats.end();
}

// Register the game loop function with Pixi.js ticker
app.ticker.add(gameLoop);
