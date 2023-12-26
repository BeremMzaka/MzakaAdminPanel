import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./profilemodal.style.css";

// firebase
import { RecyclebinDelete } from "../../API/API";

const DeleteModal = ({ setModal, selectedUser }) => {
  const { userId } = useParams();

  const closeModal = () => {
    setModal(false);
    document.body.style.overflowY = "auto";
  };

  const handleSubmit = async (userId, selectedUser) => {
    await RecyclebinDelete(selectedUser);
    closeModal();
  };

  return (
    <>
      <div className="overlay__background" onClick={closeModal}></div>
      <div className="profile__modal">
        <h1>Alerte</h1>
        <div className="select__area">
          <h4>Es-tu sûr d'effacer</h4>
        </div>
        <button
          className="submit"
          onClick={() => handleSubmit(userId, selectedUser)}
        >
          d'accord
        </button>
        <button className="danger" onClick={closeModal}>
          Annuler
        </button>
      </div>
    </>
  );
};

export default DeleteModal;
