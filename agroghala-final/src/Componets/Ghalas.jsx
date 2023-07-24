import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Semi-components/navbar";
import Footer from "./footer"
import { Link } from "react-router-dom";


function Ghalas() {
  const [ghalaItems, setGhalaItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  useEffect(() => {
    fetchGhalaData();
  }, []);

  const fetchGhalaData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/services/ghala/');
      setGhalaItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
    <div className="grid grid-cols-3 gap-5 phone pt-12">
      {ghalaItems.map((item) => (
        <div className={`max-w-lg p-6 bg-white border 
        border-gray-200 rounded-lg m-3
        shadow dark:bg-gray-800 dark:border-gray-700 ghala
        `}>
          <>
          
          <a href="#" onClick={handleExpand}>
          <a href="#">
                <img class="rounded-t-lg" src={item.image} alt="" />
            </a>
            <div class="p-3">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{item.title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
        <Link to='/soko/sell/#'>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            View Ghala
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
        </Link>
    </div>
          </a>
        </>
      </div>))};
      </div>
      <Navbar />
      <Footer />
      </div>
  );
}

export default Ghalas;
