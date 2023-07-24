import React from "react";
import Logo from "../Images/logo.png"

function About() {
  return (
    <div className="px-5">
      <div className="my-5">
        <h1 className="mb-8 text-2xl text-success font-medium">About Us</h1>
        <div className="phone d-flex justify-content-between align-items-center">
          <div className="classical border-solid border-2 border-gray-500 ...">
            <img
              src={Logo}
              alt="agroghala logo"
              className="rounded-sm border-gray-900"
            />
          </div>
          <p className="px-10 text-2xl">
            AgroGhala is a web platform revolutionizing farming in Sub-Saharan
            Africa. We provide farmers with easy access to vital information,
            seamless storage facility rentals, and direct selling opportunities in
            dynamic markets. Our user-friendly interface connects farmers with
            nearby warehouses for secure storage, while our marketplace feature
            connects them with potential buyers. Join AgroGhala and unlock the
            power of technology for a sustainable and prosperous farming future.
            Grow. Store. Sell. With AgroGhala.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default About;
