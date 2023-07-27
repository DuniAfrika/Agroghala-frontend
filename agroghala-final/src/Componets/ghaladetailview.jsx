import React from "react";
import Data from "./Semi-components/ghaladata";

function Ghaladetailview() {
  const ghalaData = Data[0];
  return (
    <div className="md:flex">
      <div className="bg-gray-500 rounded-md ov:erflow-hidden md:h-screen md:w-1/2 ">
        <img
          src={ghalaData.image}
          alt={ghalaData.description}
          className="object-cover w-full h-full duration-300 ease-in hover:brightness-110"
        />
      </div>
      <div className="p-8 border-green-500 rounded-md md:border-2 md:ml-4 ">
        <h1 className="mb-6 text-4xl truncate md:w-1/3 ">{ghalaData.title}</h1>
        <p className="px-2 py-1 font-semibold text-center border-2 border-green-500 rounded-full md:w-1/4">
          {ghalaData.location}
        </p>
        <div className="p-4 my-6 text-xl bg-gray-100 rounded-md">
          <h1 className="my-2 font-semibold text-green-500">Description</h1>
          <p>{ghalaData.description}</p>
        </div>
        <p className="my-2 text-xl font-bold text-green-500">
          Start Price: <span>Ksh.{ghalaData.start_price}</span>
        </p>
        <p className="my-2 text-sm font-bold text-red-500">
          Rent Price: <span>Ksh.{ghalaData.rent_price}</span>
        </p>
      </div>
    </div>
  );
}

export default Ghaladetailview;
