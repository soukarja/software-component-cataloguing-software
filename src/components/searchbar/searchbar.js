import React from "react";
import "./searchbar.css";

const SearchBar = () => {
  return (
    <>
      <form className="searchbar">
        <input type="text" name="name" placeholder="Search Anything..." />
        <div className="row">
          <div className="col">
            <label>Component Type</label>
            <select>
              <option selected value="code">
                Code
              </option>
              <option value="design">Design</option>
            </select>
          </div>
          <div className="col">
            <label>Component Category</label>
            <select>
              <option selected hidden value="none">
                Select a category
              </option>
              <option value="views">Views</option>
              <option value="model">Model</option>
              <option value="controller">Controllers</option>
              <option value="class">Class</option>
              <option value="object">Object</option>
              <option value="data">Data Access Object</option>
              <option value="services">Services</option>
              <option value="plugins">Plugins</option>
              <option value="api">APIs</option>
              <option value="others">Others</option>
            </select>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
