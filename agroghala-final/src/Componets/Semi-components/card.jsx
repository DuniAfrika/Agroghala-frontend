import React from "react";

function Card(props) {
  return (
    <div className="flex flex-col  overflow-hidden rounded-lg shadow-md   ">
            <div>
        <div className="">
          <img
            src={props.image}
            alt="cardtop"
            className="object-cover w-full h-80 "
          />
        </div>
        <div className="p-4">
          <h2 className="my-2 text-2xl font-bold">{props.title}</h2>
          <p className="text-xl">{props.content}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
