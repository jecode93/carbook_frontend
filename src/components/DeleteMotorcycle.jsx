import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBikes, deleteBike } from '../redux/Bikes/bikeSlice';

const DeleteMotorcycle = () => {
  const { message, isLoading, error } = useSelector((state) => state.bikes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  const handleDelete = (bikeId) => {
    dispatch(deleteBike(bikeId));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (message) {
    return (
      <div className="flex flex-col gap-6 p-4 items-center w-full">
        <h1 className="font-bold text-2xl mb-8">My Reservations</h1>
        {message.bikes.map((bike) => {
          return (
            <div key={bike.id}>
              <h2>{bike.name}</h2>
              <p>{bike.total_amount_payable}</p>
              <button onClick={() => handleDelete(bike.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    );
  }

  return <div>No Bikes Add the Bike first</div>;
};

export default DeleteMotorcycle;
