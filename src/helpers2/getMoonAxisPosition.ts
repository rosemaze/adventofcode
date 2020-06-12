import { position, velocity } from "../App.types";

export const getMoonAxisPosition = (options: {
  axisPosition: number;
  axisVelocity: number;
}): number => options.axisPosition + options.axisVelocity;
