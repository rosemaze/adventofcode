import { position } from "../App.types";

export const isSamePosition = (options: {
  positions1: position[];
  positions2: position[];
}) => {
  const { positions1, positions2 } = options;

  // TODO: optimise?
  return JSON.stringify(positions1) === JSON.stringify(positions2);
};
