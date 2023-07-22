import React, { useEffect, useState } from "react";
import axios from "axios";
import locationpin from '../Images/placeholder (2).png'
// import Data from "./ghaladata";

function MyGhalacard() {
  const [Data, setData] = useState([])
  

  useEffect(()=>{
    axios.get("http://localhost:8000/api/services/ghala/").then((res) => {
      console.log(res.data);
      const Data = res.data;
      setData(Data)
      Data.map((ghala) => {
        return console.log(ghala.title);
      });
    });
  },[])
  return (
    <div className="flex flex-col my-6 md:gap-12 md:grid-cols-4 md:grid">
      {Data.map((ghala) => {
        return (
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div key={Data.index} className="w-full my-8">
              <div className="w-full h-64 bg-red-500">
                <img
                  src={ghala.image}
                  alt={ghala.title}
                  className="object-cover w-full h-full transition duration-300 ease-in-out hover:brightness-125"
                />
              </div>
              <div className="p-4">
                <h1 className="w-full text-2xl text-green-500 truncate ">
                  {ghala.title}
                </h1>
                <p className="w-full h-20 py-2 my-2 rounded-sm line-clamp-3">
                  {ghala.description}
                </p>
                <div className="flex items-center w-1/3 py-1 my-2 font-bold text-center truncate ">
                  <img src={locationpin} alt="pin" />
                  <p className="px-1">{ghala.location}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyGhalacard;
