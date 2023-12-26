import React from "react";

// components
import Topbar from "../../Components/Topbar/Topbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import ClientsListing from "../../Components/Clients/ClientsListing";

const Clients = () => {
  return (
    <div>
      <Topbar heading="Clients" />
      <Sidebar />
      <div className="container">
        <ClientsListing />
      </div>
    </div>
  );
};

export default Clients;
