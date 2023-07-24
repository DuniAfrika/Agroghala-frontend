import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Semi-components/navbar';
import Footer from './footer';

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/blogs/blogs/');
      setBlogs(response.data);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return (
    <>
    <div className="container mt-2 px-5">
        <Link to="/blogs/create-blog">
        <a type='button' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 
                  focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 
                  dark:focus:ring-green-800'>
                    Inform others with a Blog
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
        </Link>
      
      <div className="grid grid-cols-3 gap-5 phone">
      
        {blogs.map((blog) => (
          
          <div className="" key={blog.id}>
            <div className="max-w-lg px-6 pt-3 bg-white border 
        border-gray-200 rounded-lg m-3
        shadow dark:bg-gray-800 dark:border-gray-700 ghala">
              <div className="card-body">
                <h3 className="card-title fw-bold">{blog.title}</h3>
                <p className="card-text">{blog.content}</p>
              </div>
              <div className='d-flex justify-content-start p-3'>
                <Link>
                  <a type='button' className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 
                  focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 
                  dark:focus:ring-green-800'>
                    Read More
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                      </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Navbar />
    <Footer />
    </>
  );
};

export default BlogsPage;
