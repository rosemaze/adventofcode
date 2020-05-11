import { position, velocity } from "../App.types";

export const updateMoonToMoonVelocity = (options: {
  currentMoonPosition: position;
  adjacentMoonPosition: position;
  currentVelocity: velocity;
}): velocity => {
  const {
    currentMoonPosition,
    adjacentMoonPosition,
    currentVelocity,
  } = options;

  return {
    x: updateAxisVelocity({
      currentPosition: currentMoonPosition.x,
      adjacentPosition: adjacentMoonPosition.x,
      currentVelocity: currentVelocity.x,
    }),
    y: updateAxisVelocity({
      currentPosition: currentMoonPosition.y,
      adjacentPosition: adjacentMoonPosition.y,
      currentVelocity: currentVelocity.y,
    }),
    z: updateAxisVelocity({
      currentPosition: currentMoonPosition.z,
      adjacentPosition: adjacentMoonPosition.z,
      currentVelocity: currentVelocity.z,
    }),
  };
};

const updateAxisVelocity = (options: {
  currentPosition: number;
  adjacentPosition: number;
  currentVelocity: number;
}) => {
  const { currentPosition, adjacentPosition, currentVelocity } = options;

  if (currentPosition > adjacentPosition) {
    return currentVelocity - 1;
  }

  if (currentPosition < adjacentPosition) {
    return currentVelocity + 1;
  }

  return currentVelocity;
};
