import React from "react";
import Heropic from "../Images/smiley.jpg";

function Heroimage() {
  return (
    <div className="relative pt-20">
      <img src={Heropic} alt="happy farmers" className="" />
      <div className="absolute w-1/3 text-center text-white top-32 right-4">
        <h1 className="text-3xl font-extrabold tracking-wider">AGROGHALA</h1>
        <p className="mb-8 text-3xl ">farm to store</p>
        <p className="text-2xl">
          Easily access vital information, seamless rental of storage
          facilities, and a direct platform to sell your produce in dynamic
          markets.
        </p>
      </div>
    </div>
  );
}

export default Heroimage;
