import React from "react";
import SelectBar from "./Selectbar";
import {BiFilter} from "react-icons/bi"
const SortBar = () => {
  return (
    <div className="p-7">
      <div className="flex flex-row justify-between items-center px-3">
        <p className="text-3xl font-semibold">Products</p>
        <div className="flex items-center">
          <p className="font-semibold mr-3">Filtered</p>
          <BiFilter className="text-2xl mr-3" />
          <SelectBar />
        </div>
      </div>
    </div>
  );
};

export default SortBar;
