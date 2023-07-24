import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateBlog() {
  const [formdata, setFormData] = useState({
    author: currentUser,
    title: '',
    content: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
   // Assuming you have the currentUser data stored in localStorage
   const currentUser = JSON.parse(localStorage.getItem('user'));

  const handleInputChange = (event) => {
    setFormData({ ...formdata, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formdata.title) {
      setError({
        field: 'title',
        message: 'Enter a title',
      });
      return;
    }
    if (!formdata.content) {
      setError({
        field: 'content',
        message: 'Some content please',
      });
      return;
    }
    try {

      // Post the blog data to the backend
      const response = await axios.post('http://your-backend-api-url/api/blogs/blogs/',
        formdata
      );

      if (response.status === 201) {
        setSuccessMessage('Blog posted successfully!');
        // Redirect to another page after successful blog posting
        navigate('/blogs');
      } else {
        setErrorMessage('Unable to post blog');
      }
    } catch (error) {
      console.error('Error posting blog:', error);
      setErrorMessage('An error occurred while posting the blog');
    }
  };

  return (
    <div className="d-flex items-center justify-center">
      <div className="card shadow p-3">
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <Link to="/">
          <h2 className="font-medium pb-3">AGROGHALA</h2>
        </Link>
        <legend className="border-bottom text-center mb-3 text-muted">Post your Blog</legend>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={formdata.title}
              onChange={handleInputChange}
              placeholder="Title"
              required
            />
          </div>
          <div className="mb-2">
            <label htmlFor="content" className="form-label">
              Content
            </label>
            <textarea
              className="form-control"
              name="content"
              value={formdata.content}
              onChange={handleInputChange}
              rows="4"
              placeholder="Inform other farmers with a blog..."
              required
            ></textarea>
          </div>

          <div className="mt-5 flex items-center justify-start gap-y-6 px-5 row">
            <button
              type="submit"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white border-gray-900"
            >
              Post Blog <span aria-hidden="true" className="ml-2">→</span>
            </button>
            <Link to="/blogs">
              <button className="text-sm text-center font-semibold leading-6 text-gray-900">
                Cancel
              </button>
            </Link>
          </div>
        </form>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
      </div>
    </div>
  );
}

export default CreateBlog;
