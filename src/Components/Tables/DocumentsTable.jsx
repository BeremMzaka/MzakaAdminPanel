import React, { useState } from "react";
import "./table.style.css";

// images
import Icon1 from "../../Assets/SVG/ProjectDetails/DocumentDetails/Icon1.svg";
import Icon2 from "../../Assets/SVG/ProjectDetails/DocumentDetails/Icon2.svg";
import Icon3 from "../../Assets/SVG/ProjectDetails/DocumentDetails/Icon3.svg";

const DocumentsTable = ({ data, openModal, fileType }) => {
  const [menu, setMenu] = useState(null);
  const handleMenu = (id) => {
    if (id === menu) setMenu(null);
    else setMenu(id);
  };
  return (
    <div className="table__container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-2">
            {fileType === "document" ? "Des dossiers" : "Fichiers reçus"}
          </div>
          <div className="col col-2">Date de création</div>
          <div className="col col-1">Action</div>
        </li>
        {data &&
          data.map((value, index) => {
            return (
              <li className="table-row" key={index}>
                <div className="col col-2 flex" data-label="Nom du personnel">
                  <a href={value.file}>
                    <img
                      className="icon__img"
                      src={
                        value.fileType === "Document" ||
                        value.fileType === "Plan" ||
                        value.fileType === "File"
                          ? Icon1
                          : value.fileType === "Image"
                          ? Icon2
                          : value.fileType === "Video"
                          ? Icon3
                          : null
                      }
                      alt="icon"
                    />
                  </a>

                  <p>{value.comment}</p>
                </div>
                <div className="col col-2" data-label="Date de création">
                  {value.createdAt &&
                    new Date(value.createdAt.toDate()).toDateString()}
                </div>
                <div className="col col-1" data-label="Action">
                  <div className="menu__dots" onClick={() => handleMenu(index)}>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                  {menu === index && (
                    <div className="menu">
                      <p>View Details</p>
                      <div className="horizontal__line"></div>
                      <p>Effacer</p>
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

export default DocumentsTable;
