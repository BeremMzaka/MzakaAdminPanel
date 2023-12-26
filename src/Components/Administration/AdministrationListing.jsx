import React, { useState } from "react";

// icons
import { AiOutlineSearch } from "react-icons/ai";

// components
import AdministrationTable from "../Tables/AdministrationTable";
import EmptyBtn from "../Buttons/EmptyBtn";
import AdministrationModal from "../Modals/AdministrationModal";
import Pagination from "../Pagination/Pagination";

// data
import { data } from "./data";

// firebase
import useAdmins from "../../hooks/useAdmins";

const AdministrationListing = () => {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const { admins } = useAdmins("user_profile");

  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

  return (
    <>
      {modal && <AdministrationModal setModal={setModal} />}
      <div className="table__top">
        <h2>
          Nombre total de sous-administrateurs (
          {admins.length > 0 ? admins.length : 0})
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
      <EmptyBtn title="Créer un nouveau" size="large" handleClick={openModal} />
      {admins.length > 0 && (
        <AdministrationTable
          data={admins}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          searchName={search}
        />
      )}
      {admins.length > 5 && !search && (
        <Pagination
          data={admins}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default AdministrationListing;
