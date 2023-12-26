import React from "react";
import { useParams } from "react-router-dom";
import "./detailedprofile.style.css";
import {  useHistory } from "react-router-dom";

// icons and images
import { FcBusinessman } from "react-icons/fc";

// firebase
import useAdmin from "../../../hooks/useAdmin";
import { profileDelete } from "../../../API/API";
const Table = () => {
  const { adminId } = useParams();
  const { admin } = useAdmin(adminId);
  let history=useHistory();

  // console.log(admin);
  return (
    <>
      <div className="constructor__details">
        <div className="constructor__profile">
          {!admin.image ? (
            <FcBusinessman />
          ) : (
            <img src={admin.image} alt="profile" />
          )}
          <div className="data">
            <h2>{admin && admin.first_name && admin.first_name}</h2>
            <h4>{admin && admin.email && admin.email}</h4>
          </div>
        </div>
        <div>
          <button className="danger" onClick={()=>{profileDelete(adminId,history)}}>Effecer</button>
        </div>
      </div>
    </>
  );
};

export default Table;
