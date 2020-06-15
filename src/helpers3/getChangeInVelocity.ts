export const getChangeInVelocity = (
  currentPosition: number,
  adjacentPosition: number
) =>
  currentPosition > adjacentPosition
    ? -1
    : currentPosition === adjacentPosition
    ? 0
    : 1;
