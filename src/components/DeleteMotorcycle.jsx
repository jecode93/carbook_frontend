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
      <div className="flex flex-col gap-16 pt-12 items-center w-full p-3">
        <h1 className="font-bold text-2xl">BIKES</h1>
        <div className="flex flex-col w-full gap-4">
          {message.bikes.map((bike) => (
            <div className="flex flex-row justify-between items-center bg-[#F9F9F9] w-full gap-1 border-solid border-2 p-1 rounded-lg border-[#E1E1E1]" key={bike.id}>
              <img src={bike.image} alt="" className="max-w-[100px] min-w-[60px] rounded-lg" />
              <p className="text-center md:text-xl font-bold">{bike.name}</p>
              <button type="submit" className="primary py-2 px-4 rounded bg-red-600 font-bold text-white" onClick={() => handleDelete(bike.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <div>No Bikes Add the Bike first</div>;
};

export default DeleteMotorcycle;
