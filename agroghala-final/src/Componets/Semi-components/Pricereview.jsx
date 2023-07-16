import React from 'react'
import Prof from "../Images/image 5 (2).png"

function Pricereview() {
  return (
    <div className="flex items-center p-2 mb-8 rounded-lg shadow-xl">
      <div className="w-16 h-16 mr-8 overflow-hidden bg-black rounded-full">
        <img src={Prof} alt="profile" />
      </div>
      <div>
        <p className="text-green-500">PRICE</p>
        <p className="text-red-500">Today: Ksh. 9,000</p>
        <p>Yesterday: Ksh. 8,000</p>
        <p className="text-red-500">Trend: &#8593;</p>
      </div>
    </div>
  );
}

export default Pricereview