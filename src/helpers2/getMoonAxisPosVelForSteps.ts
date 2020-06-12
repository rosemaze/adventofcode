import { getNeighbourMoonPositionsInOneAxis } from "./getNeighbourMoonPositionsInOneAxis";
import { getMoonInOrbitAxisVelocity } from "./getMoonInOrbitAxisVelocity";
/***
 *
 * Calculate the position of all moons in one axis (x, y or z)
 *
 **/
export const getAllMoonsAxisPosVelForSteps = (options: {
  initialPositionsInOneAxis: number[];
}) => {
  const { initialPositionsInOneAxis } = options;

  let axisPositions = [...initialPositionsInOneAxis];
  const axisVelocities = [0, 0, 0, 0];
  let lastAxisPositions = [...initialPositionsInOneAxis];
  let steps = 0;
  let isFoundSamePosition = false;

  for (var j = 0; j < steps; j++) {
    // We need to calculate all the moons before setting the new positions, so use a new array
    const newAxisPositions = [];
    for (var i = 0; i < axisPositions.length; i++) {
      const neighbourMoonAxisPositions = getNeighbourMoonPositionsInOneAxis({
        currentMoonIndex: i,
        moonPositions: axisPositions,
      });

      const axisVelocity = getMoonInOrbitAxisVelocity({
        currentAxisPosition: axisPositions[i],
        neighbourAxisPositions: neighbourMoonAxisPositions,
        currentAxisVelocity: axisVelocities[i],
      });

      const axisPosition = axisPositions[i] + axisVelocity;

      axisVelocities[i] = axisVelocity;
      newAxisPositions[i] = axisPosition;
    }
    // Update all moons positions at once for the next step
    axisPositions = [...newAxisPositions];
    console.log("v", axisVelocities);
    console.log("p", axisPositions);
  }

  return {
    finalPositions: axisPositions,
    finalVelocities: axisVelocities,
  };
};
