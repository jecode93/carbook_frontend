import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBikes } from '../redux/Bikes/bikeSlice';

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

  const leftClick = () => {
    const box = document.querySelector('.carosoul');
    box.scrollLeft -= 310;
  };

  const rightClick = () => {
    const box = document.querySelector('.carosoul');
    box.scrollLeft += 310;
  };

  if (isLoading) {
    return <div className="flex items-center justify-center w-full">Loading</div>;
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
      <div className="relative flex flex-col overflow-hidden w-full items-center justify-center p-6 gap-8">
        <div className="p-4 carosoul flex overflow-x-hidden w-full scroll-smooth gap-4">
          {message.bikes.map((bike) => (
            <Link to={`/show/${bike.id}`} key={bike.id}>
              <div className="flex flex-col bg-[#F9F9F9] w-[300px] gap-1 border-solid border-2 p-1 rounded-lg border-[#E1E1E1]" key={bike.id}>
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
        <div className="flex items-center gap-5">
          <button type="button" className="absolute top-[50%] left-1 p-2 border-2 bg-white font-bold rounded-full shadow-2xl" onClick={leftClick}>
            &lt;
          </button>
          <button type="button" className="absolute top-[50%] right-1 p-2 border-2 bg-white font-bold rounded-full shadow-2xl" onClick={rightClick}>
            &gt;
          </button>
        </div>
      </div>
    );
  }

  return <div>No Bikes to show</div>;
};

export default Bikes;