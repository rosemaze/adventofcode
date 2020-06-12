import { position, velocity } from "../App.types";

export const getMoonPositionByApplyingVelocity = (options: {
  moonPosition: position;
  moonVelocity: velocity;
}): position => ({
  x: options.moonPosition.x + options.moonVelocity.x,
  y: options.moonPosition.y + options.moonVelocity.y,
  z: options.moonPosition.z + options.moonVelocity.z,
});
