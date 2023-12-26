import React from "react";

// components
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ConstructorsListing from "../../Components/Constructors/ConstructorsListing";

const Constructors = () => {
  return (
    <div>
      <Topbar heading="Constructeurs" />
      <Sidebar />
      <div className="container">
        <ConstructorsListing />
      </div>
    </div>
  );
};

export default Constructors;
