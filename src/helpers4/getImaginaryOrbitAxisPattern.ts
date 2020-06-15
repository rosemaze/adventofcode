import { getChangeInVelocity } from "../helpers3/getChangeInVelocity";
import { isSameAxisPosition } from "../helpers2/isSameAxisPosition";
import { isInitialAxisVelocity } from "../helpers2/isInitialAxisVelocity";

/***
 *
 * Calculate the position of all moons in one axis (x, y or z)
 *
 **/

export const getImaginaryOrbitAxisPattern = (options: {
  realMoonAxisPosition: number;
  imaginaryMoonAxisPosition: number;
}) => {
  const { realMoonAxisPosition, imaginaryMoonAxisPosition } = options;

  let axisPositions = [realMoonAxisPosition, imaginaryMoonAxisPosition];
  let axisVelocities = [0, 0];
  let initialPositions = [realMoonAxisPosition, imaginaryMoonAxisPosition];
  let isFoundSamePositionAndVelocity = false;
  const positionPattern = [];
  const velocityPattern = [];

  while (!isFoundSamePositionAndVelocity) {
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

    if (
      isSameAxisPosition({
        axisPositions1: initialPositions,
        axisPositions2: newAxisPositions,
      }) &&
      isInitialAxisVelocity(newAxisVelocities)
    ) {
      isFoundSamePositionAndVelocity = true;
    }

    // Update all moons positions at once for the next step
    axisPositions = [...newAxisPositions];
    axisVelocities = [...newAxisVelocities];
    // Store current axis and velocitiy values
    positionPattern.push(newAxisPositions);
    velocityPattern.push(newAxisVelocities);

    console.log("v", i, axisVelocities);
    console.log("p", axisPositions);
  }

  return {
    positionPattern,
    velocityPattern,
  };
};
