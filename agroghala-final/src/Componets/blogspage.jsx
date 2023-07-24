import React from "react";
import Topimg from "../Componets/Images/istockphoto-538889138-612x612.jpg";
import Card from "./Semi-components/card";
import Navbar from "./Semi-components/navbar";
import Footer from "./Semi-components/footer[1]";

function Blogspage() {
  return (
    <div>
      <Navbar />
      <h1 className="my-2 md:mx-10 text-2xl font-semibold text-green-500 md:underline">
        BLOGS
      </h1>
      <div className="w-full mb-4  flex shadow-md rounded-md  overflow-hidden">
        <div className="md:flex md:p-6">
          <div className="md:w-1/2">
            <img
              src={Topimg}
              alt="header page"
              className="object-cover w-full rounded-md"
            />
          </div>
          <div className="md:w-1/2 flex items-center justify-center md:p-12 p-4">
            <p className="md:text-6xl text-4xl">
              "We are Preserving Harvests and Nurturing Joy."
            </p>
          </div>
        </div>
      </div>

      <h1 className="text-xl font-bold md:mx-12">
        Rooted Words: Echoes of Our Farmers, Resonating with Nature!
      </h1>
      <div className="md:grid grid-cols-4 gap-4 px-4 mt-4 mb-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default Blogspage;
