import React, { useState } from "react";
import "./table.style.css";

// images
import Profile2 from "../../Assets/Images/Profile2.png";

const AssignProjectTable = ({ data }) => {
  const [menu, setMenu] = useState(null);
  const handleMenu = (id) => {
    if (id === menu) setMenu(null);
    else setMenu(id);
  };
  return (
    <div className="table__container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-4">Nom du client</div>
          <div className="col col-2">Nom du projet</div>
          <div className="col col-3">Statut</div>
          <div className="col col-2">Date de création</div>
          <div className="col col-1">Action</div>
        </li>
        {data &&
          data.map((value) => {
            return (
              <li className="table-row">
                <div className="col col-4 flex" data-label="Nom du client">
                  <img src={Profile2} alt="profile" />
                  <p>{value.name}</p>
                </div>
                <div className="col col-2" data-label="Nom du projet">
                  {value.projectName}
                </div>
                <div className="col col-3" data-label="Statut">
                  {value.status === "success" && (
                    <p className="status success">Finalisé</p>
                  )}
                  {value.status === "warning" && (
                    <p className="status warning">En cours</p>
                  )}
                  {value.status === "primary" && (
                    <p className="status primary">Examiné</p>
                  )}
                </div>
                <div className="col col-2" data-label="Date de création">
                  {value.date}
                </div>
                <div className="col col-1" data-label="Action">
                  <div
                    className="menu__dots"
                    onClick={() => handleMenu(value.id)}
                  >
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  {menu === value.id && (
                    <div className="menu">
                      <p>Attribuer</p>
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

export default AssignProjectTable;
