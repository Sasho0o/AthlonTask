import React from "react";
import { CHECKBOX_STATES } from "../interfaces/CheckboxStates";
import "../style/CheckboxTask.css";

export default function CustomCheckbox({ label, value, disabled, showState }) {
  const [checkbox, setCheckbox] = React.useState(
    value ? value : CHECKBOX_STATES.Unchecked
  );

  const handleChange = (checkbox, setCheckbox) => {
    let updatedChecked;

    if (checkbox === CHECKBOX_STATES.Checked) {
      updatedChecked = CHECKBOX_STATES.HalfChecked;
    } else if (checkbox === CHECKBOX_STATES.HalfChecked) {
      updatedChecked = CHECKBOX_STATES.Unchecked;
    } else if (checkbox === CHECKBOX_STATES.Unchecked) {
      updatedChecked = CHECKBOX_STATES.Checked;
    }

    setCheckbox(updatedChecked);
  };

  return (
    <>
      <div className="columnContainer">
        {showState && (
          <div>
            {checkbox} {disabled ? " Disabled" : ""}
          </div>
        )}
        <label
          className={`checkbox 
        ${checkbox === CHECKBOX_STATES.Checked ? "checked " : ""}
        ${checkbox === CHECKBOX_STATES.HalfChecked ? "half-checked " : ""}
        ${disabled ? "disabled " : ""}`}
        >
          {label}
          <input
            type="checkbox"
            checked={checkbox}
            onChange={() => handleChange(checkbox, setCheckbox)}
            disabled={disabled}
          />
        </label>
      </div>
    </>
  );
}
