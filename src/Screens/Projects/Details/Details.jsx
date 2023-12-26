import React from "react";

// components
import Sidebar from "../../../Components/Sidebar/Sidebar";
import Topbar from "../../../Components/Topbar/Topbar";
import ProjectDetails from "../../../Components/Projects/Details/ProjectDetails";

const Details = () => {
  return (
    <div>
      <Topbar heading="Page précédente" />
      <Sidebar />
      <div className="container">
        <ProjectDetails />
      </div>
    </div>
  );
};

export default Details;
