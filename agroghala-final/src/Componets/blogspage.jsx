import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Semi-components/navbar';
import Footer from './footer';
import CreateBlog from './Semi-components/createblog';
import Image from './Images/blogs.jpg'

const formatDate = (dateString) => {
  // Your existing formatDate function
};

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleCreateBlog = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    // Increase views in the backend for the selected blog
    //axios.put(`http://127.0.0.1:8000/api/blogs/blogs/${blog.id}/increase_views/`);
  };

  return (
    <>
      <div className="container mt-2 mx-0 pt-5">
      <div className="blog-image relative h-screen mb-5">
      <img
        src={Image}
        alt="farmer"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute bottom-4 left-0 right-0 text-white text-left
      ml-12 pl-5
      text-4xl font-bold border-white border-l-4">
        Hear what other farmers have to say today
      </div>
    </div>
        <a
          type="button"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={handleCreateBlog}
        >
          Inform others with a Blog
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>

        <div className="grid grid-cols-3 gap-5 phone">
          {blogs.map((blog) => (
            <div className="" key={blog.id}>
              <div
                className="max-w-lg px-6 pt-3 bg-white border 
              border-gray-200 rounded-lg m-3
              shadow dark:bg-gray-800 dark:border-gray-700 ghala"
              >
                <div className="card-body">
                  <div className="border-bottom mb-2 pb-2 flex justify-between">
                    <h3 className="pl-2 py-1">
                      {blog.author.first_name} {blog.author.last_name}
                    </h3>
                    <p className="text-muted ">{formatDate(blog.date_posted)}</p>
                  </div>
                  <h3 className="card-title fw-bold">{blog.title}</h3>
                  <p className="card-text">{blog.content}</p>
                </div>
                <div className="d-flex justify-content-start p-3">
                  <button
                    onClick={() => handleReadMore(blog)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Read More
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Navbar />
      <Footer />
      {isModalOpen && selectedBlog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="hover:border-white shadow rounded-md backdrop-blur-xl">
            <div className="max-w-lg px-6 pt-3 bg-white border 
            border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
              <div className="card-body">
                <div className="border-bottom mb-2 pb-2 flex justify-between">
                  <h3 className="border-l-2 border-green-500 rounded-full pl-2 py-1">
                    Author : {selectedBlog.author.first_name} {selectedBlog.author.last_name}
                  </h3>
                  <p className="text-muted ">{formatDate(selectedBlog.date_posted)}</p>
                </div>
                <h3 className="card-title fw-bold">{selectedBlog.title}</h3>
                <p className="card-text my-3 scrollable-content">{selectedBlog.content}</p>
              </div>
              <p className='text-sm text-muted border-green-500 border-l-4 pl-5 py-2 my-3'>{selectedBlog.views} Reads</p>
              <div className="d-flex justify-content-start p-3">
                <Link>
                  <a
                  onClick={handleCloseModal}
                    type="button"
                    className="inline-flex items-center px-3 py-2 
                    text-sm font-medium text-center text-white 
                    bg-green-700 rounded-lg hover:bg-green-800 
                    focus:ring-4 focus:outline-none focus:ring-green-300 
                    dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Close
                    <svg
                      className="w-3.5 h-3.5 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogsPage;
