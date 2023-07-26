import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RentCheckout({ selectedGhala, onClose }) {
  const { title } = selectedGhala;
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    ghala: selectedGhala,
    bags_sold: '',
    duration_of_storage: '',
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  
  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.bags) {
      setError({
        field: 'bags',
        message: 'Enter number of bags',
      });
      return;
    }
    if (!formData.duration || formData.duration < 3) {
      setError({
        field: 'duration',
        message: 'Enter a valid duration. Hint: should be more than 3 months',
      });
      return;
    }

    try {

      const response = await axios.post(
        'http://localhost:8000/api/myproducts/myghala/',
        formData
      );

      if (response.status === 201) {
        setMessage(`Successfully rented Ghala ${title}`);
        navigate('/ghala/rent');
      } else {
        setErrorMessage(`Unable to rent Ghala ${title}`);
      }
    } catch (error) {
      console.error('Unable to rent Ghala:', error);
      setErrorMessage('A problem occurred while renting your Ghala. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <Link to="/">
            <h2 className="font-medium pb-3 text-green-500">AGROGHALA</h2>
          </Link>
          <legend className='font-medium'>Rent - {title}</legend>
          <div>
            <label className='my-2'>Bags</label>
          <input
            type="text"
            className="form-control"
            name="bags_sold"
            value={formData.bags_sold}
            onChange={handleInputChange}
            placeholder="Number of bags"
            required
          />
          </div>
          <div>
            <label className='my-2'>Duration of storage(months)</label>
          <input
            type="text"
            className="form-control"
            name="duration_of_storage"
            value={formData.duration_of_storage}
            onChange={handleInputChange}
            placeholder="Duration"
            required
          />
          </div>
          <div className='mt-3'>
          <button type="submit" className='mr-5'>Checkout</button>
          <button className="rounded-md btn btn-danger" onClick={onClose}>
                Cancel
        </button>
          </div>
          
        </div>
      </form>
    </div>
  );
}
