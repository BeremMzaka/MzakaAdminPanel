import React, { useState } from "react";
import "./constructorlisting.style.css";

// icons and images
import { AiOutlineSearch } from "react-icons/ai";

// data
import EmptyBtn from "../Buttons/EmptyBtn";
import ConstructorModal from "../Modals/ConstructorModal";
import ConstructorTable from "../Tables/ConstructorTable";

// firebase
import useConstructors from "../../hooks/useConstructors";
import Pagination from "../Pagination/Pagination";

const ConstructorsListing = () => {
  const [modal, setModal] = useState(false);
  const { constructors } = useConstructors("user_profile");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      {modal && <ConstructorModal setModal={setModal} />}
      <div className="constructors">
        <div className="table__top">
          <h2>
            Nombre total de constructeurs (
            {constructors && constructors.length > 0 ? constructors.length : 0})
          </h2>
          <div className="search">
            <AiOutlineSearch />
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
        <EmptyBtn
          size="large"
          title="Créer un nouveau"
          handleClick={openModal}
        />
        <ConstructorTable
          data={constructors}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          searchName={search}
        />
        {constructors && constructors.length > 5 && !search && (
          <Pagination
            data={constructors}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  );
};

export default ConstructorsListing;
