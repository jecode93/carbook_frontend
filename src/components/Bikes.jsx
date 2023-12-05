import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBikes } from '../redux/Bikes/bikeSlice';
import { Link } from 'react-router-dom';

const Bikes = () => {
  const dispatch = useDispatch();
  const { message, isLoading, error } = useSelector((store) => store.bikes);

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  const truncateText = (text, maxLines) => {
    if (!text) {
      return '';
    }
    const lines = text.split(' ').slice(0, maxLines);
    return lines.join('\n');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full">Loading</div>
    );
  }
  if (error) {
    return (
      <p>
        Something went wrong!
        {error}
      </p>
    );
  }
  if (message) {
    return (
      <div className="flex flex-wrap items-center justify-center p-6 gap-4">
        {message.bikes.map((bike) => (
          <Link to={`/show/${bike.id}`} key={bike.id}>
            <div className="flex flex-col bg-[#f9f9f9] w-[300px] gap-1 border-solid border-2 p-1 rounded-lg border-[#e1e1e1]" key={bike.id}>
              <img src={bike.image} alt="" className="min-h-[300px] rounded-lg" />
              <p className="text-center text-xl font-bold">{bike.name}</p>
              <p className="text-lg">
                {truncateText(bike.description, 20)}
                <span className="text-blue-500 ml-1">Read More...</span>
              </p>
            </div>
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div>No Bikes to show</div>
  );
};

export default Bikes;
