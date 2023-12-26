import React, { useState } from "react";
import Select from "react-select";
import "./administrationmodal.style.css";

// firebase
import useSelectUsers from "../../hooks/useSelectUsers";
import { makeAdmin } from "../../API/API";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AdministrationModal = ({ setModal }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [checkbox, setCheckbox] = useState(false);
  const [loading, setLoading] = useState(false);
  const { users } = useSelectUsers("user_profile");

  const closeModal = () => {
    setModal(false);
    document.body.style.overflowY = "auto";
  };

  const handleChange = (values) => {
    setSelectedOptions(values);
  };

  const handleMakeAdmin = () => {
    setLoading(true);
    try {
      makeAdmin(selectedOptions);
      alert(`Successfully admins created`);
      setLoading(false);
      closeModal();
    } catch (error) {
      setLoading(false);
      alert("Error while making admin please try again later, ", error);
    }
  };

  return (
    <>
      <div className="overlay__background" onClick={closeModal}></div>
      <div className="admin__modal">
        <h1>Créer un sous-administrateur</h1>
        <div className="select__area">
          <h4>Nom de l'utilisateur</h4>
          <Select isMulti onChange={handleChange} options={users} />
        </div>
        <div className="check__box__area">
          <h4>Modifier l'accès</h4>
          <ul className="unstyled centered">
            <li>
              <input
                className="styled-checkbox"
                id="styled-checkbox-1"
                type="checkbox"
                value="value1"
                onClick={() => setCheckbox(!checkbox)}
              />
              <label htmlFor="styled-checkbox-1">
                Approuver les modifications
              </label>
            </li>
          </ul>
        </div>
        <button
          onClick={handleMakeAdmin}
          className={
            selectedOptions.length > 0 && checkbox
              ? `submit`
              : `submit disabled`
          }
          disabled={
            selectedOptions.length > 0 && checkbox && !loading ? false : true
          }
        >
          {loading ? "Wait..." : "Add"}
        </button>
      </div>
    </>
  );
};

export default AdministrationModal;
