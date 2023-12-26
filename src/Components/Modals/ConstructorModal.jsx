import React, { useState } from "react";
import "./constructormodal.style.css";

// components
import CancelBtn from "../Buttons/CancelBtn";
import InputFIeld from "../InputFields/InputFIeld";
import FilledBtn from "../Buttons/FilledBtn";

// firebase
import { createConstructor } from "../../API/API";

const ConstructorModal = ({ setModal }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const closeModal = () => {
    setModal(false);
    document.body.style.overflowY = "auto";
  };

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (name, email, password) => {
    if (name && email && password) {
      if (password.length >= 8 && validateEmail(email)) {
        createConstructor(name, email, password);
        closeModal();
        alert("Constructor Created Successfully");
      }
    } else {
      alert("Fill all the fields");
    }
  };

  return (
    <>
      <div className="overlay__background" onClick={closeModal}></div>
      <div className="constructor__modal">
        <h1>Créer un constructeur</h1>
        <div className="select__area">
          <h4>Nom et prénom</h4>
          <InputFIeld
            type="text"
            value={name}
            placeholder="e.g. John Dough"
            handleChange={(e) => setName(e.target.value)}
          />
          <h4>Email</h4>
          <InputFIeld
            type="email"
            value={email}
            placeholder="example@gmail.com"
            handleChange={(e) => setEmail(e.target.value)}
          />
          <h4>Mot de passe</h4>
          <InputFIeld
            type="password"
            value={password}
            placeholder="8+ characters"
            handleChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="btn__group">
          <CancelBtn title="Annuler" handleClick={closeModal} />
          <FilledBtn
            title="Créer un compte"
            size="medium"
            handleClick={() => handleSubmit(name, email, password)}
          />
        </div>
      </div>
    </>
  );
};

export default ConstructorModal;
