import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

const Search = () => {
  return (
    <div className="searchDiv grid gap-10 rounded-[10px] p-[2rem] bg-greyIsh">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[10px] gap-[10px] bg-white p-2.5 shadow-lg shadow-greyIsh-700">
          <div className="flex gap-3 items-center m-3">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search For Jobs"
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex gap-3 items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Company"
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>

          <div className="flex gap-3 items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              className="bg-transparent text-blue-500 focus:outline-none w-[100%]"
              placeholder="Search By Location"
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
          </div>
          <button className="bg-blueColor h-full p-3 m-3 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-900">
            Search
          </button>
        </div>
      </form>

      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relevance" className="text-[808080] font-semibold">
            Sort by:
          </label>

          <select
            name=""
            id="relevance"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Relevance</option>
            <option value="">Inclusive</option>
            <option value="">Start with</option>
            <option value="">Contains</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="type" className="text-[808080] font-semibold">
            Type:
          </label>

          <select
            name=""
            id="type"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Full-Time</option>
            <option value="">Remote</option>
            <option value="">On Contract</option>
            <option value="">Part-Time</option>
          </select>
        </div>

        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="experience" className="text-[808080] font-semibold">
            Experience:
          </label>

          <select
            name=""
            id="experience"
            className="bg-white rounded-[3px] px-4 py-1"
          >
            <option value="">Fresher</option>
            <option value="">1 Year</option>
            <option value="">2 Years</option>
            <option value="">3 Years</option>
          </select>
        </div>

        <span className="text-[#a1a1a1] cursor-pointer">Clear all</span>
      </div>
    </div>
  );
};

export default Search;
