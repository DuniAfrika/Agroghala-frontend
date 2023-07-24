import React from "react";
import Navbar from "./Semi-components/navbar";
import Sokopreview from "./Semi-components/sokopreview";

function Ghalas() {
  return (
    <div className="">
      <Navbar />
      <div className="px-12">
        <h1 className="font-sans text-3xl font-semibold text-green-300 underline">
          SOKO
        </h1>
        <div className="my-4">
         <Sokopreview/>
        </div>
      </div>
    </div>
  );
}

export default Ghalas;
