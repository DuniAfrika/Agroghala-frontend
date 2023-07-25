import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RentCheckout({ selectedSoko, onClose }) {
  const { commodity } = selectedSoko;
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    soko: selectedSoko,
    bags_sold: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  

  const handleInputChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  };  

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.bags_sold) {
      setError({
        field: 'bags_sold',
        message: 'Enter number of bags',
      });
      return;
    }

    try {
      
      const response = await axios.post(
        'http://127.0.0.1:8000/api/myproducts/mysoko/',
        formData
      );

      if (response.status === 201) {
        setMessage(`Successfully rented Ghala ${commodity}`);
        navigate('/ghala/rent');
      } else {
        setErrorMessage(`Unable to rent Ghala ${commodity}`);
      }
    } catch (error) {
      console.error('Unable to rent Ghala:', error);
      setErrorMessage('A problem occurred while renting your Ghala. Please try again later.');
    }
  };

  return (
    <div className='text-white'>
      <form onSubmit={handleFormSubmit}>
        <div>
          <Link to="/">
            <h2 className="font-medium pb-3 text-green-500">AGROGHALA</h2>
          </Link>
          <legend className='font-medium'>Sell - {commodity}</legend>
          <div>
            <label className='my-2'>Bags</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={formData.bags_sold}
            onChange={handleInputChange}
            placeholder="Number of bags"
            required
          />
          </div>
          <div className='mt-3'>
          <button type="submit" className='text-white mr-5'>Checkout</button>
          <button className="rounded-md btn btn-danger" onClick={onClose}>
                Cancel
        </button>
          </div>
        </div>
      </form>
    </div>
  );
}
