import React from "react";
import { Line } from "react-chartjs-2";
import{LineChartData} from "./lineChartData"
import useProjects from "../../hooks/useProjects";

const LineChart = () => {


  const data = {
    labels: [
      "Jan",
      "Feb",
      "March",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "tous les projets en 2021",
        data: LineChartData(),
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
