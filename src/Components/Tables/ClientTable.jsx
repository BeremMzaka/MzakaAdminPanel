import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./table.style.css";

// images
import Profile2 from "../../Assets/Images/Profile2.png";
//firebase
import { db } from "../../firebase";
import {
  onSnapshot,
  query,
  collection,
  doc,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
///api
import { RecyclebinDelete } from "../../API/API";

const ClientTable = ({
  data,
  itemsPerPage,
  currentPage,
  searchName,
  openModal,
  setSelectedUser,
}) => {
  let history = useHistory();
  const [menu, setMenu] = useState(null);

  const handleMenu = (id) => {
    if (id === menu) setMenu(null);
    else setMenu(id);
  };

  const pageVisited = (currentPage - 1) * itemsPerPage;

  return (
    <div className="table__container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-4">Prénom du client</div>
          <div className="col col-2">Nom de famille</div>
          <div className="col col-3">e-mail</div>
          <div className="col col-2">Téléphone</div>
          <div className="col col-1">Action</div>
        </li>

        {data &&
          data
            .filter((val) => {
              if (searchName == "") {
                return val;
              } else if (
                (val &&
                  val.first_name &&
                  val.first_name
                    .toLowerCase()
                    .includes(searchName.toLowerCase())) ||
                (val &&
                  val.last_name &&
                  val.last_name
                    .toLowerCase()
                    .includes(searchName.toLowerCase()))
              ) {
                return val;
              }
            })
            .slice(
              ...(searchName
                ? [0, data.length]
                : [pageVisited, pageVisited + itemsPerPage])
            )
            .map((value, index) => {
              return (
                <li className="table-row" key={index}>
                  <div className="col col-4 flex" data-label="Prénom du client">
                    <img src={Profile2} alt="profile" />
                    <p>{value.first_name ? value.first_name : "Non Prénom"}</p>
                  </div>
                  <div className="col col-2" data-label="Nom de famille">
                    {value.last_name ? value.last_name : "Non Nom de famille"}
                  </div>
                  <div className="col col-2" data-label="e-mail">
                    {value.email ? value.email : "Non e-mail"}
                  </div>
                  <div className="col col-2" data-label="Téléphone">
                    {value.telephone ? value.telephone : "Non Téléphone"}
                  </div>
                  <div className="col col-1" data-label="Action">
                    <div
                      className="menu__dots"
                      onClick={() => handleMenu(index)}
                    >
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    {menu === index && (
                      <div className="menu">
                        <p>
                          <Link to={`clients/${value.id}`}>Voir le profil</Link>
                        </p>
                        <div className="horizontal__line"></div>
                        <p
                          onClick={() => {
                            RecyclebinDelete(value.id, history);
                          }}
                        >
                          Effacer
                        </p>
                      </div>
                    )}
                  </div>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default ClientTable;
