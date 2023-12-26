import React, { useState } from "react";

// components
import Sidebar from "../../Components/Sidebar/Sidebar";
import Topbar from "../../Components/Topbar/Topbar";
import ProjectsListing from "../../Components/Projects/ProjectsListing";
import Filters from "../../Components/Projects/Filters";

const Notifications = () => {
  const [project, setProject] = useState("");
  const [client, setClient] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState("");
  return (
    <div>
      <Topbar heading="Projets" />
      <Sidebar />
      <div className="container">
        <Filters
          setStatus={setStatus}
          setClient={setClient}
          setProject={setProject}
          setDate={setDate}
          project={project}
          client={client}
          status={status}
          date={date}
        />
        <ProjectsListing
          projectName={project}
          userName={client}
          status={status}
          date={date}
        />
      </div>
    </div>
  );
};

export default Notifications;
