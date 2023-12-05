import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBikes } from '../redux/Bikes/bikeSlice';
import { createReservation } from '../redux/reservation/reservationSlice';

const AddReservation = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((store) => store.bikes);
  const { reservationMessage, isLoading } = useSelector((store) => store.reservation);

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    bike_id: '',
    city: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(createReservation(formData));
    setFormData({
      date: '',
      bike_id: '',
      city: '',
    });
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 5000);
  };

  return (
    <div className={`flex flex-col gap-6 items-center justify-center p-3 w-full ${isLoading && 'blur'}`}>
      {showMessage && (
        <h2 className="absolute top-2 right-4 p-2 font-bold text-lg bg-red-400 rounded-2xl w-[40%] text-white text-center">
          {reservationMessage.message}
        </h2>
      )}
      {
        isLoading && (
        <span className="absolute">Loading</span>
        )
      }
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-center font-bold text-3xl">Book Your Favourite Bike</h2>
        <p className="text-center w-2/4 text-lg">
          There are 34 different versions of Harley Davidson. We have showrooms all over the
          globe which some include test riding facilities. If you wish to
          find out if a test ride is available in your area,
          then choose your date, bike, and location below.
        </p>
      </div>
      <form className="w-[50%] bg-gray-300 p-8 rounded-lg flex flex-col gap-5" onSubmit={handleFormSubmit}>
        <input
          type="date"
          name="date"
          className="shadow-lg rounded-xl p-1 text-center"
          value={formData.date}
          onChange={handleInputChange}
        />
        <select name="bike_id" className="shadow-lg rounded-xl p-1 text-center" value={formData.bike_id} onChange={handleInputChange}>
          <option value="">Select a Bike</option>
          {message.bikes.map((bike) => (
            <option key={bike.id} value={bike.id}>
              {bike.name}
            </option>
          ))}
        </select>
        <select name="city" className="shadow-lg rounded-xl p-1 text-center" value={formData.city} onChange={handleInputChange}>
          <option value="">Select your Country</option>
          <option>India</option>
          <option>America</option>
          <option>China</option>
        </select>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default AddReservation;
