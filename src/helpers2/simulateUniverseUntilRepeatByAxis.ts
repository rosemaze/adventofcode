import { getNeighbourMoonPositionsInOneAxis } from "./getNeighbourMoonPositionsInOneAxis";
import { isSameAxisPosition } from "./isSameAxisPosition";
import { isInitialAxisVelocity } from "./isInitialAxisVelocity";
import { getChangeInVelocity } from "../helpers3/getChangeInVelocity";

/***
 *
 * Calculate the position of all moons in one axis (x, y or z)
 *
 **/
export const simulateUniverseUntilRepeatByAxis = (options: {
  initialPositionsInOneAxis: number[];
}) => {
  const { initialPositionsInOneAxis } = options;

  let axisPositions = [...initialPositionsInOneAxis];
  let axisVelocities = [0, 0, 0, 0];
  // let lastAxisPositions = [...initialPositionsInOneAxis];
  let steps = 0;
  let isFoundSamePosition = false;

  while (!isFoundSamePosition) {
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
    // lastAxisPositions = [...axisPositions];

    if (
      isSameAxisPosition({
        axisPositions1: initialPositionsInOneAxis,
        axisPositions2: newAxisPositions,
      }) &&
      isInitialAxisVelocity(newAxisVelocities)
    ) {
      isFoundSamePosition = true;
      console.log(
        "Same position at",
        steps,
        ...newAxisPositions,
        "velocities",
        newAxisVelocities
      );
    }

    // Update all moons positions at once for the next step
    axisPositions = [...newAxisPositions];
    axisVelocities = [...newAxisVelocities];
    steps++;
    // console.log("v", steps, axisVelocities);
    // console.log("p", axisPositions);
  }

  return {
    finalPositions: axisPositions,
    finalVelocities: axisVelocities,
  };
};
