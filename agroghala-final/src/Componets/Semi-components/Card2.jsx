import React from "react";

import card2 from "../Images/gunia.jpg";
import Morebtn from "./morebtn";

function Card2() {
  return (
    <div className="flex flex-col max-w-sm mx-auto mt-4 overflow-hidden rounded-lg shadow-md hover:scale-[1.05] ease-linear duration-500">
      <div className="">
        <img src={card2} alt="cardtop" className="object-cover w-full h-80 " />
      </div>
      <div className="p-4">
        <h2 className="my-2 text-2xl font-bold">WAREHOUSE A</h2>
        <p>Juja, Kiambu</p>
        <Morebtn action="View Ghala" />
      </div>
    </div>
  );
}

export default Card2;
