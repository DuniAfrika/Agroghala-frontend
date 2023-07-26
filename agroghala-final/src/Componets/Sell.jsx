import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Semi-components/navbar';
import Footer from './footer';
import Fruit from './Images/fruits.jpg'
import Checkout from './sell-checkout'

function Sell() {
  const [sokoItems, setSokoItems] = useState([]);
  const [selectedSoko, setSelectedSoko] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleSokoClick = (item) => {
    setSelectedSoko(item);
  };

  const handleSellButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div class="bg-white">
        {selectedSoko ? (
          <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-12 lg:px-12">
          <div class="relative isolate overflow-hidden bg-green-700 px-24 pt-16 shadow-2xl sm:rounded-3xl 
          sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:pr-24 lg:pl-5 lg:pt-0 lg:mt-5">
            <svg viewBox="0 0 1024 1024" class="absolute -translate-x-1/2 -translate-y-1/2 -z-0 h-[64rem] w-[64rem] -translate-y-1/2 
            [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 
            lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#008000" /> {/* Green */}
                    <stop offset="1" stopColor="#FFFFFF" /> {/* White */}
                </radialGradient>
                </defs>
              </svg>
              <div class="mx-auto max-w-md text-left lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">You Selected<br />{selectedSoko.commodity}</h2>
                <p class="mt-6 text-lg leading-8 text-gray-300">Current Price : Ksh {selectedSoko.current_price} per 90kg bag</p>
                <p class="mt-6 text-lg leading-8 text-gray-300">Last Price : Ksh {selectedSoko.last_price} per 90kg bag</p>
                <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <button class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 
                    shadow-sm hover:bg-gray-100 focus-visible:outline rent-buttons
                    focus-visible:outline-2 focus-visible:outline-offset-2 
                    focus-visible:outline-white" onClick={handleSellButtonClick}>Sell</button>
                </div>
              </div>
              <div class="relative mt-16 h-80 lg:mt-8">
                <img class="absolute left-[-250px] top-0 w-[57rem] max-w-none rounded-lg shadow bg-white/5 ring-1 ring-white/10" src={Fruit} alt="App screenshot" width="1824" height="1080" />
            </div>
            </div>
          </div>
        ) : null}
        <div className="grid grid-cols-3 gap-5 phone">
          {sokoItems.map((item) => (
            <div
              className={`max-w-lg p-6 bg-white border 
              border-gray-200 rounded-lg m-3
              shadow dark:bg-gray-800 dark:border-gray-700 ghala
              `}
              onClick={() => handleSokoClick(item)} // Add the onClick handler to handle ghala click
              key={item.id} // Don't forget to add the key prop
            >
              <>
                <a href="#">
                  <img class="rounded-t-lg" src={item.image} alt="" />
                </a>
                <div class="p-3">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{item.commodity}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Current Price : Ksh {item.current_price} per 90kg bag</p>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Last Price : Ksh {item.last_price} per 90kg bag</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
                  text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none 
                  focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    View
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                  </a>
                </div>
              </>
            </div>
          ))}
        </div>
        {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white hover:border-white shadow p-8 rounded-md">
            <Checkout selectedSoko={selectedSoko} onClose={handleCloseModal} />
          </div>
        </div>
      )}
        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default Sell;
