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
  shift: 16,
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
let shiftPressed = false;
let shiftHolding = false;
function keyDownHandler(event) {
  //console.log(event.keyCode);
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
  if (event.keyCode === KeyboardHelper.shift) {
    shiftPressed = true;
  }
}
function keyUpHandler(event) {
  if (event.keyCode === KeyboardHelper.space) {
    spacePressed = false;
    spaceHolding = false;
  }
  if (event.keyCode === KeyboardHelper.shift) {
    shiftPressed = false;
    shiftHolding = false;
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
let restartButton = document.getElementById("restart-button");
let maxHealth = 7;
document.getElementById("health-right").textContent = `${maxHealth}❤`;
document.getElementById("health-left").textContent = `${maxHealth}❤`;
restartButton.onclick = () => {
  character1Body.setPosition(planck.Vec2(19, 15.0));
  character1Body.setLinearVelocity(planck.Vec2(0, 0));
  character1Body.setAwake(true);
  character1Body.setUserData({
    ...character1Body.getUserData(),
    direction: false,
    stamina: 2,
    onGround: false,
    health: maxHealth,
  });
  document.getElementById("health-right").textContent = `${maxHealth}❤`;
  character2Body.setPosition(planck.Vec2(11, 15.0));
  character2Body.setLinearVelocity(planck.Vec2(0, 0));
  character2Body.setAwake(true);
  character2Body.setUserData({
    ...character2Body.getUserData(),
    direction: true,
    stamina: 2,
    onGround: false,
    health: 2,
  });

  document.getElementById("health-left").textContent = `${maxHealth}❤`;
  document.getElementById("victory-div").style.display = "none";
  app.start();
};

let app = new PIXI.Application({ width: 1920, height: 1080 });
document.body.appendChild(app.view);

let character1Sprite = PIXI.Sprite.from("./assets/red_character.png");
let character2Sprite = PIXI.Sprite.from("./assets/blue_character.png");
let platform1Sprite = PIXI.Sprite.from("./assets/ground.png");
let platform2Sprite = PIXI.Sprite.from("./assets/ground.png");
let platform3Sprite = PIXI.Sprite.from("./assets/ground.png");
let bulletTexture = PIXI.Texture.from("./assets/bullet.png");
character1Sprite.anchor.set(0.5);
character2Sprite.anchor.set(0.5);
platform1Sprite.anchor.set(0.5);
platform2Sprite.anchor.set(0.5);
platform3Sprite.anchor.set(0.5);
app.stage.addChild(character1Sprite);
app.stage.addChild(character2Sprite);
app.stage.addChild(platform1Sprite);
app.stage.addChild(platform2Sprite);
app.stage.addChild(platform3Sprite);

let gravity = planck.Vec2(0.0, -10.0);
let world = planck.World({ gravity: gravity });
let platform1Def = {
  position: planck.Vec2(22.5, 10.5),
  userData: {
    id: 1,
  },
};
let platform2Def = {
  position: planck.Vec2(7.5, 10.5),
  userData: {
    id: 2,
  },
};
let platform3Def = {
  position: planck.Vec2(15, 6.5),
  userData: {
    id: 2,
  },
};
let platform1Body = world.createBody(platform1Def);
let platform2Body = world.createBody(platform2Def);
let platform3Body = world.createBody(platform3Def);
console.log(platform1Body);
let groundBox = planck.Box(5.0, 0.5);
let platform1Fix = platform1Body.createFixture(groundBox, 0.0);
let platform2Fix = platform2Body.createFixture(groundBox, 0.0);
let platform3Fix = platform3Body.createFixture(groundBox, 0.0);
let character1Body = world.createBody({
  type: "dynamic",
  fixedRotation: true,
  position: planck.Vec2(19, 15.0),
  userData: {
    characterId: 1,
    direction: false,
    stamina: 2,
    onGround: false,
    health: maxHealth,
  },
});
let character2Body = world.createBody({
  type: "dynamic",
  fixedRotation: true,
  position: planck.Vec2(11, 15.0),
  userData: {
    characterId: 2,
    direction: true,
    stamina: 2,
    onGround: false,
    health: maxHealth,
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
let destroyedBodies = [];
let charactersOnPlatform = [];

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
  if (
    fixA.getBody().getType() == "static" &&
    fixB.getBody().getType() == "dynamic"
  ) {
    isCharPlatformContact = true;
    contactingPlatform = fixA;
    contactingCharacter = fixB;
  } else if (
    fixB.getBody().getType() == "static" &&
    fixA.getBody().getType() == "dynamic"
  ) {
    isCharPlatformContact = true;
    contactingPlatform = fixB;
    contactingCharacter = fixA;
  }
  if (fixA.getBody().getType() == "bullet") {
    if (
      fixA.getBody().getUserData().shooterId ===
      fixB.getBody().getUserData().characterId
    ) {
      contact.setEnabled(false);
      return;
    }
    isCharBulletContact = true;
    let vel = fixB.getBody().getLinearVelocity();
    vel.x =
      vel.x + fixA.getBody().getLinearVelocity().x > 0
        ? vel.x + 15
        : vel.x - 15;
    fixB.getBody().setLinearVelocity(vel);
    destroyedBodies.push(fixB.getBody());
  } else if (fixB.getBody().getType() == "bullet") {
    if (
      fixB.getBody().getUserData().shooterId ===
      fixA.getBody().getUserData().characterId
    ) {
      contact.setEnabled(false);
      return;
    }
    isCharBulletContact = true;
    let vel = fixA.getBody().getLinearVelocity();
    vel.x = fixB.getBody().getLinearVelocity().x > 0 ? vel.x + 15 : vel.x - 15;
    fixA.getBody().setLinearVelocity(vel);
    destroyedBodies.push(fixB.getBody());
  }
  if (!isCharPlatformContact) {
    contact.setEnabled(false);
    return;
  }

  if (
    contactingCharacter.getBody().getPosition().y <
    contactingPlatform.getBody().getPosition().y + 1
  ) {
    contact.setEnabled(false);
  }
  if (
    contactingCharacter.getBody().getPosition().y.toFixed(1) ===
      (contactingPlatform.getBody().getPosition().y + 1).toFixed(1) &&
    contactingCharacter.getBody().getLinearVelocity().y === 0
  ) {
    if (!contactingCharacter.getBody().getUserData().onGround) {
      contactingCharacter.getBody().setUserData({
        ...contactingCharacter.getBody().getUserData(),
        onGround: true,
      });
      charactersOnPlatform.push(contactingCharacter.getBody());
      console.log("Stamina resetted");
      console.log("---------------------");
    }
  } else {
    contactingCharacter.getBody().setUserData({
      ...contactingCharacter.getBody().getUserData(),
      onGround: false,
    });
  }

  if (
    contactingCharacter.getBody().getUserData().characterId == 1 &&
    downPressed
  ) {
    contact.setEnabled(false);
  }
  if (
    contactingCharacter.getBody().getUserData().characterId == 2 &&
    sPressed
  ) {
    contact.setEnabled(false);
  }
});

// This function will be called on each frame update (tick)
function gameLoop(delta) {
  // Step the physics simulation
  stats.begin();

  //console.log(character1Body.getLinearVelocity());
  if (destroyedBodies.length !== 0) {
    destroyedBodies.forEach((body) => {
      world.destroyBody(body);
      const idxOfBody = bulletBodies.indexOf(body);
      bulletBodies.splice(idxOfBody, 1);
      app.stage.removeChild(bulletSprites[bulletSprites.length - 1]);
      bulletSprites.pop();
    });
    destroyedBodies.length = 0;
  }
  if (charactersOnPlatform.length !== 0) {
    charactersOnPlatform.forEach((characterBody) => {
      characterBody.setUserData({ ...characterBody.getUserData(), stamina: 2 });
    });
    charactersOnPlatform.length = 0;
  }
  // userdatas for each game loop
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
  if (upPressed && !upHolding && character1Body.getUserData().stamina > 0) {
    let vel = character1Body.getLinearVelocity();
    vel.y = 7;
    character1Body.setLinearVelocity(vel);
    character1Body.setUserData({
      ...character1Body.getUserData(),
      stamina: character1Body.getUserData().stamina - 1,
    });

    //console.log("applied impulse");
    upHolding = true;
  }
  if (wPressed && !wHolding && character2Body.getUserData().stamina > 0) {
    let vel = character2Body.getLinearVelocity();
    vel.y = 7;
    character2Body.setLinearVelocity(vel);
    character2Body.setUserData({
      ...character2Body.getUserData(),
      stamina: character2Body.getUserData().stamina - 1,
    });
    //console.log("applied impulse");
    wHolding = true;
  }
  if (shiftPressed && !shiftHolding) {
    let bulletBody = world.createBody({
      position: character1Body.getPosition(),
      type: "bullet",
      userData: {
        direction: character1UserData.direction,
        shooterId: 1,
      },
    });
    bulletBody.createFixture(planck.Box(0.36, 0.092));
    bulletBody.setLinearVelocity(
      planck.Vec2(character1UserData.direction ? 15 : -15, 0)
    );
    bulletBodies.push(bulletBody);
    let bulletSprite = new PIXI.Sprite(bulletTexture);
    bulletSprite.anchor.set(0.5);
    app.stage.addChild(bulletSprite);
    bulletSprites.push(bulletSprite);
    //shiftHolding = true;
  }

  if (spacePressed && !spaceHolding) {
    let bulletBody = world.createBody({
      position: character2Body.getPosition(),
      type: "bullet",
      userData: {
        direction: character2UserData.direction,
        shooterId: 2,
      },
    });
    bulletBody.createFixture(planck.Box(0.5, 0.17));
    bulletBody.setLinearVelocity(
      planck.Vec2(character2UserData.direction ? 15 : -15, 0)
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
  let platform3Pos = plankPositionToPixi(platform3Body.getPosition());
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
  platform2Sprite.position.set(platform2Pos.x, platform2Pos.y);
  platform3Sprite.position.set(platform3Pos.x, platform3Pos.y);
  //console.log(bulletSprites, bulletBodies);
  bulletBodies.forEach((body, i) => {
    const pos = plankPositionToPixi(body.getPosition());
    bulletSprites[i].position.set(pos.x, pos.y);
    if (pos.x < -1920 || pos.x > 3840) {
      //console.log(bulletBodies[i]);
      world.destroyBody(body);
      bulletBodies.splice(i, 1);
      console.log(bulletSprites, bulletBodies);
      app.stage.removeChild(bulletSprites[bulletSprites.length - 1]);
      bulletSprites.pop();
    }
  });

  //reset position when dies, change health
  if (
    character1Body.getPosition().y < 0 ||
    character1Body.getPosition().x < -15 ||
    character1Body.getPosition().x > 45
  ) {
    character1Body.setPosition(planck.Vec2(19, 15.0));
    character1Body.setLinearVelocity(planck.Vec2(0, 0));
    character1Body.setAwake(true);
    character1Body.setUserData({
      ...character1Body.getUserData(),
      health: character1UserData.health - 1,
    });
    document.getElementById("health-right").textContent = `${
      character1Body.getUserData().health
    }❤`;
    if (character1Body.getUserData().health == 0) {
      app.stop();
      document.getElementById("victory-p").textContent = "Mavi Aldi Eli Helal!";
      document.getElementById("victory-div").style.display = "flex";
    }
  }
  if (
    character2Body.getPosition().y < 0 ||
    character2Body.getPosition().x < -10 ||
    character2Body.getPosition().x > 40
  ) {
    character2Body.setPosition(planck.Vec2(11, 15.0));
    character2Body.setLinearVelocity(planck.Vec2(0, 0));
    character2Body.setAwake(true);
    character2Body.setUserData({
      ...character2Body.getUserData(),
      health: character2UserData.health - 1,
    });
    document.getElementById("health-left").textContent = `${
      character2Body.getUserData().health
    }❤`;
    if (character2Body.getUserData().health == 0) {
      app.stop();
      document.getElementById("victory-p").textContent =
        "Kirmizi Aldi Eli Helal!";

      document.getElementById("victory-div").style.display = "flex";
    }
  }

  // turn character sprites based on their direction
  // and scale them down from 64*3 pixels size to 64px size
  // made character sprites 64*3 pixels to not look bad when viewport zooms
  if (!character1UserData.direction) {
    character1Sprite.transform.scale.set(-1 / 3, 1 / 3);
  } else {
    character1Sprite.transform.scale.set(1 / 3, 1 / 3);
  }
  if (!character2UserData.direction) {
    character2Sprite.transform.scale.set(-1 / 3, 1 / 3);
  } else {
    character2Sprite.transform.scale.set(1 / 3, 1 / 3);
  }

  world.step(timeStep * delta, velocityIterations, positionIterations);
  // Render the PIXI.js stage
  app.render();
  let character1Pos = character1Body.getPosition();
  let character2Pos = character2Body.getPosition();

  // set stage pivot to collective center of characters location for scaling(zooming) to them
  // set stage position to world center for camera to follow characters
  let scaleFactor = (50 - Math.abs(character1Pos.x - character2Pos.x)) / 30; // adjust 2 numbers for desired magnification
  let pivotX = ((character1Pos.x + character2Pos.x) / 2) * 64;
  let pivotY = ((16.875 - character1Pos.y + 16.875 - character2Pos.y) / 2) * 64;
  app.stage.transform.pivot.set(pivotX, pivotY);
  app.stage.transform.position.set(960, 540);
  app.stage.transform.scale.set(
    scaleFactor < 0.75 ? 0.75 : scaleFactor,
    scaleFactor < 0.75 ? 0.75 : scaleFactor
  );
  //console.log(scaleFactor);
  stats.end();
}

// Register the game loop function with Pixi.js ticker
app.ticker.add(gameLoop);
