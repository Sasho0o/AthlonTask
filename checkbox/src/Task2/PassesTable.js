import { useState } from "react";
import { passes } from "../data/PassData.js";
import "../style/PassesTable.css";

function PassesTable() {
  const [state] = useState(passes);

  return (
    <div className="table">
      <table id="passes">
        <thead>
          <tr key={"header"}>
            {Object.keys(state[0]).map((key) => (
              <th>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {state.map((item) => (
            <tr>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PassesTable;
