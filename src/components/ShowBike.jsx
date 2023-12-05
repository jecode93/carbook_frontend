import { useParams } from 'react-router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBikes } from '../redux/Bikes/bikeSlice';

const ShowBike = () => {
  const { id } = useParams();
  console.log(id);
  const dispatch = useDispatch();
  const { message } = useSelector((store) => store.bikes);
  const selectedBike = message.bikes.find((bike) => bike.id.toString() === id);
  console.log(selectedBike.description);
  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);
  return (
    <div className="bg-white p-8 flex flex-col items-center justify-center shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-64">
        <img
          src={selectedBike.image}
          alt="Bike"
          className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-8"
        />
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">{selectedBike.name}</h2>
          <h4 className="text-3sm mb-4">{selectedBike.description}</h4>
          <table className="table-auto border-collapse mb-4">
            <tbody>
              <tr className="border-b bg-slate-200">
                <td className="py-2">Name</td>
                <td className="py-2">{selectedBike.name}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Description</td>
                <td className="py-2">{selectedBike.description}</td>
              </tr>
              <tr className="border-b bg-slate-200">
                <td className="py-2">Price</td>
                <td className="py-2">{selectedBike.price}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-2xl font-bold mb-6">5.9% APR Representative</div>
          <div className="flex justify-center lg:justify-start gap-4">
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md"
            >
              Make Reservation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ShowBike;
