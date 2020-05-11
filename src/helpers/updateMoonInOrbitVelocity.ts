import { position, velocity } from "../App.types";
import { updateMoonToMoonVelocity } from "../helpers/updateMoonToMoonVelocity";

export const updateMoonInOrbitVelocity = (options: {
  currentMoonPosition: position;
  adjacentMoonPositions: Array<position>;
  velocity: velocity;
}) => {
  const { currentMoonPosition, adjacentMoonPositions, velocity } = options;

  let updatedVelocity = velocity;
  for (var i = 0; i < adjacentMoonPositions.length; i++) {
    updatedVelocity = updateMoonToMoonVelocity({
      currentMoonPosition: currentMoonPosition,
      adjacentMoonPosition: adjacentMoonPositions[i],
      currentVelocity: updatedVelocity,
    });
  }
  return updatedVelocity;
};
