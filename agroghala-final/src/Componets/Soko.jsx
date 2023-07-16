import React from "react";
import Navbar from "./Semi-components/navbar";
import Productcard from "./Semi-components/productcard";

function Ghalas() {
  return (
    <div className="pt-20">
      <Navbar />
      <h1 className="my-4 font-sans text-6xl font-semibold text-green-300 underline">
        SOKO
      </h1>
      <div className="grid grid-cols-3 gap-4 px-4 mt-4 mb-4">
        <Productcard product="MAIZE"/>
        <Productcard product="PEAS"/>
        <Productcard product="SORGHUM"/>
        <Productcard product="BEANS"/>
        <Productcard product="RICE"/>
        <Productcard product="MAIZE"/>
        <Productcard product="PEANUTS"/>
        <Productcard product="WHEAT"/>
        <Productcard product="MAIZE"/>
         
         
      </div>
    </div>
  );
}

export default Ghalas;
