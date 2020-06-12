import { position, velocity } from "../App.types";
import { getVelocityByApplyingGravity } from "../helpers/getVelocityByApplyingGravity";

export const getMoonInOrbitVelocity = (options: {
  currentMoonPosition: position;
  neighbourMoonPositions: Array<position>;
  currentMoonVelocity: velocity;
}) => {
  const {
    currentMoonPosition,
    neighbourMoonPositions,
    currentMoonVelocity,
  } = options;

  let updatedVelocity = currentMoonVelocity;
  for (var i = 0; i < neighbourMoonPositions.length; i++) {
    updatedVelocity = getVelocityByApplyingGravity({
      currentMoonPosition: currentMoonPosition,
      adjacentMoonPosition: neighbourMoonPositions[i],
      currentVelocity: updatedVelocity,
    });
  }

  return updatedVelocity;
};
