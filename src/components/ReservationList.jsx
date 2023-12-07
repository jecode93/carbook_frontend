import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayReservation } from '../redux/reservation/reservationSlice';
import { getBikes } from '../redux/Bikes/bikeSlice';

const ReservationList = () => {
  const dispatch = useDispatch();
  const { display, isLoading } = useSelector((store) => store.reservation);
  const { message } = useSelector((store) => store.bikes);

  useEffect(() => {
    dispatch(getBikes());
    dispatch(displayReservation());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full">Loading</div>
    );
  }

  if (display) {
    return (
      <div className="flex flex-col gap-6 p-4 items-center w-full">
        <h1 className="font-bold text-2xl mb-8">My Reservatons</h1>
        {display.message.map((reserve) => {
          const bike = message.bikes && message.bikes.find((bike) => bike.id === reserve.bike_id);
          return (
            <div className="flex gap-3 border w-full  md:w-3/4 p-4 items-center justify-between shadow-xl rounded-xl" key={reserve.id}>
              <h2 className="font-bold">{bike && bike.name}</h2>
              <p>{reserve.city}</p>
              <p>{reserve.date}</p>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div>No Reservation to show</div>
  );
};

export default ReservationList;
