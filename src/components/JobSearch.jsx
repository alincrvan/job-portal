import React, { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import "../styles/search.css";

export default function JobSearch() {
  const { setSearch } = useContext(DataContext);

  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(inputValue.trim());
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === "") {
      setSearch("");
    }
  };

  return (
    <nav className="job-search">
      <form onSubmit={handleSubmit}>
        <button className="btn-primary" type="submit">
          Search Job
        </button>
        <input
          value={inputValue}
          onChange={handleChange}
          type="search"
          aria-label="Search Job"
          placeholder="Search jobs"
        />
      </form>
    </nav>
  );
}
