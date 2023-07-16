import React from "react";
import Heropic from "../Images/image 5 (2).png";

function Viewproductheroimage() {
  return (
    <div className="relative pt-20">
      <div className="container mx-auto overflow-hidden bg-black rounded-lg h-80">
        <img src={Heropic} alt="rice" className="object-cover w-full h-full" />
        <div className="absolute w-1/3 p-8 text-left text-white top-32">
          <h1 className="text-2xl font-extrabold tracking-wider text-green-500">PRICE</h1>
          <p className="mb-8 text-3xl ">Price per 90 Kg</p>
          <p className="text-lg text-red-600">
            Today: Ksh. 9000
          </p>
          <p className="text-lg ">
            Previous: Ksh: 8000
          </p>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Viewproductheroimage;
