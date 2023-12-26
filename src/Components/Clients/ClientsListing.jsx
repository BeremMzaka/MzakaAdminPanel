import React, { useState,useLayoutEffect,useEffect } from "react";
import "./clientlisting.style.css";

// icons and images
import { AiOutlineSearch } from "react-icons/ai";

// components
import ClientTable from "../Tables/ClientTable";
import Pagination from "../Pagination/Pagination";
//Modals
import DeleteModal from "../Modals/DeleteModal";

// firebase
import useClients from "../../hooks/useClients";

const ClientsListing = () => {
  // const [clients, setClients]=useState([]);
  const { clients } = useClients("user_profile");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [modal, setModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const openModal = () => {
    setModal(true);
    document.body.style.overflowY = "hidden";
  };

//   useEffect(() => {
//     // you will get updated finalData here, each time it changes


//     // you can trigger your function from here
// },[...clients]);
  return (
    <>
      {modal && (
        <DeleteModal setModal={setModal} selectedUser={selectedUser} />
      )}
      <div className="table__top">
        <h2>
          Nombre total de clients (
          {clients && clients.length ? clients.length : 0})
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
      {clients.length > 0 && (
        <ClientTable
          data={clients}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          searchName={search}
          openModal={openModal}
          setSelectedUser={setSelectedUser}
        />
      )}
      {clients.length > 5 && !search && (
        <Pagination
          data={clients}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setCurrentPage={setCurrentPage}

        />
      )}
    </>
  );
};

export default ClientsListing;
