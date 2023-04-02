import React from "react";

const StillFetching = () => {
  return (
    <div className="w-full flex flex-col h-[89.3vh] bg-gray-100 relative top-[65px] justify-center items-center dark:text-white dark:bg-gray-900">
      <h1 className="font-extrabold text-2xl p-5 flex items-center justify-center animate-bounce md:animate-ping">
        Countries Loading...
      </h1>
      <p className="p-2  bg-white rounded text-red-500">please refresh page....</p>
    </div>
  );
};

export default StillFetching;
