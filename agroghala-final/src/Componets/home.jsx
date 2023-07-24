import React, { useState, useEffect} from 'react';
import Navbar from './Semi-components/navbar';
import axios from "axios";
import Background  from './Images/farmer.jpg';
import About from './Semi-components/about';
import Footer from './footer';
import { Link } from 'react-router-dom';

function Homepage() {
  const [blogs, setBlogs] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Fetch the blogs from the backend API
    axios.get('http://127.0.0.1:8000/api/blogs/blogs/')
      .then(response => {
        // Assuming the API returns an array of blogs
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);


  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setAuthenticated(true);
    }
  }, []);
  return (
    <div>
      <div className='position-relative'>
      
      <div className='img-fluid p-0 mt-0 homepage'>
        <img className='absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center' src={Background} alt="background image" />
        
        <div className='position-absolute top-0 end-0 h-100 w-50 text-white text-left'>
          
          <div className='d-flex flex-column justify-content-center h-100 p-5'>
            <h1 className='card-title text-center border-bottom mb-5 pb-3 text-4xl'>AGROGHALA</h1>
            <p className='card-text'>Easily access vital information, seamless rental of storage facilities, and a direct platform to sell your produce in dynamic markets.</p>
            {authenticated ? (
            <div className='flex justify-between items-center mt-8'>
               <Link to='/soko/sell'>
               <a href="#" class="ghala home-buttons d-flex justify-content-between inline-flex items-center px-3 py-2 text-sm font-medium text-center 
               text-white bg-transparent rounded-full focus:ring-4 border-white border-2 rounded-full
               focus:outline-none focus:ring-green-300 dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent">
                  Soko
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>              
              </Link>
              <Link to='/ghala/rent'>
              <a href="#" class="ghala home-buttons d-flex justify-content-between inline-flex items-center px-3 py-2 text-sm font-medium text-center 
               text-white bg-transparent rounded-full hover:bg-transparent focus:ring-4 border-white border-2 rounded-full
               focus:outline-none focus:ring-green-300 dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent">
                  Ghalas
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>                     </Link>
              <Link to='/myghala'>
              <a href="#" class="ghala home-buttons d-flex justify-content-between inline-flex items-center px-3 py-2 text-sm font-medium text-center 
               text-white bg-transparent rounded-full hover:bg-transparent focus:ring-4 border-white border-2 rounded-full
               focus:outline-none focus:ring-green-300 dark:bg-transparent dark:hover:bg-transparent dark:focus:ring-transparent">
                  My Products
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>                     </Link>
              </div> ) : ( <div></div> )
              }
            </div>
        </div>
      </div>
      </div>
      
      <About />
      <div className='bg-green-100 rounded-top-lg py-3'>
      <h1 className="mb-8 text-2xl text-success my-2 mx-5 font-medium"> Some Blogs</h1>
      <div className='px-5 grid grid-cols-3 gap-5'>
      {/* Render only two blogs */}
      {blogs.slice(0, 3).map(blog => (
       <a key={blog.id} className='max-w-lg p-6 bg-white border 
        border-gray-200 rounded-lg m-3
        shadow dark:bg-gray-800 dark:border-gray-700 ghala'>
          {/* Render your blog content here */}
          <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black'>{blog.title}</h2>
          <p>{blog.content}</p>
        </a>
      ))}
    </div>
    <div className='d-flex justify-content-end px-5'>
      <Link to='/blogs'>
        <a type='button' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 
        focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 
        dark:focus:ring-green-800'>
          More blogs
        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </Link>
    </div>
    </div>
    <Navbar />
      <Footer />
    </div>
  )
};

export default Homepage