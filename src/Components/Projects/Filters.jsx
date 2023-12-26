import React from "react";
import "./filters.style.css";

// components
import SearchField from "../InputFields/SearchFIeld";
import DateInput from "../InputFields/DateInput";
import SelectField2 from "../InputFields/SelectField2";

// data
import { statusOptions } from "../../Data/Data";

const Filters = ({
  setProject,
  setClient,
  setStatus,
  setDate,
  client,
  project,
  status,
  date,
}) => {
  const clearFilters = () => {
    setProject("");
    setClient("");
    setStatus("");
    setDate("");
  };

  return (
    <div className="filter__box">
      <div className="project__filter">
        <h4>Nom du projet</h4>
        <SearchField
          value={project}
          handleChange={(e) => setProject(e.target.value)}
        />
      </div>
      <div className="client__filter">
        <h4>Nom du client</h4>
        <SearchField
          value={client}
          handleChange={(e) => setClient(e.target.value)}
        />
      </div>
      <div className="achievement__filter">
        <h4>Statut</h4>
        <SelectField2
          value={status}
          handleChange={(e) => setStatus(e.target.value)}
          options={statusOptions}
          placeholder="Select"
          color="white"
        />
      </div>
      <div className="date__filter">
        <h4>Date de création</h4>
        <DateInput
          value={date}
          handleChange={(e) => setDate(e.target.value)}
          placeholder="mm/dd//yy"
        />
      </div>
      <div className="search__btn">
        <button className="disabled" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
