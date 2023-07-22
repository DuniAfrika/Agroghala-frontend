import React from "react";
import Topimg from "../Componets/Images/istockphoto-538889138-612x612.jpg";
import Card from "./Semi-components/card";
// import Footer from "./footer";
import Navbar from "./Semi-components/navbar";

function Blogspage() {
  return (
    <div>
      <Navbar/>
      <h1 className="my-4 font-sans text-6xl font-semibold text-green-300">
        BLOGS
      </h1>
      <div className="w-full mb-4 bg-purple-300">
        <img src={Topimg} alt="header page" className="object-cover w-full" />
      </div>
      <div className="grid grid-cols-3 gap-4 px-4 mt-4 mb-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Blogspage;
