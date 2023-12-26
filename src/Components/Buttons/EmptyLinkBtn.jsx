import React from "react";
import { Link } from "react-router-dom";
import "./emptylinkbtn.style.css";

const EmptyLinkBtn = ({ path, title, size }) => {
  return (
    <Link className={`emptyLinkBtn ${size}`} to={path}>
      {title}
    </Link>
  );
};

export default EmptyLinkBtn;
