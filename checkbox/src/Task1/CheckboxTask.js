import React from "react";
import "../style/CheckboxTask.css";
import Checkbox from "../components/CustomCheckbox";
import { CHECKBOX_STATES } from "../interfaces/CheckboxStates";

export default function CheckboxTask() {
  return (
    <>
      <div className="rowContainer">
        <div className="container">
          <h1> Stacked Checkboxes</h1>
          <div className="columnContainer">
            <Checkbox label="Checkbox 1" />
            <Checkbox label="Checkbox 2" />
            <Checkbox label="Checkbox 3" />
          </div>
        </div>
        <div className="container">
          <h1> Inline Checkboxes</h1>
          <div className="rowContainer">
            <Checkbox label="Checkbox 1" />
            <Checkbox label="Checkbox 2" />
            <Checkbox label="Checkbox 3" />
          </div>
        </div>
      </div>
      <div className="rowContainer">
        <Checkbox
          label="Checkbox 1"
          value={CHECKBOX_STATES.Checked}
          showState={true}
        />
        <Checkbox
          label="Checkbox 2"
          value={CHECKBOX_STATES.Checked}
          disabled={true}
          showState={true}
        />
        <Checkbox
          label="Checkbox 3"
          value={CHECKBOX_STATES.Unchecked}
          disabled={true}
          showState={true}
        />
        <Checkbox
          label="Checkbox 4"
          value={CHECKBOX_STATES.HalfChecked}
          showState={true}
        />
        <Checkbox
          label="Checkbox 5"
          value={CHECKBOX_STATES.HalfChecked}
          disabled={true}
          showState={true}
        />
      </div>
    </>
  );
}
