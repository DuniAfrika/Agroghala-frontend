import React, {useState, useEffect} from "react";
import Navbar from "./Semi-components/navbar";
import axios from "axios";
import Footer from "./footer";

function Sokos() {
  const [sokoItems, setSokoItems] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(true);
  };

  useEffect(() => {
    fetchSokoData();
  }, []);

  const fetchSokoData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/services/soko/');
      setSokoItems(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <>
    <div className="pt-24 grid grid-cols-3 gap-5 px-5">
      {sokoItems.map((item) => (
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
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{item.commodity}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Current Price : {item.current_price}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Price Before : {item.last_price}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            View Soko
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
          </a>
        </>
      </div>))};
      </div>
      <Navbar />
      <Footer />
      </>
  );
}

export default Sokos;
