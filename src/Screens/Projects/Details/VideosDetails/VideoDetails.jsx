import React from "react";
import { useParams } from "react-router-dom";

// components
import Sidebar from "../../../../Components/Sidebar/Sidebar";
import Topbar from "../../../../Components/Topbar/Topbar";
import DocumentListing from "../../../../Components/Projects/Details/DocumentDetails/DocumentListing";

// firebase
import useFiles from "../../../../hooks/useFiles";

const VideoDetails = () => {
  const { clientId, projectId } = useParams();
  const { files } = useFiles(clientId, projectId, "Image/Video");
  return (
    <div>
      <Topbar heading="Page précédente" />
      <Sidebar />
      <div className="container">
        <DocumentListing data={files} title="Photos/Videos" fileType="image" />
      </div>
    </div>
  );
};

export default VideoDetails;
