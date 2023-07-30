import React, { useState } from 'react';
import axios from 'axios';

/**
 * CreateBlog Component
 * Renders a form to create a new blog with title and content fields.
 * Uses the Django backend API to submit the blog data and handle CSRF token.
 */
const CreateBlog = () => {
  // State variables to store the form data, error, and success messages
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Fetch CSRF token from the backend
    try {
      const csrfresponse = await axios.get('http://127.0.0.1:8000/api/csrf/');
      const csrfToken = csrfresponse.data.csrfToken;

      // Set CSRF token in Axios headers for secure form submission
      axios.defaults.headers.post['X-CSRFToken'] = csrfToken;

      // Create the blog data object
      const newBlog = {
        title: title,
        content: content,
      };

      // Make a POST request to the backend API to create the blog
      const response = await axios.post(
        'http://127.0.0.1:8000/api/blogs/create-blog/',
        newBlog,
        {
          withCredentials: true, // Include cookies for CSRF protection
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      // Handle the success response
      console.log(response.data);
      setSuccessMessage('Blog created successfully!');
      setError('');
      // You can perform additional actions after successful creation, if needed
    } catch (error) {
      // Handle any errors
      console.error('Error:', error);
      setError('Error creating the blog. Please try again later.');
      setSuccessMessage('');
    }
  };

  // Function to handle title input change
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // Function to handle content input change
  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  // Render the CreateBlog component
  return (
    <div className="mx-auto max-w-lg px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">Create a New Blog</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      {successMessage && <p className="text-green-500 mb-2">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block font-bold mb-1">
            Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block font-bold mb-1">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={handleContentChange}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
            rows="6"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 
          focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
