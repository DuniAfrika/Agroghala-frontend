import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function RentCheckout({ selectedSoko, onClose }) {
  const { commodity, current_price } = selectedSoko;
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

  const CalculatedAmount = formData.bags_sold * current_price;

  const formattedAmount = CalculatedAmount.toLocaleString(); // Formats the number with commas

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
        setMessage(`Successfully sell ${commodity}`);
        navigate('/soko/sell');
      } else {
        setErrorMessage(`Unable to sell ${commodity}`);
      }
    } catch (error) {
      console.error('Unable to sell Commodity:', error);
      setErrorMessage('A problem occurred while renting your Ghala. Please try again later.');
      navigate('/soko/sell')
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          <Link to="/">
            <h2 className="font-medium pb-3 text-green-500">AGROGHALA</h2>
          </Link>
          <legend className='font-medium'>Sell - {commodity}</legend>
          <p className='py-2 text-muted border-l-4 border-green-500 pl-2'>Current Price - Ksh {current_price} per 90kg bag</p>
          <div>
            <label className='my-2'>Number of Bags</label>
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
            <p className='border-b-2 pb-2 border-green-500 mt-3'>Amount to be accredited: Ksh {formattedAmount}</p>
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
