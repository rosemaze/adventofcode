import { getAxisVelocity } from "../helpers/getAxisVelocity";

export const getMoonInOrbitAxisVelocity = (options: {
  currentAxisPosition: number;
  neighbourAxisPositions: Array<number>;
  currentAxisVelocity: number;
}) => {
  const {
    currentAxisPosition,
    neighbourAxisPositions,
    currentAxisVelocity,
  } = options;

  let updatedVelocity = currentAxisVelocity;
  for (var i = 0; i < neighbourAxisPositions.length; i++) {
    updatedVelocity = getAxisVelocity({
      currentAxisPosition,
      adjacentAxisPosition: neighbourAxisPositions[i],
      currentAxisVelocity,
    });
  }

  return updatedVelocity;
};
