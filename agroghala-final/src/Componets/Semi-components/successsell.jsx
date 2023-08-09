import React from "react";
import checkmark from "../Images/check-mark (1).png";

function Successsell() {
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="w-1/4 p-4 rounded-md shadow-md ">
        <img src={checkmark} alt="checked" />
        <h1 className="my-4 text-4xl font-bold text-green-500 ">Produce Sold!</h1>
        <p className="text-lg font-semibold">
          <span className="whitespace-nowrap">"A Kernel of Thanks!"</span>
          <span className="block my-4 text-gray-500">
            Each sale is like a precious kernel of gratitude. Thank you for
            being an essential part of our grain-selling journey..
          </span>
        </p>

        <button className="p-1 px-2 my-6 text-lg font-semibold tracking-wider text-white bg-green-500 rounded-lg">
          Dismiss
        </button>
      </div>
    </div>
  );
}

export default Successsell;
