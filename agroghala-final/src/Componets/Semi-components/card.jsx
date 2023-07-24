import React from "react";
import card1 from "../Images/image 5 (2).png";

function Card() {
  return (
    <div className="flex flex-col max-w-sm mx-auto mt-4 overflow-hidden rounded-lg shadow-md   ">
      <div className="">
        <img src={card1} alt="cardtop" className="object-cover w-full h-80 " />
      </div>
      <div className="p-4">
        <h2 className="my-2 text-2xl font-bold">POST HARVEST LOSS</h2>
        <p>
          Post harvest loss is the decredation in quantity and quality of food
          from harvest to consumption
        </p>
      </div>
    </div>
  );
}

export default Card;
