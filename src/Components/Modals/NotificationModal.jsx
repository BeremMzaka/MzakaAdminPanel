import React, { useEffect, useState } from "react";
import "./notificationmodal.style.css";
import Select from "react-select";

// images
import Profile from "../../Assets/Images/Profile/profile.png";

// firebase
import useUsers from "../../hooks/useUsers";

const NotificationModal = ({
  setModal,
  selectedOptions,
  setSelectedOptions,
}) => {
  const { users } = useUsers("user_profile");
  const [options, setOptions] = useState([]);
  const closeModal = () => {
    setModal(false);
    document.body.style.overflowY = "auto";
  };
  const handleChange = (values) => {
    setSelectedOptions(values);
  };

  useEffect(() => {
    setOptions([]);
    users.forEach((user) => {
      setOptions((prev) => [
        ...prev,
        {
          id: user.id,
          value: user.first_name,
          label: user.first_name,
          image: user.image ? user.image : Profile,
          email: user.email,
        },
      ]);
    });
  }, [users]);

  return (
    <>
      <div className="overlay__background" onClick={closeModal}></div>
      <div className="notification__modal">
        <h1>Ajouter des utilisateurs</h1>
        <div className="select__area">
          <h4>Nom de l'utilisateur</h4>
          <Select
            value={selectedOptions}
            isMulti
            onChange={handleChange}
            options={options}
          />
        </div>
        {/* <button
          className={!selectedOptions.length > 0 ? `submit disabled` : `submit`}
          disabled={!selectedOptions.length > 0 ? true : false}
        >
          Add
        </button> */}
      </div>
    </>
  );
};

export default NotificationModal;
