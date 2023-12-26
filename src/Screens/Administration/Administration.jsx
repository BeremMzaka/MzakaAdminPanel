import React from "react";

// components
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import AdministrationListing from "../../Components/Administration/AdministrationListing";

const Administration = () => {
  return (
    <div>
      <Topbar heading="Sous-administrateurs" />
      <Sidebar />
      <div className="container">
        <AdministrationListing />
      </div>
    </div>
  );
};

export default Administration;
