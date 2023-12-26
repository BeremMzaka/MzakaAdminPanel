import React from "react";
import "./selectfiled.style.css";

const SelectField2 = ({ options, placeholder, value, handleChange, color }) => {
  return (
    <select
      value={value}
      onChange={handleChange}
      name="status"
      className={`select__field__area ${color}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </select>
  );
};

export default SelectField2;
