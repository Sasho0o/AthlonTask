import React from "react";
import "./style/App.css";
import CheckboxTask from "./Task1/CheckboxTask";
import PassesTask from "./Task2/PassesTask";

export default function App() {
  return (
    <>
      <div className="appContainer">
        <div>
          <h1>Task 1</h1>
          <CheckboxTask />
        </div>
        <div>
          <h1>Task 2</h1>
          <PassesTask />
        </div>
      </div>
    </>
  );
}
