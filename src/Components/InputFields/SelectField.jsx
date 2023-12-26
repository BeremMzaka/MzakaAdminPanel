import React from "react";
import "./selectfiled.style.css";

const SelectField = ({ options, placeholder, value, handleChange, color }) => {
  return (
    <select
      value={value}
      onChange={handleChange}
      name="status"
      className={`select__field__area ${color}`}
    >
      <option defaultValue="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
};

export default SelectField;
