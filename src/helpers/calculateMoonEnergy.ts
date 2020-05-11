import { position, velocity } from "../App.types";

export const calculateTotalMoonsEnergy = (options: {
  moonPositions: Array<position>;
  moonVelocities: Array<velocity>;
}) => {
  const { moonPositions, moonVelocities } = options;

  if (moonPositions.length !== moonVelocities.length) {
    throw "Error, different number of velocities and positions";
  }

  return moonPositions.reduce(
    (accEnergy, curMoonPosition, index) =>
      accEnergy +
      calculateMoonEnergy({
        moonPosition: curMoonPosition,
        moonVelocity: moonVelocities[index],
      }),
    0
  );
};

export const calculateMoonEnergy = (options: {
  moonPosition: position;
  moonVelocity: velocity;
}) => {
  const { moonPosition, moonVelocity } = options;

  return (
    (Math.abs(moonPosition.x) +
      Math.abs(moonPosition.y) +
      Math.abs(moonPosition.z)) *
    (Math.abs(moonVelocity.x) +
      Math.abs(moonVelocity.y) +
      Math.abs(moonVelocity.z))
  );
};
