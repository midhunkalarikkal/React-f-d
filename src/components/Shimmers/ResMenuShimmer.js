import React from "react";

const ResMenuShimmer = () => {
  return (
    <div className="flex flex-col w-10/12 md:w-6/12 m-auto mt-2">
      <div className="flex p-4 rounded-lg shadow-md w-full h-32">
        <div className="w-4/12 flex justify-center items-center bg-gray-300 rounded-lg shimmer animate-pulse"></div>
      </div>
      <div className="mt-2">
        <div className="flex justify-between p-2 bg-gray-300 cursor-pointer shadow-lg h-10 shimmer animate-pulse rounded"></div>
        <div className="flex justify-between p-2 bg-gray-300 cursor-pointer shadow-lg h-10 mt-1 shimmer animate-pulse rounded"></div>
        <div className="flex justify-between p-2 bg-gray-300 cursor-pointer shadow-lg h-10 mt-1 shimmer animate-pulse rounded"></div>
      </div>
    </div>
  );
};

export default ResMenuShimmer;
