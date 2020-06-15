import { INITIAL_MOON_VELOCITIES } from "../App.constants";
import { position } from "../App.types";
import { getNeighbourMoonPositions } from "./getNeighbourMoonPositions";
import { getMoonInOrbitVelocity } from "./getMoonInOrbitVelocity";
import { getMoonPositionByApplyingVelocity } from "./getMoonPositionByApplyingVelocity";
import { isSamePosition } from "./isSamePosition";

export const simulateUniverseUntilRepeat = (options: {
  initialPositions: Array<position>;
}) => {
  const { initialPositions } = options;

  let positions = [...initialPositions];
  let velocities = [...INITIAL_MOON_VELOCITIES];
  let lastPositions = [...initialPositions];
  let steps = 0;
  let isFoundSamePosition = false;

  while (!isFoundSamePosition || steps < 2773) {
    // We need to calculate all the moons before setting the new positions, so use a new array
    const newPositions = [];
    const newVelocities = [];
    for (var i = 0; i < positions.length; i++) {
      // Get neighbours of current moon
      const neighbourMoonPositions = getNeighbourMoonPositions({
        currentMoonIndex: i,
        moonPositions: positions,
      });

      const velocity = getMoonInOrbitVelocity({
        currentMoonPosition: positions[i],
        neighbourMoonPositions,
        currentMoonVelocity: velocities[i],
      });

      const position = getMoonPositionByApplyingVelocity({
        moonPosition: positions[i],
        moonVelocity: velocity,
      });

      newVelocities[i] = velocity;
      newPositions[i] = position;
    }
    lastPositions = [...positions];

    if (
      isSamePosition({
        positions1: initialPositions,
        positions2: newPositions,
      })
    ) {
      isFoundSamePosition = true;
      console.log(
        "Same position at",
        steps,
        ...newPositions,
        "velocities",
        velocities
      );
    }

    // Update all moons positions at once for the next step
    positions = [...newPositions];
    velocities = [...newVelocities];
    steps++;
    // console.log("v", steps, velocities);
    // console.log("p", positions);
  }

  return {
    finalPositions: positions,
    finalVelocities: velocities,
  };
};
