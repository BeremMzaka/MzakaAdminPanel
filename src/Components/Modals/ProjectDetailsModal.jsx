import React, { useState } from "react";
import "./projectdetailsmodal.style.css";

// components
import SelectField2 from "../InputFields/SelectField2";
import InputFIeld from "../InputFields/InputFIeld";
import TextArea from "../InputFields/TextArea";
import Select from "react-select";

// images and svgs
import Add from "../../Assets/SVG/Notifications/add.svg";

// firebase
import useProjectDetails from "../../hooks/useProjectDetail";
import useSelectConstructors from "../../hooks/useSelectConstructors";
import { addConstructorToProject } from "../../API/API";

// data
import { statusOptions } from "../../Data/Data";

const ProjectDetailsModal = ({ setModal, clientId, projectId }) => {
  const { newConstructors, oldConstructors } = useSelectConstructors(
    clientId,
    projectId
  );
  const { projectDetails, clientDetails } = useProjectDetails(
    clientId,
    projectId
  );
  const [selectedConstructors, setSelectedConstructors] = useState([]);

  const closeModal = () => {
    setModal(false);
    document.body.style.overflowY = "auto";
  };

  const handleSelect = (selectedValue) => {
    setSelectedConstructors(selectedValue);
  };

  const handleAddConstructor = () => {
    try {
      addConstructorToProject(
        selectedConstructors,
        clientId,
        projectId,
        projectDetails
      );
      setSelectedConstructors([]);
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="overlay__background" onClick={closeModal}></div>
      <div className="project__details__modal">
        <h1>Détails du projet</h1>
        <div className="project__details__modal__flex">
          <div className="project__details__modal__flex__50percent">
            <h4>Nom du client</h4>
            <InputFIeld type="text" value={clientDetails.first_name} />
          </div>
          <div className="project__details__modal__flex__50percent">
            <h4>Nom du projet</h4>
            <InputFIeld type="text" value={projectDetails.name_of_project} />
          </div>
        </div>
        <div className="project__details__modal__flex">
          <div className="project__details__modal__flex__50percent">
            <h4>L'état du projet</h4>
            <SelectField2
              value={projectDetails.project_status}
              options={statusOptions}
              placeholder="Select"
              color="grey"
            />
          </div>
          <div className="project__details__modal__flex__50percent">
            <h4>Constructeurs</h4>
            <div className="multi__select">
              <Select
                value={selectedConstructors}
                options={newConstructors}
                isMulti
                onChange={handleSelect}
              />
            </div>
          </div>
        </div>
        <div
          className="project__details__modal__flex__100percent__last"
          onClick={handleAddConstructor}
        >
          <img src={Add} alt="add" />
          Ajouter
        </div>
        <div className="project__details__modal__flex">
          <div className="project__details__modal__flex__50percent">
            <h4>Type de bâtiment</h4>
            <InputFIeld type="text" value={projectDetails.type_of_building} />
          </div>
          <div className="project__details__modal__flex__50percent">
            <h4>Nombre de pièces</h4>
            <InputFIeld type="text" value={projectDetails.number_of_pieces} />
          </div>
        </div>

        <div className="project__details__modal__flex">
          <div className="project__details__modal__flex__50percent">
            <h4>Description détaillée du projet</h4>
            <TextArea value={projectDetails.description} color="grey" />
          </div>
          <div className="project__details__modal__flex__50percent">
            <h4>Tous les constructeurs</h4>
            <div className="tags">
              {oldConstructors.map((val, index) => {
                return (
                  <div className="tag" key={index}>
                    {val.value}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsModal;
