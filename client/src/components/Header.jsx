import React from "react";

const Header = () => {
  return (
    <div className="mb-10 flex justify-between">
      <div className="flex gap-6">
        <div className="w-fit h-[56px] flex bg-white rounded-2xl   py-0.5">
          <img src="/magnifier.png" alt="" className="object-scale-down" />
          <input
            placeholder="Search here..."
            className="SearchBar  w-[339px] rounded-2xl  pr-4 justify-start items-center gap-2 inline-flex focus:outline-none "
          />
          {/* <div className=" w-8 h-8 relative" /> */}
          {/* <div className=" text-slate-500 text-lg font-normal">Search here...</div> */}
        </div>
        <button className=" w-[141px] p-2 bg-gray-800 rounded-[10px] text-white">
          Filter
        </button>
      </div>
      <button className=" w-[141px] p-2 bg-gray-800 rounded-[10px] text-white">
        Create A Post
      </button>
    </div>
  );
};

export default Header;
