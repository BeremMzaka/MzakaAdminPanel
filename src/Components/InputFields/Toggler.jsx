import React from "react";
import "./toggler.style.css";

const Toggler = ({ handleClick }) => {
  return (
    <label className="switch" forHTML="checkbox">
      <input type="checkbox" id="checkbox" onChange={handleClick} />
      <div className="slider round"></div>
    </label>
  );
};

export default Toggler;
