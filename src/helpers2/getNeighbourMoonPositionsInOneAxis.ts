// NOTE: For efficiency's sake this function only handles exactly 4 moons!!!

export const getNeighbourMoonPositionsInOneAxis = (options: {
  currentMoonIndex: number;
  moonPositions: Array<number>;
}): Array<number> => {
  const { currentMoonIndex, moonPositions } = options;

  // Validate - block for optimisation
  /*
  if (currentMoonIndex > 3) {
    throw "Error: getAdjacentMoonPositions: Moon index is larger than number of moons this function handles";
  }

  if (currentMoonIndex < 0) {
    throw "Error: getAdjacentMoonPositions: Moon index is less than 0";
  }

  if (moonPositions.length !== 4) {
    throw "Error: getAdjacentMoonPositions: Too many or too little moon positions";
  }
  */

  // Return adjacent positions
  if (currentMoonIndex === 0) {
    return [moonPositions[1], moonPositions[2], moonPositions[3]];
  }

  if (currentMoonIndex === 1) {
    return [moonPositions[0], moonPositions[2], moonPositions[3]];
  }

  if (currentMoonIndex === 2) {
    return [moonPositions[0], moonPositions[1], moonPositions[3]];
  }

  if (currentMoonIndex === 3) {
    return [moonPositions[0], moonPositions[1], moonPositions[2]];
  }

  return [];
};
