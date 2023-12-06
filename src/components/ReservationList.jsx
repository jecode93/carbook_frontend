import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayReservation } from '../redux/reservation/reservationSlice';

const ReservationList = () => {
  const dispatch = useDispatch();
  const { display } = useSelector((store) => store.reservation);
  console.log(display);

  useEffect(() => {
    dispatch(displayReservation());
  }, [dispatch]);

  return (
    <div>
      <h1>This is reservation List</h1>
    </div>
  );
};

export default ReservationList;
