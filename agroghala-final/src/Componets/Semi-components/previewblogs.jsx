import React from "react";
import Card from "./card";
import Morebtn from "./morebtn";

function Previewblogs() {
  return (
    <div className="px-12">
      <h1 className="mb-8 text-4xl text-green-500 md:underline text-center md:text-start">Blogs</h1>
      <div className="md:grid grid-cols-4 gap-4 mt-4 mb-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex justify-center md:justify-end p-6 md:mx-40">
        <Morebtn action="MORE BLOGS &#8594;" />
      </div>
    </div>
  );
}

export default Previewblogs;
