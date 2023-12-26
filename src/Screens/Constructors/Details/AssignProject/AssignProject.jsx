import React from "react";

// components
import Topbar from "../../../../Components/Topbar/Topbar";
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import AssignProjectTable from "../../../../Components/Tables/AssignProjectTable";

// data
import { data } from "./data";

const AssignProject = () => {
  return (
    <div>
      <Topbar heading="Page précédente" />
      <Sidebar />
      <div className="container">
        <h2 className="margin__bottom__50">Attribuer un projet</h2>
        <AssignProjectTable data={data} />
      </div>
    </div>
  );
};

export default AssignProject;
