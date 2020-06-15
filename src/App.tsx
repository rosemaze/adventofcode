import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { simulateUniverseForSteps } from "./helpers/simulateUniverseForSteps";
// import { getTotalMoonsEnergy } from "./helpers/getTotalMoonsEnergy";
import {
  MOON_POSITIONS_EXAMPLE_1,
  // MOON_POSITIONS_EXAMPLE_2,
  // MOON_POSITIONS_PUZZLE_INPUT,
} from "./App.constants";
// import { simulateUniverseUntilRepeatByAxis } from "./helpers2/simulateUniverseUntilRepeatByAxis";
import { simulateImaginaryUniverseByAxisForSteps } from "./helpers4/simulateImaginaryUniverseByAxisForSteps";
import { simulateUniverseByAxisForSteps } from "./helpers3/simulateUniverseByAxisForSteps";
import { getImaginaryMoon } from "./helpers4/getImaginaryMoon";
import { getRealOrbitAxisPattern } from "./helpers4/getRealOrbitAxisPattern";

const App = () => {
  let initialPositions = [...MOON_POSITIONS_EXAMPLE_1];

  // Part 1
  /*const result = simulateUniverseForSteps({
    steps: 1000,
    initialPositions,
  });

  console.log(
    "Answer to Part 1",
    getTotalMoonsEnergy({
      moonPositions: result.finalPositions,
      moonVelocities: result.finalVelocities,
    })
  );
  */

  // Part 2
  /*
  const result = simulateUniverseUntilRepeatByAxis({
    initialPositionsInOneAxis: [
      initialPositions[0].x,
      initialPositions[1].x,
      initialPositions[2].x,
      initialPositions[3].x,
    ],
  });
  */

  // TEST

  const testX = getRealOrbitAxisPattern({
    initialPositionsInOneAxis: [
      initialPositions[0].x,
      initialPositions[1].x,
      initialPositions[2].x,
      initialPositions[3].x,
    ],
  });
  const testY = getRealOrbitAxisPattern({
    initialPositionsInOneAxis: [
      initialPositions[0].y,
      initialPositions[1].y,
      initialPositions[2].y,
      initialPositions[3].y,
    ],
  });
  const testZ = getRealOrbitAxisPattern({
    initialPositionsInOneAxis: [
      initialPositions[0].z,
      initialPositions[1].z,
      initialPositions[2].z,
      initialPositions[3].z,
    ],
  });
  console.log({ testX, testY, testZ });

  /*const test = simulateUniverseByAxisForSteps({
    steps: 2772,
    initialPositionsInOneAxis: [
      initialPositions[0].y,
      initialPositions[1].y,
      initialPositions[2].y,
      initialPositions[3].y,
    ],
  });*/

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
