import React from "react";

const Search = () => {
  return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-8/12 lg:w-1/2 z-3">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-9/12 sm:w-10/12 p-1 md:p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-black bg-opacity-80 text-white"
          />
          <button className="w-3/12 sm:w-2/12 py-1 md:py-3 px-3 md:px-6 bg-orange-500 text-white rounded-md hover:bg-orange-400 transition duration-300 text-md font-semibold">
            Search
          </button>
        </div>
      </div>
  );
};

export default Search;
