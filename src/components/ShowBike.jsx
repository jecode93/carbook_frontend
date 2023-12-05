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
    <div className="bg-white p-8 flex flex-col md:flex-row items-center justify-center w-full">
      <div className="flex flex-col flex-wrap md:flex-row gap-8 w-full items-center justify-center pt-8">
        <img
          src={selectedBike.image}
          alt="Bike"
          className="w-[500px] shadow-2xl rounded-lg"
        />
        <div className="md:w-[50%]">
          <h2 className="text-3xl font-bold mb-4">{selectedBike.name}</h2>
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
                <td className="py-2">Deposit</td>
                <td className="py-2">{selectedBike.deposit}</td>
              </tr>
              <tr className="border-b ">
                <td className="py-2">Finance Fee</td>
                <td className="py-2">{selectedBike.finance_fee}</td>
              </tr>
              <tr className="border-b bg-slate-200">
                <td className="py-2">Option To Purchase Fees</td>
                <td className="py-2">{selectedBike.option_to_purchase_fee}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Duration</td>
                <td className="py-2">{selectedBike.duration}</td>
              </tr>
              <tr className="border-b bg-green-200 font-bold">
                <td className="py-2">Price</td>
                <td className="py-2">{selectedBike.total_amount_payable}</td>
              </tr>
            </tbody>
          </table>
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
