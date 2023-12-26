import React, { useState } from "react";
import "./commantriesmodal.style.css";

// components
import CancelBtn from "../Buttons/CancelBtn";
import FilledBtn from "../Buttons/FilledBtn";
import TextArea from "../InputFields/TextArea";
import SelectField2 from "../InputFields/SelectField2";
import InputField from "../InputFields/InputFIeld";

// svg
import Add from "../../Assets/SVG/Notifications/add.svg";

// firebase
import { addCommantries } from "../../API/API";
import useComments from "../../hooks/useComments";

// data
import { fileTypes } from "../../Data/Data";

const CommantriesModal = ({ setModal, clientId, projectId, clientName }) => {
  const { comments } = useComments(clientId, projectId);
  const [commantry, setCommantry] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [file, setFile] = useState({});
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState("");
  const width = "0";

  const closeModal = () => {
    setModal(false);
    document.body.style.overflowY = "auto";
  };

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (commantry && clientId && projectId && clientName) {
      setLoading(true);
      if (file && file.name) {
        if (selectedType) {
          if (file && !file.type.includes("video")) {
            await addCommantries(
              commantry,
              selectedType,
              file,
              description,
              clientId,
              projectId,
              clientName,
              width
            );
            setFile({});
            setCommantry("");
            setSelectedType("");
            closeModal();
          } else {
            if (description !== "") {
              await addCommantries(
                commantry,
                selectedType,
                file,
                description,
                clientId,
                projectId,
                clientName,
                width
              );
              setFile({});
              setCommantry("");
              setSelectedType("");
              closeModal();
            } else {
              alert("Description is required for videos");
            }
          }
        } else {
          alert("Select a file type is must");
        }
      } else {
        await addCommantries(
          commantry,
          selectedType,
          file,
          description,
          clientId,
          projectId,
          clientName
        );
        setFile({});
        setCommantry("");
        setSelectedType("");
        closeModal();
      }
      setLoading(false);
    } else {
      alert("Write a comment first");
    }
  };

  return (
    <>
      <div className="overlay__background" onClick={closeModal}></div>
      <div className="commantries__modal">
        <div
          className="loading"
          style={{ width: width + "%", backgroundColor: "red", height: "2px" }}
        ></div>
        <h1>Commentaires</h1>
        <div className="commantries">
          <ul>
            {comments &&
              comments.length > 0 &&
              comments.map((item, index) => {
                return (
                  <div key={index}>
                    <li>{item.clientName}</li>
                    <p>{item.comment}</p>
                    <div className="date">
                      {item.createdAt &&
                        new Date(item.createdAt.toDate()).toDateString()}
                    </div>
                  </div>
                );
              })}
          </ul>
        </div>
        <div className="commantries__description__field">
          <TextArea
            value={commantry}
            handleChange={(e) => setCommantry(e.target.value)}
          />
        </div>
        <div className="upload__file">
          <div className="upload-file-btn-wrapper">
            <button className="btn">
              <h4 className="medium__text">
                <img src={Add} alt="add" />
                Ajouter le fichier
              </h4>
            </button>
            <input type="file" name="myfile" onChange={handleFile} />
          </div>
          {file && file.name && file.name}
        </div>
        <SelectField2
          options={fileTypes}
          placeholder="Select A Type"
          value={selectedType}
          handleChange={(e) => setSelectedType(e.target.value)}
          color="white"
        />
        <div className="commantries__txt__area">
          <InputField
            type="text"
            value={description}
            handleChange={(e) => setDescription(e.target.value)}
            placeholder="File Description"
          />
        </div>
        <div className="btn__group">
          <CancelBtn title="Annuler" handleClick={closeModal} />
          <FilledBtn
            title={loading ? "Uploading..." : "Send"}
            size="large"
            handleClick={handleSubmit}
            disabled={loading}
          />
        </div>
      </div>
    </>
  );
};

export default CommantriesModal;
