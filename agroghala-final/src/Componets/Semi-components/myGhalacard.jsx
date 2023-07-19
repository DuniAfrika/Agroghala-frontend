import React from "react";
import Data from "./ghaladata";

function MyGhalacard() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {Data.map((ghala) => {
        return (
          <div className="shadow-lg rounded-lg overflow-hidden">
            <div key={Data.index} className="w-full">
              <div className="bg-red-500 h-64 w-full">
                <img
                  src={ghala.image}
                  alt={ghala.title}
                  className="object-cover w-full h-full hover:brightness-125 transition duration-300 ease-in-out"
                />
              </div>
              <div className="p-4">
                <h1 className="text-green-500 text-2xl w-full truncate ">
                  {ghala.title}
                </h1>
                <p className="bg-gray-100 p-2 my-2 rounded-sm w-full truncate">
                  {ghala.description}
                </p>
                <p className="border-2 border-green-500 font-bold px-2 text-center py-1  rounded-full w-1/2 my-2 truncate">
                  {ghala.location}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyGhalacard;
