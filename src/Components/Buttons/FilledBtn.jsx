import React from "react";
import "./filledbtn.style.css";

const FilledBtn = ({ title, size, handleClick, disabled }) => {
  return (
    <button
      className={`filledBtn ${size}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default FilledBtn;
