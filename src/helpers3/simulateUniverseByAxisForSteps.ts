import { getNeighbourMoonPositionsInOneAxis } from "../helpers2/getNeighbourMoonPositionsInOneAxis";
import { getChangeInVelocity } from "./getChangeInVelocity";

/***
 *
 * Calculate the position of all moons in one axis (x, y or z)
 *
 **/
export const simulateUniverseByAxisForSteps = (options: {
  initialPositionsInOneAxis: number[];
  steps: number;
}) => {
  const { initialPositionsInOneAxis, steps } = options;

  let axisPositions = [...initialPositionsInOneAxis];
  let axisVelocities = [0, 0, 0, 0];
  let lastAxisPositions = [...initialPositionsInOneAxis];

  for (let j = 0; j < steps; j++) {
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
    lastAxisPositions = [...axisPositions];

    // Update all moons positions at once for the next step
    axisPositions = [...newAxisPositions];
    axisVelocities = [...newAxisVelocities];
    console.log("v", axisVelocities);
    console.log("p", axisPositions);
  }

  return {
    finalPositions: axisPositions,
    finalVelocities: axisVelocities,
  };
};
