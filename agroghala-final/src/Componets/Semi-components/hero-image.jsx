import React from "react";
import Heropic from "../Images/smiley.jpg";

function Heroimage() {
  return (
  <div class="card bg-dark text-white">
  <img class="card-img" src={Heropic} alt="happy farmers" />
  <div class="card-img-overlay d-flex justify-content-end align-items-center row">
    <h5 class="card-title text-center border-bottom">AGROGHALA</h5>
    <p class="card-text">Easily access vital information, seamless rental of storage
          facilities, and a direct platform to sell your produce in dynamic
          markets.</p>
    </div>
  </div>
  );
}

export default Heroimage;
