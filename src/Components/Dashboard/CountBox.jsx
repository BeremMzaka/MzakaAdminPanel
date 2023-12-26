import React from "react";
import "./countbox.style.css";
 
// svg and icons
import Icon1 from "../../Assets/SVG/Dashboard/icon-1.svg";
import Icon2 from "../../Assets/SVG/Dashboard/icon-2.svg";
import Icon3 from "../../Assets/SVG/Dashboard/icon-3.svg";

// firebase
import useCount from "../../hooks/useCount";

const CountBox = () => {
  const { pendingProjects, activeProjects, reviewdProjects } =
    useCount("user_profile");
  return (
    <div className="count__box">
      <div className="inner__box">
        <div className="icon icon__1">
          <img src={Icon1} alt="icon1" />
        </div>
        <div className="data">
          <h2>Projets en attente</h2>
          <h1>{pendingProjects}</h1>
        </div>
      </div>
      <div className="vertical__line"></div>
      <div className="inner__box">
        <div className="icon icon__2">
          <img src={Icon2} alt="icon2" />
        </div>
        <div className="data">
          <h2>Projets actifs</h2>
          <h1>{activeProjects}</h1>
        </div>
      </div>
      <div className="vertical__line"></div>
      <div className="inner__box">
        <div className="icon icon__3">
          <img src={Icon3} alt="icon3" />
        </div>
        <div className="data">
          <h2>Projets examinés</h2>
          <h1>{reviewdProjects}</h1>
        </div>
      </div>
    </div>
  );
};

export default CountBox;
