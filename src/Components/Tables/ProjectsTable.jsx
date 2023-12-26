import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./table.style.css";

// images
import Profile2 from "../../Assets/Images/Profile2.png";
//API
import { projectDelete } from "../../API/API";
const ProjectsTable = ({
  data,
  openModal,
  openCommantriesModal,
  itemsPerPage,
  currentPage,
  setClientId,
  setProjectId,
  setClientName,
  userName,
  projectName,
  status,
  date,
}) => {
  const [menu, setMenu] = useState(null);

  const handleMenu = (id) => {
    if (id === menu) setMenu(null);
    else setMenu(id);
  };

  const compareDate = (date1, date2) => {
    if (date1 && date2) {
      const formatedDate = new Date(date1.toDate()).toDateString();
      const formatedDate2 = new Date(date2.toString()).toDateString();

      if (formatedDate === formatedDate2) {
        return true;
      }
    }
  };

  const pageVisited = (currentPage - 1) * itemsPerPage;

  return (
    <div className="table__container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-2">Nom du client</div>
          <div className="col col-2">Nom du projet</div>
          <div className="col col-3">Statut</div>
          <div className="col col-2">Date de création</div>
          <div className="col col-1">Action</div>
        </li>
        {data &&
          data.length > 0 &&
          data
            .filter((val) => {
              if (
                userName == "" &&
                projectName === "" &&
                status === "" &&
                date === ""
              ) {
                return val;
              } else if (
                val.project &&
                compareDate(
                  val.project.date_time
                    ? val.project.date_time
                    : val.project.createdAt,
                  date
                ) &&
                val.client &&
                val.client.first_name &&
                val.client.first_name
                  .toLowerCase()
                  .includes(userName.toLowerCase()) &&
                val.project &&
                val.project.name_of_project &&
                val.project.name_of_project
                  .toLowerCase()
                  .includes(projectName.toLowerCase()) &&
                val.project &&
                val.project.project_status &&
                val.project.project_status
                  .toLowerCase()
                  .includes(status.toLowerCase())
              ) {
                return val;
              }
            })
            .slice(
              ...(userName || projectName || status || date
                ? [0, data.length]
                : [pageVisited, pageVisited + itemsPerPage])
            )
            .map((value, index) => {
              return (
                <li className="table-row" key={index}>
                  <div className="col col-2 flex" data-label="Nom du client">
                    <img src={Profile2} alt="profile" />
                    <p>{value.client.first_name && value.client.first_name}</p>
                  </div>
                  <div className="col col-2" data-label="Nom du projet">
                    {value.project.name_of_project}
                  </div>
                  <div className="col col-3" data-label="Statut">
                    {value.project.project_status === "completed" ? (
                      <p className="status success">Finalisé</p>
                    ) : value.project.project_status === "active" ? (
                      <p className="status warning">En cours</p>
                    ) : value.project.project_status === "examine" ? (
                      <p className="status primary">Examiné</p>
                    ) : (
                      <p className="status warning">Non Statut</p>
                    )}
                  </div>
                  <div className="col col-2" data-label="Date de création">
                    {value.project && value.project.date_time
                      ? new Date(
                          value.project.date_time &&
                            value.project.date_time.toDate()
                        ).toDateString()
                      : new Date(
                          value.project.createdAt &&
                            value.project.createdAt.toDate()
                        ).toDateString()}
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
                        <p
                          onClick={() => {
                            openModal();
                            setProjectId(value.projectId);
                            setClientId(value.client.id);
                          }}
                        >
                          Aperçu du projet
                        </p>
                        <div className="horizontal__line"></div>
                        <p>
                          <Link
                            to={`projects/${value.client.id}/${value.projectId}`}
                          >
                            Pièces jointes du projet
                          </Link>
                        </p>
                        <div className="horizontal__line"></div>
                        <p
                          onClick={() => {
                            openCommantriesModal();
                            setProjectId(value.projectId);
                            setClientId(value.client.id);
                            setClientName(
                              value.client.first_name +
                                " " +
                                value.client.last_name
                            );
                          }}
                        >
                          Voir les commentaires
                        </p>
                        <div className="horizontal__line"></div>
                        <p
                          onClick={() => {
                            projectDelete(value.client.id, value.projectId);
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

export default ProjectsTable;
