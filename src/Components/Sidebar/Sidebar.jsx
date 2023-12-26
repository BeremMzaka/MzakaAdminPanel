import React from "react";

// style
import "./sidebar.style.css";

// data
import { sideBarData } from "./data";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        {sideBarData.map((data) => {
          return (
            <li key={data.id}>
              <NavLink exact to={data.path} activeClassName="active">
                <span className="icon">{data.icon}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
