import React from "react";

// components
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import CountBox from "../../Components/Dashboard/CountBox";
import LineChart from "../../Components/Dashboard/LineChart";
import BottomStats from "../../Components/Dashboard/BottomStats";

const Dashboard = () => {
  return (
    <div>
      <Topbar heading="Tableau de bord" />
      <Sidebar />
      <div className="container">
        <CountBox />
        <LineChart />
        <BottomStats />
      </div>
    </div>
  );
};

export default Dashboard;
