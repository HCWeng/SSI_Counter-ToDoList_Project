import React from "react";

const InputField = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter your to-do item"
      />
    </div>
  );
};

export default InputField;
