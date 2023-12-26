import React, { useState } from "react";

// components
import ProjectsTable from "../Tables/ProjectsTable";
import CommantriesModal from "../Modals/CommantriesModal";
import ProjectDetailsModal from "../Modals/ProjectDetailsModal";
import Pagination from "../Pagination/Pagination";

// firebase
import useProjects from "../../hooks/useProjects";

const ProjectsListing = ({ userName, projectName, status, date }) => {
  const { projects } = useProjects("user_profile");
  const [modal, setModal] = useState(false);
  const [commantriesModal, setCommantriesModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [clientId, setClientId] = useState(null);
  const [projectId, setProjectId] = useState(null);
  const [clientName, setClientName] = useState(null);

  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  const openCommantriesModal = () => {
    setCommantriesModal(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      {modal && (
        <ProjectDetailsModal
          setModal={setModal}
          clientId={clientId}
          projectId={projectId}
        />
      )}
      {commantriesModal && (
        <CommantriesModal
          setModal={setCommantriesModal}
          clientId={clientId}
          projectId={projectId}
          clientName={clientName}
        />
      )}

      {projects.length > 0 && (
        <ProjectsTable
          data={projects}
          openModal={openModal}
          openCommantriesModal={openCommantriesModal}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setClientId={setClientId}
          setProjectId={setProjectId}
          setClientName={setClientName}
          userName={userName}
          projectName={projectName}
          status={status}
          date={date}
        />
      )}
      {projects.length > 5 && !userName && !projectName && !status && !date && (
        <Pagination
          data={projects}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default ProjectsListing;
