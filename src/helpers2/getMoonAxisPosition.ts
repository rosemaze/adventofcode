export const getMoonAxisPosition = (options: {
  axisPosition: number;
  axisVelocity: number;
}): number => options.axisPosition + options.axisVelocity;
