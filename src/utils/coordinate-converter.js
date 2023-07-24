function plankPositionToPixi(v) {
  //convert pixels to meters (64px = 1m)
  var retY = (16.875 - v.y) * 64;
  var retX = v.x * 64;

  return { x: retX, y: retY };
}
