import React from "react";

function Pricetag(props) {
  return (
    <div className="w-full shadow-md rounded-md overflow-hidden">
      <div className="h-64 w-full bg-red-500">
        <img
          src={props.image}
          alt={props.commodity}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <p className="text-green-500 text-3xl">{props.commodity}</p>
        <p className="text-green-500 md:text-2xl text-xl">
          Sale Price: Ksh. {props.last_price}
        </p>
        <p className="text-red-500 md:text-2xl text-lg">
          Current Price: Ksh. {props.current_price}
        </p>
        <button className="bg-green-500 text-white font-bold my-2 p-2 rounded-md w-full hover:scale-[1.01] ease-in-out duration-300">
          Add to Mysoko
        </button>
      </div>
    </div>
  );
}

export default Pricetag;
