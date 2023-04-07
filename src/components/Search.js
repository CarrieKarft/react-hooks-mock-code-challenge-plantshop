import React from "react";

function Search({ plantFilter, setPlantFilter }) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={plantFilter}
        placeholder="Type a name to search..."
        onChange={(e) => {
          // console.log(e.target.value)
          setPlantFilter(e.target.value)
        }}
      />
    </div>
  );
}

export default Search;
