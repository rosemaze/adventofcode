import { getChangeInVelocity } from "../helpers3/getChangeInVelocity";
import { isSameAxisPosition } from "../helpers2/isSameAxisPosition";
import { isInitialAxisVelocity } from "../helpers2/isInitialAxisVelocity";
import { position } from "../App.types";
import { INITIAL_MOON_VELOCITIES } from "../App.constants";
import { getNeighbourMoonPositionsInOneAxis } from "../helpers2/getNeighbourMoonPositionsInOneAxis";
import { getMoonInOrbitVelocity } from "../helpers/getMoonInOrbitVelocity";

/***
 *
 * Calculate the position of all moons in one axis (x, y or z)
 *
 **/

export const getRealOrbitAxisPattern = (options: {
  initialPositionsInOneAxis: number[];
}) => {
  const { initialPositionsInOneAxis } = options;

  let axisPositions = [...initialPositionsInOneAxis];
  let axisVelocities = [0, 0, 0, 0];
  let isFoundSamePositionAndVelocity = false;
  const positionPattern = [];
  const velocityPattern = [];

  while (!isFoundSamePositionAndVelocity) {
    // We need to calculate all the moons before setting the new positions, so use a new array
    const newAxisPositions = [];
    const newAxisVelocities = [];

    for (var i = 0; i < axisPositions.length; i++) {
      const neighbourMoonAxisPositions = getNeighbourMoonPositionsInOneAxis({
        currentMoonIndex: i,
        moonPositions: axisPositions,
      });

      const newAxisVelocity =
        axisVelocities[i] +
        getChangeInVelocity(axisPositions[i], neighbourMoonAxisPositions[0]) +
        getChangeInVelocity(axisPositions[i], neighbourMoonAxisPositions[1]) +
        getChangeInVelocity(axisPositions[i], neighbourMoonAxisPositions[2]);

      const newAxisPosition = axisPositions[i] + newAxisVelocity;

      newAxisVelocities[i] = newAxisVelocity;
      newAxisPositions[i] = newAxisPosition;
    }

    if (
      isSameAxisPosition({
        axisPositions1: initialPositionsInOneAxis,
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
