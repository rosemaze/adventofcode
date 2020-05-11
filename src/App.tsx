import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { updateMoonInOrbitVelocity } from "./helpers/updateMoonInOrbitVelocity";
import { updateMoonPosition } from "./helpers/updateMoonPosition";
import {
  calculateMoonEnergy,
  calculateTotalMoonsEnergy,
} from "./helpers/calculateMoonEnergy";

const App = () => {
  const number1: number = 1;
  const number2: number = 2;

  console.log(number1 + number2);

  /*  let position1 = { x: -1, y: 0, z: 2 };
  let position2 = { x: 2, y: -10, z: -7 };
  let position3 = { x: 4, y: -8, z: 8 };
  let position4 = { x: 3, y: 5, z: -1 }; 
  let position1 = { x: -8, y: -10, z: 0 };
  let position2 = { x: 5, y: 5, z: 10 };
  let position3 = { x: 2, y: -7, z: 3 };
  let position4 = { x: 9, y: -8, z: -3 };*/
  let position1 = { x: 14, y: 2, z: 8 };
  let position2 = { x: 7, y: 4, z: 10 };
  let position3 = { x: 1, y: 17, z: 16 };
  let position4 = { x: -4, y: -1, z: 1 };
  let positions = [position1, position2, position3, position4];

  let velocity1 = { x: 0, y: 0, z: 0 };
  let velocity2 = { x: 0, y: 0, z: 0 };
  let velocity3 = { x: 0, y: 0, z: 0 };
  let velocity4 = { x: 0, y: 0, z: 0 };
  const velocities = [velocity1, velocity2, velocity3, velocity4];

  const adjIndex1 = [1, 2, 3];
  const adjIndex2 = [0, 2, 3];
  const adjIndex3 = [0, 1, 3];
  const adjIndex4 = [0, 1, 2];
  const adjIndex = [adjIndex1, adjIndex2, adjIndex3, adjIndex4];

  for (var j = 0; j < 1000; j++) {
    const newPositions = [];
    for (var i = 0; i < positions.length; i++) {
      const currentMoonPosition = positions[i];

      const currentAdjacentMoonPositions = [
        positions[adjIndex[i][0]],
        positions[adjIndex[i][1]],
        positions[adjIndex[i][2]],
      ];

      const velocity = updateMoonInOrbitVelocity({
        currentMoonPosition: currentMoonPosition,
        adjacentMoonPositions: currentAdjacentMoonPositions,
        velocity: velocities[i],
      });

      const position = updateMoonPosition({
        moonPosition: currentMoonPosition,
        moonVelocity: velocity,
      });

      velocities[i] = velocity;
      newPositions[i] = position;
    }
    positions = [...newPositions];
    console.log("v", velocities);
    console.log("p", positions);
  }

  console.log(
    calculateTotalMoonsEnergy({
      moonPositions: positions,
      moonVelocities: velocities,
    })
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
