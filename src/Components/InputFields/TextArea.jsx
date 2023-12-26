import React from "react";
import "./textarea.style.css";

const TextArea = ({ value, handleChange, color }) => {
  return (
    <textarea
      name="textarea"
      id="textarea"
      cols="30"
      rows="10"
      value={value}
      onChange={handleChange}
      className={color}
    />
  );
};

export default TextArea;
