import { getChangeInVelocity } from "../helpers3/getChangeInVelocity";

/***
 *
 * Calculate the position of all moons in one axis (x, y or z)
 *
 **/

export const simulateImaginaryUniverseByAxisForSteps = (options: {
  realMoonAxisPosition: number;
  imaginaryMoonAxisPosition: number;
  steps: number;
}) => {
  const { realMoonAxisPosition, imaginaryMoonAxisPosition, steps } = options;

  let axisPositions = [realMoonAxisPosition, imaginaryMoonAxisPosition];
  let axisVelocities = [0, 0];
  let lastAxisPositions = [realMoonAxisPosition, imaginaryMoonAxisPosition];

  for (let j = 0; j < steps; j++) {
    // We need to calculate all the moons before setting the new positions, so use a new array
    const newAxisPositions = [];
    const newAxisVelocities = [];
    for (var i = 0; i < axisPositions.length; i++) {
      // Only two moons either one or the other
      const neighbourMoonAxisPosition =
        i === 0 ? axisPositions[1] : axisPositions[0];

      const newAxisVelocity =
        axisVelocities[i] +
        getChangeInVelocity(axisPositions[i], neighbourMoonAxisPosition);

      const newAxisPosition = axisPositions[i] + newAxisVelocity;

      newAxisVelocities[i] = newAxisVelocity;
      newAxisPositions[i] = newAxisPosition;
    }
    lastAxisPositions = [...axisPositions];

    // Update all moons positions at once for the next step
    axisPositions = [...newAxisPositions];
    axisVelocities = [...newAxisVelocities];

    console.log("v", j, axisVelocities);
    console.log("p", axisPositions);
  }

  return {
    finalPositions: axisPositions,
    finalVelocities: axisVelocities,
  };
};
