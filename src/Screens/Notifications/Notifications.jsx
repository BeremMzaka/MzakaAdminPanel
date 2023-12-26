import React from "react";

// components
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import SendNotification from "../../Components/Notifications/SendNotification";

const Notifications = () => {
  return (
    <div>
      <Topbar heading="Notifications" />
      <Sidebar />
      <div className="container">
        <SendNotification />
      </div>
    </div>
  );
};

export default Notifications;
