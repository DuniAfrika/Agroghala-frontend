import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Soko from "./Componets/Soko";
import Ghalas from "./Componets/Ghalas";
import Homepage from "./Componets/home";
import Blogspage from "./Componets/blogspage";
 import Login from "./Componets/login";
 import Signup from "./Componets/signup";
import Masokowallet from "./Componets/Masokowallet";

function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/soko' element={<Soko />}></Route>
        <Route path='/blogs' element={<Blogspage />}></Route>
        <Route path='/ghala' element={<Ghalas />}></Route>
        <Route path='/mysoko' element={<Masokowallet />}></Route>
        <Route path='/logout' element={<Homepage />}></Route>
      </Routes>
     </>
  );
}

export default App;
