import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./detailedprofile.style.css";
import { useHistory } from "react-router";
// icons and images
import { FcBusinessman } from "react-icons/fc";

// modal
import ProfileModal from "../../Modals/ProfileModal";
import ProfileTable from "../../Tables/ProfileTable";

// firebase
import useClient from "../../../hooks/useClient";
import { profileDelete } from "../../../API/API";
const DetailedProfile = () => {
  let history=useHistory();

  const { userId } = useParams();
  const { client, projects } = useClient(userId);
  const [selectedProject, setSelectedProject] = useState(null);
  const [menu, setMenu] = useState(null);
  const [modal, setModal] = useState(false);
  const handleMenu = (id) => {
    if (id === menu) setMenu(null);
    else setMenu(id);
  };

  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      {modal && (
        <ProfileModal setModal={setModal} selectedProject={selectedProject} />
      )}
      <div className="client__details">
        <div className="client__profile">
          {!client.image ? (
            <FcBusinessman />
          ) : (
            <img src={client.image} alt="profile" />
          )}
          <div className="data">
            <h2>{`${client.first_name} ${client.last_name}`}</h2>
            <h4>{client.email}</h4>
          </div>
        </div>
        <button className="danger" onClick={()=>{profileDelete(client.id,history)}}>Effecer</button>
        <ProfileTable
          handleMenu={handleMenu}
          openModal={openModal}
          data={projects}
          menu={menu}
          setSelectedProject={setSelectedProject}
          userId={userId}
        />
      </div>
    </>
  );
};

export default DetailedProfile;
