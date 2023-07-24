import React from 'react'
import Navbar from "./Semi-components/navbar"
import Pricereview from './Semi-components/Pricereview'

function Masoko() {
  return (
    <div className="pt-20 ">
      <Navbar />
      <div className="container mx-auto">
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
        <Pricereview />
      </div>
    </div>
  );
}

export default Masoko