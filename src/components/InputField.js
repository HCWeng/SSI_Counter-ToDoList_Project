import React from "react";
import classes from "./InputField.modul.css";

const InputField = ({ value, onChange }) => {
  return (
    <div>
      <input
        className={classes["input-container"]}
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter your to-do item"
      />
    </div>
  );
};
//
export default InputField;
