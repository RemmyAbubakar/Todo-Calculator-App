import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ handleSearchText }) {
  return (
    <div className="search flex items-center bg-gray-300 rounded-[10px] p-[10px] mb-6">
      <MdSearch className="search-icons" size="1.3rem" />
      <input
        onChange={(e) => handleSearchText(e.target.value)}
        type="text"
        placeholder="type to search..."
        className="border-none bg-gray-300 outline-none ml-2 placeholder-black"
      />
    </div>
  );
}

export default Search;
