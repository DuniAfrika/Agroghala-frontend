import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Soko from "./Componets/Soko";
import Ghalas from "./Componets/Ghalas";
import Homepage from "./Componets/home";
import Blogspage from "./Componets/blogspage";
import Login from "./Componets/login";
import Signup from "./Componets/signup";
import Mysokowallet from "./Componets/Mysoko";
import Myghala from "./Componets/Myghala";
import Rentghala from "./Componets/rent";
import Sellcommodity from "./Componets/Sell"
import Contact from './Componets/Semi-components/contacts';
import CreateBlog from './Componets/Semi-components/createblog';
import ChatWidget from './Componets/assistant'; //integration of IBM Watson Assistant chatbot


function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/signin' element={<Login />}></Route>
        <Route path='/soko' element={<Soko />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/soko/sell' element={<Sellcommodity />}></Route>
        <Route path='/blogs' element={<Blogspage />}></Route>
        <Route path='/blogs/create-blog' element={<CreateBlog />}></Route>
        <Route path='/ghala' element={<Ghalas />}></Route>
        <Route path='/ghala/rent' element={<Rentghala />}></Route>
        <Route path='/mysoko' element={<Mysokowallet />}></Route>
        <Route path='/myghala' element={<Myghala />}></Route>
        <Route path='/logout' element={<Homepage />}></Route>
      </Routes>
      <ChatWidget />
     </>
  );
}

export default App;
