import React from "react";

// components
import Topbar from "../../../Components/Topbar/Topbar";
import Sidebar from "../../../Components/Sidebar/Sidebar";
import DetailedProfile from "../../../Components/Clients/Details/DetailedProfile";

const ClientDetails = () => {
  return (
    <div>
      <Topbar heading="Page précédente" />
      <Sidebar />
      <div className="container">
        <DetailedProfile />
      </div>
    </div>
  );
};

export default ClientDetails;
