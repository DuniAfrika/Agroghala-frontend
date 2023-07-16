import React from "react";
import Navbar from "./Semi-components/navbar";
import Pricereview from "./Semi-components/Pricereview";

function Masoko() {
  return (
    <div className="pt-20 ">
      <Navbar />
      <div className="container flex justify-around py-8 mx-auto mb-8 rounded-sm bg-slate-200">
        <div className="flex flex-col items-center p-1 text-xl text-center text-white bg-green-500 rounded-md shadow-md h-28 w-28">
          <h1>Total Sales</h1>
          <div>
            <p>Ksh. 9,000</p>
          </div>
        </div>
        <div className="flex flex-col items-center p-1 text-xl text-center text-white bg-green-500 rounded-md shadow-md h-28 w-28">
          <h1>Total Profit</h1>
          <p>Ksh. 3,000</p>
        </div>
      </div>
      <div className="container mx-auto">
        <h1 className="mb-8 text-2xl text-green-500 underline">SALES RECORD</h1>
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
      </div>
    </div>
  );
}

export default Masoko;
