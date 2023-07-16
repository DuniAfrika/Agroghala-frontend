import React from 'react'
import Viewproductheroimage from './Semi-components/viewproducthero'
import Navbar from "./Semi-components/navbar"
import Productcard from "./Semi-components/productcard"


function Viewsoko() {
  return (
    <div>
      <Navbar />
      <Viewproductheroimage />
      <div className='container grid grid-cols-3 gap-4 m-auto'>
        <Productcard product="RICE"/>
        <Productcard product="MAIZE"/>
        <Productcard product="SORGHUM"/>
        <Productcard product="PENUTS"/>
        <Productcard product="BEANS"/>
        <Productcard product="POTATOES"/>
        <Productcard product="DRIED YAMS"/>
        <Productcard product="MWEA RICE"/>
        <Productcard product="GREEN GRAMS"/>
         
      </div>
    </div>
  );
}

export default Viewsoko