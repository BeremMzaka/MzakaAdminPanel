import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "./detailedprofile.style.css";
import { useHistory } from "react-router-dom";

// icons and images
import { FcBusinessman } from "react-icons/fc";

// components
import ProfileModal from "../../Modals/ProfileModal";
import ProfileTable from "../../Tables/ProfileTable";
import EmptyLinkBtn from "../../Buttons/EmptyLinkBtn";

// firebse
import useConstructor from "../../../hooks/useConstructor";
import { profileDelete } from "../../../API/API";
const Table = () => {
  const { userId } = useParams();
  const { constructor, projects } = useConstructor(userId);
  const [menu, setMenu] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [modal, setModal] = useState(false);
  let history=useHistory();

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
      <div className="constructor__details">
        <div className="constructor__profile">
          {!constructor.image ? (
            <FcBusinessman />
          ) : (
            <img src={constructor.image} alt="profile" />
          )}
          <div className="data">
            <h2>{constructor.first_name}</h2>
            <h4>{constructor.email}</h4>
          </div>
        </div>
        <div>
          <button className="danger" onClick={()=>{
            profileDelete(userId,history)
          }}>Effecer</button>
          <EmptyLinkBtn
            path="/assignProject"
            size="medium"
            title="Attribuer un projet"
          />
        </div>
        <ProfileTable
          handleMenu={handleMenu}
          openModal={openModal}
          data={projects}
          menu={menu}
          setSelectedProject={setSelectedProject}
          constructor={true}
          userId={userId}
        />
      </div>
    </>
  );
};

export default Table;
