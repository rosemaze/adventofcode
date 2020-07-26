import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { simulateUniverseForSteps } from "./helpers/simulateUniverseForSteps";
import {
  // MOON_POSITIONS_EXAMPLE_1,
  // MOON_POSITIONS_EXAMPLE_2,
  MOON_POSITIONS_PUZZLE_INPUT,
} from "./App.constants";
import { simulateUniverseUntilRepeatByAxis } from "./helpers2/simulateUniverseUntilRepeatByAxis";
import { simulateImaginaryUniverseByAxisForSteps } from "./helpers4/simulateImaginaryUniverseByAxisForSteps";
import { simulateUniverseByAxisForSteps } from "./helpers3/simulateUniverseByAxisForSteps";
import { getImaginaryMoon } from "./helpers4/getImaginaryMoon";
import { getRealOrbitAxisPattern } from "./helpers4/getRealOrbitAxisPattern";
import { lcm } from "mathjs";
import { getTotalMoonsEnergy } from "./helpers/getTotalMoonsEnergy";

const App = () => {
  const [answer1, setAnswer1] = React.useState(0);
  const [answer2, setAnswer2] = React.useState(0);

  let initialPositions = [...MOON_POSITIONS_PUZZLE_INPUT];

  const runPart1 = React.useCallback(() => {
    const result = simulateUniverseForSteps({
      steps: 1000,
      initialPositions,
    });

    const answer = getTotalMoonsEnergy({
      moonPositions: result.finalPositions,
      moonVelocities: result.finalVelocities,
    });

    setAnswer1(answer);
  }, [setAnswer1, answer1]);

  const runPart2 = React.useCallback(() => {
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
    const lcm1 = lcm(
      testX.positionPattern.length,
      testY.positionPattern.length
    );
    const lcm2 = lcm(lcm1, testZ.positionPattern.length);

    setAnswer2(lcm2);
  }, [setAnswer2, answer2]);

  return (
    <div className="App">
      <h1>Advent of Code - Day 12</h1>
      <h2>The N-body Problem</h2>
      <a href="https://adventofcode.com/2019/day/12">View question</a>
      <h2>Part 1</h2>
      <button onClick={runPart1}>Run Part 1</button>
      <div>
        x:<input type="text" value={14}></input>
        y:<input type="text" value={2}></input>
        z:<input type="text" value={8}></input>
      </div>
      <div>
        x:<input type="text" value={7}></input>
        y:<input type="text" value={4}></input>
        z:<input type="text" value={10}></input>
      </div>
      <div>
        x:<input type="text" value={1}></input>
        y:<input type="text" value={17}></input>
        z:<input type="text" value={16}></input>
      </div>
      <div>
        x:<input type="text" value={-4}></input>
        y:<input type="text" value={-1}></input>
        z:<input type="text" value={1}></input>
      </div>
      <h2>Solution to Part 1</h2>
      <div>{answer1}</div>
      <h2>Part 2</h2>
      <button onClick={runPart2}>Run Part 2</button>
      <h2>Solution to Part 2</h2>
      <div>{answer2}</div>
    </div>
  );
};

export default App;
