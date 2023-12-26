import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./profilemodal.style.css";

// firebase
import { updateProjectStatus } from "../../API/API";

const ProfileModal = ({ setModal, selectedProject, userType }) => {
  const [status, setStatus] = useState("");
  const { userId } = useParams();

  
  const closeModal = () => {
    setModal(false);
    document.body.style.overflowY = "auto";
  };

  const handleSubmit = async (userId, projectId, value) => {
    await updateProjectStatus(userId, projectId, value);
    closeModal();
  };

  return (
    <>
      <div className="overlay__background" onClick={closeModal}></div>
      <div className="profile__modal">
        <h1>Ajouter un utilisateur</h1>
        <div className="select__area">
          <h4>L'état du projet</h4>
          <select
            name="status"
            className="select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="" disabled>
            Sélectionnez le statut
            </option>
            <option value="examine">Examiné</option>
            <option value="active">En cours</option>
            <option value="completed">Finalisé</option>
          </select>
        </div>
        <button
          className="submit"
          onClick={() => handleSubmit(userId, selectedProject, status)}
        >
          Mettre à jour
        </button>
      </div>
    </>
  );
};

export default ProfileModal;
