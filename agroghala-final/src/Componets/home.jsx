import React from "react";
import Heroimage from "./Semi-components/hero-image";
import About from "./Semi-components/about";
import Previewblogs from "./Semi-components/previewblogs";
import Contacts from "./Semi-components/contacts[1]";
import Navbar from "./Semi-components/navbar";
import Footer from "./Semi-components/footer[1]";

function Homepage() {
  return (
    <div className="">
      <Navbar />
      <Heroimage />
      <About />
      <Previewblogs />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Homepage;
