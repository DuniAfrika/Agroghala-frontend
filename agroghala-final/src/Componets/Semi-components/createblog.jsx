import React, { useState } from 'react';

// Define the getCookie function
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const csrftoken = getCookie('csrftoken');

    const newBlog = {
      title: title,
      content: content,
    };

    fetch('http://localhost:8000/api/blogs/blogs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(newBlog),
    })
      .then((response) => {
        // Check if the response is successful (status code 2xx)
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Handle the success response here
        console.log(data);
        setSuccessMessage('Blog created successfully!');
        setError('');
        // You can perform additional actions after successful creation, if needed
      })
      .catch((error) => {
        // Handle any errors here
        console.error('Error:', error);
        setError('Error creating the blog. Please try again later.');
        setSuccessMessage('');
      });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

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
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
