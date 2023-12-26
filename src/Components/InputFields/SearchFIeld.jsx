import React from "react";
import "./searchfield.style.css";

// icons
import { AiOutlineSearch } from "react-icons/ai";

const SearchFIeld = ({ handleChange, value }) => {
  return (
    <div className="search__field">
      <AiOutlineSearch />
      <input type="text" onChange={handleChange} value={value} />
    </div>
  );
};

export default SearchFIeld;
