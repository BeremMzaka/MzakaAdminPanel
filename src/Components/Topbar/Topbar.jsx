import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./topbar.style.css";

// svg and images
import { BsChevronDown } from "react-icons/bs";
import Profile from "../../Assets/Images/Profile.png";

// firebase
import { auth } from "../../firebase";

// redux
import { useDispatch } from "react-redux";
import { userSuccess } from "../../Redux/Actions/userActions";

const Topbar = ({ heading }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const handleLogout = () => {
    auth.signOut().then(() => {
      dispatch(userSuccess({}));
      history.push("/signin");
    });
  };
  
  return (
    <div className="topbar">
      {heading === "Page précédente" ? (
        <h1 onClick={() => history.goBack()}>{`← ${heading}`}</h1>
      ) : (
        <h1>{heading}</h1>
      )}

      <div className="profile">
        <a  onClick={handleLogout}>SignOut </a>
        {/* <p onClick={handleLogout}>Se déconnecter</p> */}
        {/* <span onClick={() => setMenu(!menu)}> */}
          {/* <BsChevronDown /> */}
        {/* </span> */}
        {/* {menu && (
          <div className="menu">
            <p onClick={handleLogout}>Se déconnecter</p>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Topbar;
