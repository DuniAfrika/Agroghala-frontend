import React from "react";
import Heropic from "../Images/image2.png";

function Heroimage() {
  return (
    <div className="md:flex bg-green-500 px-12 justify-around">
      <div className="hidden md:visible">
        <img
          src={Heropic}
          alt="happy farmers"
          className="object-cover h-full "
        />
      </div>
      <div className="md:w-1/3 py-40 md:my-10 text-center text-white">
        <h1 className="md:text-8xl font-extrabold tracking-wider text-4xl">
          AGROGHALA
        </h1>
        <p className="mb-8 text-3xl ">farm to store.</p>
        <p className="text-2xl">
          Easily access vital information, seamless rental of storage
          facilities, and a direct platform to sell your produce in a dynamic 
          markets.
        </p>
      </div>
    </div>
  );
}

export default Heroimage;
