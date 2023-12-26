import React, { useState, useEffect } from "react";
import "./pagination.style.css";

const Pagination = ({
  data,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  // setCurrentItems,
}) => {
  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  let pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  // useEffect(() => {
  //   const indexOfLastItem = currentPage * itemsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   // setCurrentItems(data.slice(indexOfFirstItem, indexOfLastItem));
  // }, [currentPage]);

  const handleClick = (e) => {
    setCurrentPage(Number(e.target.id));
  };

  const handleNextBtn = () => {
    setCurrentPage(currentPage + 1);
    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevBtn = () => {
    setCurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  return (
    <ul className="page__numbers">
      <li>
        <button
          onClick={handlePrevBtn}
          disabled={currentPage === pages[0] ? true : false}
        >
          Prev
        </button>
      </li>
      {pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <li
              key={number}
              id={number}
              onClick={handleClick}
              className={currentPage === number ? "active" : null}
            >
              {number}
            </li>
          );
        } else {
          return null;
        }
      })}
      <li>
        <button
          onClick={handleNextBtn}
          disabled={currentPage === pages[pages.length - 1]}
        >
          Next
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
