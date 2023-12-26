import React from "react";
import { Bar } from "react-chartjs-2";
import useClients from "../../hooks/useClients";
import useUsers from "../../hooks/useUsers";
import useConstructors from "../../hooks/useConstructors";
import useProjects from "../../hooks/useProjects";
import useCount from "../../hooks/useCount";
import { BarChartData } from "./barChartData";

const BarChart = () => {
  const { pendingProjects, activeProjects, reviewdProjects } =
    useCount("user_profile");

  const barData = {
    labels: ["tous les projets"],
    datasets: [
      {
        label: "Projets en attente ",
        data: [pendingProjects, activeProjects, reviewdProjects],
        borderColor: ["#E2C05A", "#E2C05A"],
        backgroundColor: ["#E2C05A", "#E2C05A"],
      },
      {
        label: "Projets actifs",
        data: [activeProjects],
        borderColor: ["#D6EED4", "#D6EED4"],
        backgroundColor: ["#D6EED4", "#D6EED4"],
      },
      {
        label: "Projets examinés",
        data: [reviewdProjects],
        borderColor: ["#E8D8F8", "#E8D8F8"],
        backgroundColor: ["#E8D8F8", "#E8D8F8"],
      },
    ],
  };
  return <Bar data={barData} />;
};

export default BarChart;
