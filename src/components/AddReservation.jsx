import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBikes } from '../redux/Bikes/bikeSlice';

const AddReservation = () => {
  const dispatch = useDispatch();
  const { message } = useSelector((store) => store.bikes);
  console.log(message.bikes);

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-6 items-center justify-center p-3 w-full">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-center font-bold text-3xl">Book Your Favourite Bike</h2>
        <p className="text-center w-2/4 text-lg">
          There are 34 different versions of Harley Davidson. We have showrooms all over the
          globe which some include test riding facilities. If you wish to
          find out if a test ride is available in your area,
          then choose your date, bike, and location below.
        </p>
      </div>
      <form className="w-[50%] bg-gray-300 p-8 rounded-lg flex flex-col gap-5">
        <input
          type="date"
          name="date"
          className="shadow-lg rounded-xl p-1 text-center"
        />
        <select name="bike" className="shadow-lg rounded-xl p-1 text-center">
          <option value="">Select a Bike</option>
          {message.bikes.map((bike) => (
            <option key={bike} value={bike}>
              {bike.name}
            </option>
          ))}
        </select>
        <select name="country" className="shadow-lg rounded-xl p-1 text-center">
          <option value="">Select your Country</option>
          <option>
            India
          </option>
          <option>
            America
          </option>
          <option>
            China
          </option>
        </select>
        <button type='submit'>Book</button>
      </form>
    </div>
  );
};

export default AddReservation;
