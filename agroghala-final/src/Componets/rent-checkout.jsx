import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const calculateAmountToPay = (startPrice, rentPrice, bagsSold, duration) => {
  const totalRentPrice = startPrice + (rentPrice * bagsSold * duration);
  return totalRentPrice;
};

export default function RentCheckout({ selectedGhala, onClose }) {
  const { title, start_price, rent_price, id } = selectedGhala;
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    ghala: selectedGhala.ghala,
    bags_sold: '',
    duration_of_storage: '',
  });
  const [error, setError] = useState(null);
  const [showAmountModal, setShowAmountModal] = useState(false);
  const [amountToPay, setAmountToPay] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!formData.bags_sold) {
      setError({
        field: 'bags',
        message: 'Enter number of bags',
      });
      return;
    }
    if (!formData.duration_of_storage || formData.duration_of_storage < 3) {
      setError({
        field: 'duration',
        message: 'Enter a valid duration. Hint: should be more than 3 months',
      });
      return;
    }

    // Calculate the amount to be paid
    const amount = calculateAmountToPay(
      start_price,
      rent_price,
      formData.bags_sold,
      formData.duration_of_storage
    );

    setAmountToPay(amount.toLocaleString);
    setShowAmountModal(true);
  };

  const handleConfirmPayment = async () => {
    try {
      setIsLoading(true);

      const response = await axios.post(
        `http://127.0.0.1:8000/api/myproducts/myghala/${id}/rent`, // Use backticks here
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        setMessage(`Successfully rented Ghala ${title}`);
        navigate('/ghala/rent');
      } else {
        setErrorMessage(`Unable to rent Ghala ${title}`);
      }

      setIsLoading(false);
      setShowAmountModal(false);
    } catch (error) {
      console.error('Unable to rent Ghala:', error);
      setErrorMessage('A problem occurred. Please try again later.');
      setIsLoading(false);
    }
  };

  return (
    <div className='w-200'>
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
            {error && error.field === 'bags' && (
              <p className="text-red-500">{error.message}</p>
            )}
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
            {error && error.field === 'duration' && (
              <p className="text-red-500">{error.message}</p>
            )}
          </div>
          <div className='mt-3'>
            <div className='flex content-start row border-green-500 border-l-2 py-1 font-medium'>
              <h3 className='mb-1 border-b-2 border-green-500 pb-2'>
                Ksh {start_price + rent_price * formData.bags_sold * formData.duration_of_storage} first month
              </h3>
              <h3>
                Ksh {rent_price * formData.bags_sold * formData.duration_of_storage} for remaining months
              </h3>
            </div>
            <div className='flex mt-3 justify-content-around row grid grid-cols-1 gap-3'>
              <button
                className='mr-3 bg-green-600 hover:bg-green-800 p-2 text-white rounded-xl 
          hover:shadow hover:rounded-xl'
                onClick={handleConfirmPayment}
                disabled={isLoading}
              >
                {isLoading ? 'Loading...' : 'Confirm Payment'}
              </button>
              <button
                className="rounded-md mr-3 bg-red-600 hover:bg-red-800 p-2 text-white rounded-xl"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Modal to display the amount to be paid */}
      {showAmountModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Display the amount to be paid */}
            <h2>Total Amount to Pay: Ksh {amountToPay}</h2>
            {/* Add a confirm button to proceed with the payment */}
            <button onClick={handleConfirmPayment}>Confirm Payment</button>
          </div>
        </div>
      )}

      {/* Success and Error Messages */}
      {message && <p className="text-green-500">{message}</p>}
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
}
