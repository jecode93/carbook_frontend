import React from 'react'

const DeleteMotorcycle = () => {
    const { message } = useSelector((store) => store.bikes);
    if (message) {
      return (
        <div className="flex flex-col gap-6 p-4 items-center w-full">
          <h1 className="font-bold text-2xl mb-8">My Reservatons</h1>
          {message.bikes.map((bike) => {
            return (
              <div key={reserve.id}>
                <h2 >{bike.name}</h2>
                <p>{bike.total_amount_payable}</p>
              </div>
            );
          })}
        </div>
      );
    }
    return (
      <div>No Bikes Add the Bike first</div>
    );
}

export default DeleteMotorcycle