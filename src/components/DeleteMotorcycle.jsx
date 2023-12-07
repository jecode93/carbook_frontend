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
      <div className="flex flex-col gap-6 p-4 m-4 items-center w-full">
        <h1 className="font-bold text-2xl mb-8">My Reservations</h1>
        <div className="flex flex-row p-5">
          {message.bikes.map((bike) => {
            return (
              <div className="flex flex-col bg-[#F9F9F9] w-[300px] gap-1 border-solid border-2 p-1 m-4 rounded-lg border-[#E1E1E1]" key={bike.id}>
                <img src={bike.image} alt="" className="min-h-[300px] rounded-lg" />
                <p className="text-center text-xl font-bold">{bike.name}</p>
                <button className="primary py-2 px-4 rounded" onClick={() => handleDelete(bike.id)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return <div>No Bikes Add the Bike first</div>;
};

export default DeleteMotorcycle;
