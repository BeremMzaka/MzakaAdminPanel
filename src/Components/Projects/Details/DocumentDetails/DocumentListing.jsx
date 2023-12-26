import React, { useState } from "react";

// components
import DocumentsTable from "../../../Tables/DocumentsTable";
import ProjectDetailsModal from "../../../Modals/ProjectDetailsModal";

const DocumentListing = ({ data, title, fileType }) => {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };
  return (
    <div>
      {modal && <ProjectDetailsModal setModal={setModal} />}
      <h2>
        {title ? title : "No Title"} (
        {data && data.length > 0 ? data.length : 0})
      </h2>
      <DocumentsTable fileType={fileType} data={data} openModal={openModal} />
    </div>
  );
};

export default DocumentListing;
