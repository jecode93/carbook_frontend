import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
import { getBikes, deleteBike } from '../redux/Bikes/bikeSlice';
import CircularProgressBar from './CircularprogressBar';

const DeleteCars = () => {
  const userId = Cookies.get('userId');
  const { message, isLoading, error } = useSelector((state) => state.bikes);
  const userBikes = message && message.bikes
    .filter((bike) => bike.user_id === Number(userId));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  const handleDelete = (bikeId) => {
    dispatch(deleteBike(bikeId));
  };

  if (isLoading) {
    return <><CircularProgressBar /></>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  if (userBikes && userBikes.length > 0) {
    return (
      <div className="flex flex-col gap-16 pt-12 items-center w-full p-3">
        <h1 className="font-bold text-2xl">CARS</h1>
        <div className="flex flex-col w-full gap-4">
          {userBikes.map((bike) => (
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

  return (
    <div className="text-lg md:text-2xl font-bold absolute top-[50%]">No Cars to show</div>
  );
};

export default DeleteCars;
