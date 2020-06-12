export const getAxisVelocity = (options: {
  currentAxisPosition: number;
  adjacentAxisPosition: number;
  currentAxisVelocity: number;
}) => {
  const {
    currentAxisPosition,
    adjacentAxisPosition,
    currentAxisVelocity,
  } = options;

  if (currentAxisPosition > adjacentAxisPosition) {
    return currentAxisVelocity - 1;
  }

  if (currentAxisPosition < adjacentAxisPosition) {
    return currentAxisVelocity + 1;
  }

  return currentAxisVelocity;
};
