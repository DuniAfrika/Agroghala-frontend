import React from "react";
import "../styles/productcard.css"
import card2 from "../Images/gunia.jpg";
import Morebtn from "./morebtn";

function Productcard(props) {
  return (
    <div className="flex flex-col max-w-sm mx-auto mt-4 overflow-hidden rounded-lg shadow-md hover:scale-[1.05] ease-linear duration-500">
      <div className="bg">
        <img src={card2} alt="cardtop" className="object-cover w-full h-80 " />
      </div>
      <div className="p-4">
        <h2 className="my-2 text-2xl font-bold">{props.product}</h2>
        <p>Ksh. 9000 per Bag</p>
        <Morebtn action="View Product" />
      </div>
    </div>
  );
}

export default Productcard;
