import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { getBikes } from '../redux/Bikes/bikeSlice';

const Bikes = () => {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  // const [transformValue, setTransformValue] = useState(0);
  const { message, isLoading, error } = useSelector((store) => store.bikes);

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  // useEffect(() => {
  //   setTransformValue((message.bikes.length - 3) * 16.66 - currentSlide * 33.33);
  // }, [currentSlide, message.bikes.length]);

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % message.bikes.length);
    }, message.bikes.length > 1 ? 3000 : null);

    return () => clearInterval(interval);
  }, [currentSlide, message.bikes.length]);

  // const goToSlide = (index) => {
  //   setCurrentSlide(index);
  // };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % message.bikes.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + message.bikes.length) % message.bikes.length,
    );
  };

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
      <div className="flex items-center justify-center z-0 overflow-hidden">
        <div className="flex md:flex-wrap flex-col overflow-x-hidden items-center justify-center p-4 gap-4">
          <div className="flex items-center gap-4" style={{ transform: `translateX(-${currentSlide * 33.33}%)` }}>
            {message.bikes.map((bike, index) => (
              <div
                key={bike.id}
                className={`transform transition-transform duration-300 ${
                  index >= currentSlide && index < currentSlide + 1
                    ? 'opacity-100 scale-100'
                    : 'opacity-50 scale-75'
                }`}
              >
                <Link to={`/show/${bike.id}`} key={bike.id}>
                  <div
                    className="flex flex-col items-center relative bg-[#F9F9F9] w-[300px] h-full gap-1 border-solid border-2 p-1 rounded-lg border-[#E1E1E1]"
                    key={bike.id}
                  >
                    <img
                      src={bike.image}
                      alt=""
                      className="min-h-[300px] rounded-lg"
                    />
                    <p className="text-center text-xl mb-5 font-bold">{bike.name}</p>
                    <p className="h-full mb-10">
                      {truncateText(bike.description, 10)}
                    </p>
                    <p className="text-blue-500 absolute bottom-2">Read More...</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex gap-10 items-center justify-center mt-10">
            <div // eslint-disable-line jsx-a11y/no-static-element-interactions
              onKeyDown={handlePrevSlide}
              onClick={handlePrevSlide}
              className="transform -translate-y-1/2 cursor-pointer text-2xl"
            >
              <FcPrevious />
            </div>
            <div // eslint-disable-line jsx-a11y/no-static-element-interactions
              onKeyDown={handleNextSlide}
              onClick={handleNextSlide}
              className="transform -translate-y-1/2 cursor-pointer text-2xl"
            >
              <FcNext />
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>No Bikes to show</div>
  );
};
export default Bikes;
