import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Semi-components/navbar';
import Footer from './footer';
import Farm from './Images/farm.jpg';
import Checkout from './rent-checkout'

function Rent() {
  const [ghalaItems, setGhalaItems] = useState([]);
  const [selectedGhala, setSelectedGhala] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleGhalaClick = (item) => {
    setSelectedGhala(item);
  };

  const handleRentButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div class="bg-white">
        {selectedGhala ? (
          <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-12 lg:px-8">
            <div class="relative isolate overflow-hidden bg-green-700 px-24 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:pr-24 lg:pl-5 lg:pt-0">
              <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stopColor="#008000" /> {/* Green */}
                    <stop offset="1" stopColor="#FFFFFF" /> {/* White */}
                </radialGradient>
                </defs>
              </svg>
              <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">{selectedGhala.title}</h2>
                <p class="mt-6 text-lg leading-8 text-gray-300 text-left">{selectedGhala.description}</p>
                <div className='flex justify-start mt-3 font-bold'>
                <button className='text-white mr-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg> {selectedGhala.contact}</button>
                <button className='text-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg> {selectedGhala.email}</button>
                </div>
                <div className='text-white text-left font-bold flex justify-start row'>
                <p className='mt-2'>Start Price : Ksh {selectedGhala.start_price}</p>
                <p>Rent Price : Ksh {selectedGhala.rent_price} per month</p>
                </div>
                <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm rent-buttons
                  font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline 
                  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" onClick={handleRentButtonClick}>Rent</a>
                </div>
              </div>
              <div class="relative mt-16 h-80 lg:mt-8">
                <img 
                class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src={Farm}
                alt='farm image'
                width="1824" height="1080"
                 />
              </div>
            </div>
          </div>
        ) : null}
        <div className="grid grid-cols-3 gap-5 phone">
          {ghalaItems.map((item) => (
            <div
              className={`max-w-lg p-6 bg-white border 
              border-gray-200 rounded-lg m-3
              shadow dark:bg-gray-800 dark:border-gray-700 ghala
              `}
              onClick={() => handleGhalaClick(item)} // Add the onClick handler to handle ghala click
              key={item.id} // Don't forget to add the key prop
            >
              <>
                <a href="#">
                  <img class="rounded-t-lg" src={item.image} alt="" />
                </a>
                <div class="p-3">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{item.title}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                    View Ghala
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
          <div className="backdrop-blur-xl hover:border-white shadow p-8 rounded-md">
            <Checkout selectedGhala={selectedGhala} onClose={handleCloseModal} />
          </div>
        </div>
      )}
        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default Rent;
