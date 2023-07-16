import React from "react";
import Card from "./card";
import Morebtn from "./morebtn";

function Previewblogs() {
  return (
    <div className="px-4 ">
      <h1 className="mb-8 text-4xl text-green-500 underline">Blogs</h1>
      <div className="grid grid-cols-2 gap-4 mt-4 mb-4">
        <Card />
        <Card />
      </div>
      <div className="flex justify-end p-6 mx-40">
        <Morebtn action="MORE BLOGS &#8594;" />
      </div>
    </div>
  );
}

export default Previewblogs;
