import { useParams } from 'react-router';
import React from 'react';

const ShowBike = () => {
  const { id } = useParams();
  console.log(id)

  return (
    <div>
      <h1>This is show page</h1>
    </div>
  );
};

export default ShowBike;