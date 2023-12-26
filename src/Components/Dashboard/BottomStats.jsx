import React from "react";
import "./bottomstats.style.css";

// components
import BarChart from "./BarChart";

// icon
import Icon4 from "../../Assets/SVG/Dashboard/icon-4.svg";
import Icon5 from "../../Assets/SVG/Dashboard/icon-5.svg";

// firebase
import useCount from "../../hooks/useCount";

const BottomStats = () => {
  const { clients, constructors } = useCount("user_profile");
  return (
    <div className="bottom__stats">
      <div className="left__side">
        <BarChart />
      </div>
      <div className="right__side">
        <div className="inner__box">
          <div className="icon icon__4">
            <img src={Icon4} alt="icon4" />
          </div>
          <div className="data">
            <h2>Nombre total de clients</h2>
            <h1>{clients ? clients : 0} clients</h1>
          </div>
        </div>
        <div className="inner__box">
          <div className="icon icon__5">
            <img src={Icon5} alt="icon5" />
          </div>
          <div className="data">
            <h2>Nombre total de constructeurs</h2>
            <h1>{constructors ? constructors : 0} constructeurs</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomStats;
