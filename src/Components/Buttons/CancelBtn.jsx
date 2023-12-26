import React from "react";
import "./cancelbtn.style.css";

const CancelBtn = ({ title, handleClick }) => {
  return (
    <button className="cancelBtn" onClick={handleClick}>
      {title}
    </button>
  );
};

export default CancelBtn;
