import React from "react";
import { useParams } from "react-router-dom";

// components
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
import DocumentListing from "../../../../Components/Projects/Details/DocumentDetails/DocumentListing";

// firebase
import useFiles from "../../../../hooks/useFiles";

const DocumentDetails = () => {
  const { clientId, projectId } = useParams();
  const { files } = useFiles(clientId, projectId, "File");
  return (
    <div>
      <Topbar heading="Page précédente" />
      <Sidebar />
      <div className="container">
        <DocumentListing data={files} title="Fichiers" fileType="file" />
      </div>
    </div>
  );
};

export default DocumentDetails;
