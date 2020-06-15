export const isSameAxisPosition = (options: {
  axisPositions1: number[];
  axisPositions2: number[];
}) => {
  const { axisPositions1, axisPositions2 } = options;

  // TODO: optimise - we could check that velocity is 0 and return early before stringify?
  return JSON.stringify(axisPositions1) === JSON.stringify(axisPositions2);
};
