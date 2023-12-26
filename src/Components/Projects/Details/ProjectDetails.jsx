import React from "react";
import { Link, useParams } from "react-router-dom";
import "./projectdetails.style.css";

// components
import DataBox from "./DataBox";

// firebase
import useFileCount from "../../../hooks/useFileCount";
import useProjectDetails from "../../../hooks/useProjectDetail";

// icons
import Image1 from "../../../Assets/SVG/ProjectDetails/icon1.svg";
import Image2 from "../../../Assets/SVG/ProjectDetails/icon2.svg";
import Image3 from "../../../Assets/SVG/ProjectDetails/icon3.svg";
import Image4 from "../../../Assets/SVG/ProjectDetails/icon4.svg";

const ProjectDetails = () => {
  const { clientId, projectId } = useParams();
  const { documents, photos, plans, files } = useFileCount(clientId, projectId);
  const { projectDetails } = useProjectDetails(clientId, projectId);

  return (
    <div className="projects__details">
      <h2>{projectDetails.name_of_project} Des dossiers</h2>
      <div className="project__details__outer__box">
        <Link
          to={`/project/${clientId}/${projectId}/documents`}
          className="project__details__inner__box"
        >
          <DataBox
            image={Image1}
            title="Documents personnels"
            count={documents}
          />
        </Link>
        <Link
          to={`/project/${clientId}/${projectId}/plans`}
          className="project__details__inner__box"
        >
          <DataBox image={Image2} title="Plans" count={plans} />
        </Link>
        <Link
          to={`/project/${clientId}/${projectId}/videos`}
          className="project__details__inner__box"
        >
          <DataBox image={Image3} title="Photos/Vidéos" count={photos} />
        </Link>
        <Link
          to={`/project/${clientId}/${projectId}/files`}
          className="project__details__inner__box"
        >
          <DataBox image={Image4} title="Fichiers" count={files} />
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetails;
