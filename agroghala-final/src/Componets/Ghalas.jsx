import React from "react";
import Navbar from "./Semi-components/navbar";
import Card2 from "./Semi-components/Card2";

function Ghalas() {
  return (
    <div className="pt-20">
      <Navbar />
      <h1 className="my-4 font-sans text-6xl font-semibold text-green-300 underline">
        OUR GHALAS
      </h1>
      <div className="grid grid-cols-3 gap-4 px-4 mt-4 mb-4">
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
        <Card2 />
      </div>
    </div>
  );
}

export default Ghalas;
