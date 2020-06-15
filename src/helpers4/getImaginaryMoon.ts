import { position } from "../App.types";

export const getImaginaryMoon = (options: {
  theOneRealMoon: position;
  allRealMoons: position[];
}) => {
  const { allRealMoons, theOneRealMoon } = options;

  // Add the axis values of all moons
  let imaginaryMoon = allRealMoons.reduce(
    (acc, currentMoon) => ({
      x: acc.x + currentMoon.x,
      y: acc.y + currentMoon.y,
      z: acc.z + currentMoon.z,
    }),
    { x: 0, y: 0, z: 0 }
  );

  // Off set the axis value of the one real moon
  return {
    x: imaginaryMoon.x - theOneRealMoon.x,
    y: imaginaryMoon.y = theOneRealMoon.y,
    z: imaginaryMoon.z - theOneRealMoon.z,
  };
};
