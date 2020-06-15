export const isInitialAxisVelocity = (axisVelocities: number[]) =>
  axisVelocities.every((velocity) => velocity === 0);
