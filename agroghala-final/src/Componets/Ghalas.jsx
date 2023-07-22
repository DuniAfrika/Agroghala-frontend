import React from "react";
import Navbar from "./Semi-components/navbar";
import Footer from "./Semi-components/footer[1]";
import MyGhalacard from "./Semi-components/myGhalacard";

function Ghalas() {
  return (
    <div className="">
      <Navbar />
      <h1 className="font-sans text-2xl font-semibold text-green-300 underline ">
        OUR GHALAS
      </h1>
      <div className="">
        <MyGhalacard />
      </div>
      <div className="mt-14">
        <Footer />
      </div>
    </div>
  );
}

export default Ghalas;
