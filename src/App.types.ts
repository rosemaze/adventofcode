export interface position {
  x: number;
  y: number;
  z: number;
}

export interface velocity {
  x: number;
  y: number;
  z: number;
}

export interface AxisOrbitPattern {
  positionPattern: number[][];
  velocityPattern: number[][];
}
