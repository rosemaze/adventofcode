import { INITIAL_MOON_VELOCITIES } from "../App.constants";
import { position } from "../App.types";
import { getNeighbourMoonPositions } from "./getNeighbourMoonPositions";
import { getMoonInOrbitVelocity } from "./getMoonInOrbitVelocity";
import { getMoonPositionByApplyingVelocity } from "./getMoonPositionByApplyingVelocity";

export const getAllMoonsPosVelForSteps = (options: {
  steps: number;
  initialPositions: Array<position>;
}) => {
  const { initialPositions, steps } = options;

  let positions = [...initialPositions];
  const velocities = [...INITIAL_MOON_VELOCITIES];

  for (var j = 0; j < steps; j++) {
    // We need to calculate all the moons before setting the new positions, so use a new array
    const newPositions = [];
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

      velocities[i] = velocity;
      newPositions[i] = position;
    }
    // Update all moons positions at once for the next step
    positions = [...newPositions];
    console.log("v", velocities);
    console.log("p", positions);
  }

  return {
    finalPositions: positions,
    finalVelocities: velocities,
  };
};
