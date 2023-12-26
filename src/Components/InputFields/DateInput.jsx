import React from "react";
import "./dateinput.style.css";

const DateInput = ({ value, placeholder, handleChange }) => {
  return (
    <input
      className="dateInputField"
      type="date"
      value={value}
      placeholder="mm/dd/yy"
      onChange={handleChange}
    />
  );
};

export default DateInput;
