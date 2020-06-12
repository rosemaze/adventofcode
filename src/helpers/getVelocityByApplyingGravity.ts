import { position, velocity } from "../App.types";
import { getAxisVelocity } from "./getAxisVelocity";

export const getVelocityByApplyingGravity = (options: {
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
    x: getAxisVelocity({
      currentAxisPosition: currentMoonPosition.x,
      adjacentAxisPosition: adjacentMoonPosition.x,
      currentAxisVelocity: currentVelocity.x,
    }),
    y: getAxisVelocity({
      currentAxisPosition: currentMoonPosition.y,
      adjacentAxisPosition: adjacentMoonPosition.y,
      currentAxisVelocity: currentVelocity.y,
    }),
    z: getAxisVelocity({
      currentAxisPosition: currentMoonPosition.z,
      adjacentAxisPosition: adjacentMoonPosition.z,
      currentAxisVelocity: currentVelocity.z,
    }),
  };
};
