import React from 'react'
import Morebtn from './morebtn';

function Contacts() {
  return (
    <div className="p-6 mb-20">
      <h1 className="mb-8 text-4xl text-green-500 underline ">Contact Us</h1>
      <div className="flex justify-center">
        <div className="w-1/2 p-6 border rounded-lg h-80 ">
          <input
            type="textarea"
            placeholder="Please reach out to us..."
            className="w-full h-full p-8 outline-none"
          />
          <Morebtn action="Send" />
        </div>
      </div>
    </div>
  )
}

export default Contacts