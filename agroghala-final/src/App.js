import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Soko from "./Componets/Soko";
import Ghalas from "./Componets/Ghalas";
import Homepage from "./Componets/home";
import Blogspage from "./Componets/blogspage";
import Login from "./Componets/login";
import Signup from "./Componets/signup";
import Masokowallet from "./Componets/Masokowallet";
import Ghaladetailview from "./Componets/ghaladetailview";
import Api from "./Componets/Semi-components/api";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/test" element={<Api />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/soko" element={<Soko />} />
      <Route path="/blogs" element={<Blogspage />} />
      <Route path="/ghala" element={<Ghalas />}>
        <Route path="1" element={<Ghaladetailview />} />
      </Route>
      <Route path="/mysoko" element={<Masokowallet />} />
      <Route path="/logout" element={<Homepage />} />
    </Routes>
  );
}

export default App;
