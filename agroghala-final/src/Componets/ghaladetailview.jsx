import React from "react";
import Navbar from "./Semi-components/navbar";
import locationpin from "./Images/placeholder (2).png";
import axios from "axios";
import { useEffect, useState } from "react";

function Ghaladetailview() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/services/ghala/").then((res) => {
      console.log(res.data);
      const Data = res.data;
      setData(Data);
    });
  }, []);
  return (
    <div className="flex items-center justify-center">
      <Navbar />
      <div>
        {Data.map((ghala) => {
          return (
            <div className="md:flex md:shadow-xl md:w-1/2 justify-between p-2 bg-white rounded-md ">
              <div className="bg-gray-500 rounded-md overflow-hidden w-full ">
                <img
                  src={ghala.image}
                  alt="ghala"
                  className="object-cover w-full h-full duration-300 ease-in hover:brightness-110"
                />
              </div>
              <div className="p-8 border-green-500 rounded-md  md:ml-4 md:w-1/2">
                <h1 className="mb-6 text-4xl truncate w-full">{ghala.title}</h1>
                <div className="flex">
                  <img src={locationpin} alt={ghala.location} />
                  <p className="px-2 py-1 font-semibold text-center  border-green-500  ">
                    {ghala.location}
                  </p>
                </div>
                <div className="p-4 my-6 text-xl bg-gray-100 rounded-md">
                  <h1 className="my-2 font-semibold text-green-500">
                    Description
                  </h1>
                  <p>{ghala.description}</p>
                </div>
                <p className="my-2 text-xl font-bold text-green-500">
                  Start Price: <span>Ksh.{ghala.start_price}</span>
                </p>
                <p className="my-2 text-sm font-bold text-red-500">
                  Rent Price: <span>Ksh.{ghala.rent_price}</span>
                </p>
                <button className="bg-green-500 w-full text-white p-2 rounded-md font-semibold tracking-wider my-1">
                  Rent Now
                </button>
              </div>
            </div>
          );
        }).slice(0, 1)}
      </div>
    </div>
  );
}

export default Ghaladetailview;
