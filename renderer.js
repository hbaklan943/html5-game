let app = new PIXI.Application({ width: 1920, height: 1080 });
let sprite = PIXI.Sprite.from("./assets/character.png");
app.stage.addChild(sprite);

let elapsed = 0.0;
app.ticker.add((delta) => {
  elapsed += delta;
  sprite.x = 100.0 + Math.cos(elapsed / 25.0) * 100.0;
});

document.body.appendChild(app.view);
