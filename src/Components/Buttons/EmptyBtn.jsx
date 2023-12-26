import React from "react";
import "./emptybtn.style.css";

const EmptyBtn = ({ size, title, handleClick }) => {
  return (
    <button className={`emptyBtn ${size}`} onClick={handleClick}>
      {title}
    </button>
  );
};

export default EmptyBtn;
