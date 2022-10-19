import PassesTable from "./PassesTable";
import { passes } from "../data/PassData.js";
import "../style/PassesTask.css";

const completePasses = passes.filter((obj) => {
  return obj.result === "complete";
});

const longestPass = passes.reduce((biggestPass, pass) =>
  biggestPass.distance > pass.distance ? biggestPass : pass
);

const findPercentage = (partialValue, totalValue) => {
  return (100 * partialValue) / totalValue;
};

const listOfPlayerCompletePercent = passes.reduce((passes, pass) => {
  const { receiver, result } = pass;
  const itemIndex = passes.findIndex((pass) => pass.receiver === receiver);
  if (itemIndex === -1) {
    passes.push({
      receiver,
      passCount: 1,
      passComplete: result === "complete" ? 1 : 0,
      mostCompletePercentage: 0,
    });
  } else {
    if (result === "complete") {
      passes[itemIndex].passComplete += 1;
    }
    passes[itemIndex].passCount += 1;
    passes[itemIndex].mostCompletePercentage = findPercentage(
      passes[itemIndex].passComplete,
      passes[itemIndex].passCount
    );
  }
  return passes;
}, []);

const playerWitBiggestPercent = listOfPlayerCompletePercent.reduce(
  (prev, current) => {
    return prev.mostCompletePercentage > current.mostCompletePercentage
      ? prev
      : current;
  }
);

const longestCompletePass = completePasses.reduce((biggestPass, pass) =>
  biggestPass.distance > pass.distance ? biggestPass : pass
);

function PassesTask() {
  return (
    <div className="passesTaskContainer">
      <PassesTable />
      <div className="resultsContainer">
        <h3>Longest pass:</h3>
        <div>
          {longestPass.receiver}: {longestPass.distance}
        </div>
        <h3>Player with most complete received pass percentage:</h3>
        <div>
          {playerWitBiggestPercent.receiver}:{" "}
          {playerWitBiggestPercent.mostCompletePercentage}% complete passes.
        </div>
        <h3>Longest complete pass:</h3>
        <div>
          {longestCompletePass.receiver}: {longestCompletePass.distance}
        </div>
      </div>
    </div>
  );
}

export default PassesTask;
