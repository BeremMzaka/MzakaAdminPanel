import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./table.style.css";

// images
import Profile2 from "../../Assets/Images/Profile2.png";
//api
import { RecyclebinDelete } from "../../API/API";

const ConstructorTable = ({ data, currentPage, itemsPerPage, searchName }) => {
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
          <div className="col col-4">Nom du personnel</div>
          <div className="col col-2">E-mail</div>
          <div className="col col-2">Mot de passe</div>
          <div className="col col-2">Date de création</div>
          <div className="col col-1">Action</div>
        </li>
        {data &&
          data
            .filter((val) => {
              if (searchName == "") {
                return val;
              } else if (
                val &&
                val.first_name &&
                val.first_name.toLowerCase().includes(searchName.toLowerCase())
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
                  <div className="col col-4 flex" data-label="Nom du personnel">
                    <img src={Profile2} alt="profile" />
                    <p>{value.first_name}</p>
                  </div>
                  <div className="col col-2" data-label="E-mail">
                    {value.email}
                  </div>
                  <div className="col col-2" data-label="Mot de passe">
                    {value.password}
                  </div>
                  <div className="col col-2" data-label="Date de création">
                    {value.createdAt &&
                      new Date(value.createdAt.toDate()).toDateString()}
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
                          <Link to={`constructors/${value.id}`}>
                            Voir le profil
                          </Link>
                        </p>
                        <div className="horizontal__line"></div>
                        <p
                          onClick={() => {
                            RecyclebinDelete(value.id);
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

export default ConstructorTable;
