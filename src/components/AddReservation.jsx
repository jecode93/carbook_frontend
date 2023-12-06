import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReservation } from '../redux/reservation/reservationSlice';

const AddReservation = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { message } = useSelector((store) => store.bikes);
  const selectedBike = message.bikes && message.bikes.find((bike) => bike.id === Number(id));
  const { reservationMessage, isLoading, error } = useSelector((store) => store.reservation);

  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    date: '',
    bike_id: selectedBike ? selectedBike.id : '',
    city: '',
  });

  const [backgroundImage, setBackgroundImage] = useState(selectedBike ? selectedBike.image : '');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'bike_id') {
      const selectedImage = message.bikes.find((bike) => bike.id === Number(value));
      setBackgroundImage(selectedImage ? selectedImage.image : '');
    }
  };

  const isFormValid = () => (
    formData.date.trim() !== ''
      && formData.bike_id !== ''
      && formData.city.trim() !== ''
  );

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid()) {
      return;
    }
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
    <>
      <div className={`relative flex flex-col h-screen  gap-9 md:gap-6 items-center justify-center p-3 pt-14 w-full text-white bg-cover ${isLoading && 'blur-sm'}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="flex flex-col gap-4 items-center z-20">
          <h2 className="text-center font-bold text-2xl md:text-3xl">Book Your Favourite Bike</h2>
          <p className="text-center md:w-3/4 text-md font-bold">
            There are 34 different versions of Harley Davidson. We have showrooms all over the
            globe which some include test riding facilities. If you wish to
            find out if a test ride is available in your area,
            then choose your date, bike, and location below.
          </p>
        </div>
        <form className=" w-full lg:w-3/4 items-center rounded-lg flex flex-col gap-5 z-20 text-black" onSubmit={handleFormSubmit}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-2 w-[90%]">
            <input
              type="date"
              name="date"
              className="shadow-lg rounded-xl p-1 text-center w-full md:w-1/4"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
            <select name="bike_id" className="shadow-lg rounded-xl p-1 text-center w-full md:w-1/4" value={formData.bike_id} onChange={handleInputChange} required>
              <option value="">Select a Bike</option>
              {message.bikes.map((bike) => (
                <option key={bike.id} value={bike.id}>
                  {bike.name}
                </option>
              ))}
            </select>
            <select name="city" className="shadow-lg rounded-xl p-1 text-center w-full md:w-1/4" value={formData.city} onChange={handleInputChange} required>
              <option value="">Select your Country</option>
              <option>India</option>
              <option>America</option>
              <option>China</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-[30%] md:w-1/4 bg-white hover:bg-[#96bf01] text-[#96bf01] hover:text-white font-bold py-2 px-6 rounded-full shadow-xl"
          >
            Book
          </button>
        </form>
        <div className="absolute bg-[#96bf01] w-full h-full opacity-75 top-0 z-0" />
        {
      isLoading && (
      <span className="absolute top-2/4 left-2/4 font-bold text-2xl">
        Loading....
      </span>
      )
    }
        {(showMessage && reservationMessage.message) && (
        <h2 className="absolute top-2 right-4 p-2 font-bold text-base md:text-lg bg-green-400 rounded-2xl w-[40%] text-white text-center">
          {reservationMessage.message}
        </h2>
        )}

        {(showMessage && error) && (
        <h2 className="absolute top-2 right-4 p-2 font-bold text-base md:text-lg bg-red-600 rounded-2xl w-[40%] text-white text-center">
          {error}
        </h2>
        )}
      </div>
    </>
  );
};

export default AddReservation;
