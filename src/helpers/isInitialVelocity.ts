import { velocity } from "../App.types";
import { getAxisVelocity } from "./getAxisVelocity";

export const isInitialVelocity = (velocities: velocity[]) =>
  velocities.every(
    (velocity) => velocity.x === 0 && velocity.y === 0 && velocity.z === 0
  );
