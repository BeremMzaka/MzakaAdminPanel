import React from "react";

import useProjects from "../../hooks/useProjects";

export const BarChartData = () => {
  const { projects } = useProjects("user_profile");
  let DataArray = [];
  let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let examinArry = [];
  let activeArry = [];
  let finalArry = [];
  let activeP=[]
  const Match = () => {
    months.map((m) => {
       activeP = projects.filter((e) => {
        if (
          new Date(
            (e.project.date_time || e.project.createdAt).toDate()
          ).getMonth() === m &&
          e.project.project_status === "examine"
        ) {
            examinArry.push(activeP);
        }else if(   new Date(
            (e.project.date_time || e.project.createdAt).toDate()
          ).getMonth() === m &&
          e.project.project_status === "completed"){
            finalArry.push(activeP);
          }else if(   new Date(
            (e.project.date_time || e.project.createdAt).toDate()
          ).getMonth() === m &&
          e.project.project_status === "active"){
            activeArry.push(activeP);
          }



      });
    });
  };
  Match();
  const Data = () => {
    finalArry.map((m) => {
      DataArray.push(m.length);
    });
  };
  Data();
  return DataArray;
};
