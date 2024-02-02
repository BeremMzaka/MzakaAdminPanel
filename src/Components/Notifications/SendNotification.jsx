import React, { useState } from "react";
import "./sendnotifiction.style.css";
import CustomAlert from "../CustomAlert/CustomAlert";
// components
import EmptyBtn from "../Buttons/EmptyBtn";
import FilledBtn from "../Buttons/FilledBtn";
import TextArea from "../InputFields/TextArea";
import Toggler from "../InputFields/Toggler";
import NotificationModal from "../Modals/NotificationModal";

// firebase
import { sendNotification, sendEmail } from "../../API/API";

const SendNotification = () => {
  const [modal, setModal] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [msg, setMsg] = useState("");
  const [messageCheck, setMessageCheck] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [textCheck, setTextCheck] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showAlert2, setShowAlert2] = useState(false);

  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  const emptySelectedOptions = () => {
    setSelectedOptions([]);
  };

  const clearFields = () => {
    setSelectedOptions([]);
    setMsg("");
  };

  const handleSubmit = () => {
    if (messageCheck || emailCheck || textCheck) {
      if (messageCheck) {
        if (msg && selectedOptions && selectedOptions.length > 0) {
          try {
            sendNotification(selectedOptions, msg);
            setShowAlert(true); 
            clearFields();
          } catch (error) {
            console.log(error);
          }
        }
      }
    }
  
      if (emailCheck) {
         if (msg && selectedOptions && selectedOptions.length > 0) {
           let emails = [];
           selectedOptions.forEach((option) => {
             emails.push(option.email);
           });
           try {
            sendNotification(selectedOptions, msg);
            setShowAlert2(true);
            clearFields();
           } catch (error) {
             console.log(error);
           }
         }
       }
    }
  

  return (
    <>
      {modal && (
        <NotificationModal
          setModal={setModal}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
        />
      )}
      <div className="notifications">
        <h2>Configurer les conditions de notification</h2>
        <div className="radio__sec">
          <div>
            <div className="radio__flex">
              <h4>Messages dans l'application</h4>
              <Toggler handleClick={() => setMessageCheck(!messageCheck)} />
            </div>
            <p>
              M'avertir des nouveaux messages et des mises à jour des fils de
              discussion
            </p>
          </div>
          <div>
            <div className="radio__flex">
              <h4>E-mail</h4>
              <Toggler handleClick={() => setEmailCheck(!emailCheck)} />
            </div>
            <p>Envoyez-moi des notifications via mon e-mail</p>
          </div>
          <div>
            <div className="radio__flex">
              <h4>Des messages texte</h4>
              <Toggler handleClick={() => setTextCheck(!textCheck)} />
            </div>
            <p>
              M'envoyer des notifications sous forme de sms sur mon téléphone
            </p>
          </div>
        </div>
        <div id="line"></div>
        <div className="comment__sec">
          <div>
            <h2>
              {selectedOptions.length > 0
                ? "Pour séparer les utilisateurs"
                : "Avis général"}
            </h2>
            <div className="text__area">
              <TextArea
                value={msg}
                handleChange={(e) => setMsg(e.target.value)}
              />
            </div>
          </div>
          {selectedOptions.length > 0 && (
            <>
              <div className="selected__people">
                {selectedOptions &&
                  selectedOptions.length > 0 &&
                  selectedOptions.slice(0, 3).map((item, index) => {
                    return <img key={index} src={item.image} alt="profile" />;
                  })}
                {selectedOptions.length > 3 && (
                  <div className="selected__people__circle">
                    +{selectedOptions.length - 3}
                  </div>
                )}
              </div>
              <button className="add__user" onClick={openModal}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="8" fill="#D59344" />
                  <path
                    d="M10.5 7.5H8.5V5.5C8.5 5.36739 8.44732 5.24021 8.35355 5.14645C8.25979 5.05268 8.13261 5 8 5C7.86739 5 7.74021 5.05268 7.64645 5.14645C7.55268 5.24021 7.5 5.36739 7.5 5.5V7.5H5.5C5.36739 7.5 5.24021 7.55268 5.14645 7.64645C5.05268 7.74021 5 7.86739 5 8C5 8.13261 5.05268 8.25979 5.14645 8.35355C5.24021 8.44732 5.36739 8.5 5.5 8.5H7.5V10.5C7.5 10.6326 7.55268 10.7598 7.64645 10.8536C7.74021 10.9473 7.86739 11 8 11C8.13261 11 8.25979 10.9473 8.35355 10.8536C8.44732 10.7598 8.5 10.6326 8.5 10.5V8.5H10.5C10.6326 8.5 10.7598 8.44732 10.8536 8.35355C10.9473 8.25979 11 8.13261 11 8C11 7.86739 10.9473 7.74021 10.8536 7.64645C10.7598 7.55268 10.6326 7.5 10.5 7.5Z"
                    fill="white"
                  />
                </svg>
                Add users
              </button>
            </>
          )}
        </div>
        <div>
  <FilledBtn title="Send" size="large" handleClick={handleSubmit} />
  <EmptyBtn
    title={
      selectedOptions.length > 0
        ? "Aux utilisateurs généraux"
        : "Pour séparer les utilisateurs"
    }
    size="medium"
    handleClick={
      selectedOptions.length > 0 ? emptySelectedOptions : openModal
    }
  />
  {showAlert && (
    <CustomAlert
      message="Notification Sent Successfully"
      handleClose={() => setShowAlert(false)}
    />
  )}
{showAlert2 && (
    <CustomAlert
      message="Email Sent Successfully"
      handleClose={() => setShowAlert2(false)}
    />
  )}
</div>
      </div>
    </>
  );
};

export default SendNotification;
