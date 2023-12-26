import React from "react";
import "./databox.style.css";

const DataBox = ({ image, title, count }) => {
  return (
    <div className="project__details__box">
      <img src={image} alt="project__details__icon" />
      <h4>{title}</h4>
      <p>{count} files</p>
    </div>
  );
};

export default DataBox;
