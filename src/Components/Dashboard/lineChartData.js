import React from "react";

import useProjects from "../../hooks/useProjects";

export const LineChartData = () => {
  const { projects } = useProjects("user_profile");
  let DataArray = [];
  let months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let middleArra = [];
  const Match = () => {
    months.map((m) => {
      let activeP =
        projects.length > 0 &&
        projects.filter(
          (e) =>
            e.project.date_time ||
            (e.project.createdAt &&
              new Date(
                (e.project.date_time || e.project.createdAt).toDate()
              ).getMonth() === m)
        );
      middleArra.push(activeP);
    });
  };
  Match();
  const Data = () => {
    middleArra.map((m) => {
      DataArray.push(m.length);
    });
  };
  Data();
  return DataArray;
};
