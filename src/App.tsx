import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { getAllMoonsPosVelForSteps } from "./helpers/getAllMoonsPosVelForSteps";
import { getTotalMoonsEnergy } from "./helpers/getTotalMoonsEnergy";
import {
  MOON_POSITIONS_EXAMPLE_1,
  // MOON_POSITIONS_EXAMPLE_2,
  // MOON_POSITIONS_PUZZLE_INPUT,
} from "./App.constants";
import { getAllMoonsPosVelForSteps2 } from "./helpers/getAllMoonsPosVelForSteps2";

const App = () => {
  let initialPositions = [...MOON_POSITIONS_EXAMPLE_1];

  // Part 1
  /*const result = getAllMoonsPosVelForSteps({
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
  // TIP: always compare current position N with position N - 2
  const result = getAllMoonsPosVelForSteps2({
    initialPositions,
  });

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
