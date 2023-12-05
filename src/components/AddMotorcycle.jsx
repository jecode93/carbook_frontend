import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBike } from '../redux/Bikes/bikeSlice';
import '../App.css';

const AddMotorcycle = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [file, setFile] = useState('');
  const [description, setDescription] = useState('');
  const [deposit, setDeposit] = useState('');
  const [financeFee, setFinanceFee] = useState('');
  const [optionToPurchaseFee, setOptionToPurchaseFee] = useState('');
  const [totalAmountPayable, setTotalAmountPayable] = useState('');
  const [duration, setDuration] = useState('');

  const handleAddingMotorcycle = () => {
    const data = new FormData();
    data.append('name', name);
    data.append('image', file);
    data.append('description', description);
    data.append('deposit', deposit);
    data.append('finance_fee', financeFee);
    data.append('option_to_purchase_fee', optionToPurchaseFee);
    data.append('total_amount_payable', totalAmountPayable);
    data.append('duration', duration);
    // for (const pair of data.entries()) {
    //   console.log(`${pair[0]}, ${pair[1]}`);
    // }
    dispatch(createBike({ data }));
    // console.log('dispatched');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFileChange = () => {
    setFile('Hello');
    // setFile(e.target.files[0]);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDepositChange = (e) => {
    setDeposit(e.target.value);
  };

  const handleFinanceFeeChange = (e) => {
    setFinanceFee(e.target.value);
  };

  const handleOptionToPurchaseFeeChange = (e) => {
    setOptionToPurchaseFee(e.target.value);
  };

  const handleTotalAmountPayableChange = (e) => {
    setTotalAmountPayable(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  return (
    <>
      <div className="create-container">
        <h1 className="h1">Add Motorcycle</h1>
        <p className="create-p-tage">Name</p>
        <input
          className="create-input-tag"
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
        />
        <p className="create-p-tage">Choose File</p>
        <input
          className="create-input-tag"
          type="file"
          onChange={handleFileChange}
          placeholder="File"
        />
        <p className="create-p-tage">Description</p>
        <textarea
          className="create-textarea-tag"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Description"
          rows={2}
        />
        <p className="create-p-tage">Deposit</p>
        <input
          className="create-input-tag"
          type="number"
          value={deposit}
          onChange={handleDepositChange}
          min={0}
          placeholder="00.00"
        />
        <p className="create-p-tage">Finance fee</p>
        <input
          className="create-input-tag"
          type="number"
          value={financeFee}
          onChange={handleFinanceFeeChange}
          min={0}
          placeholder="00.00"
        />
        <p className="create-p-tage">Option to Purchase Fee</p>
        <input
          className="create-input-tag"
          type="number"
          value={optionToPurchaseFee}
          onChange={handleOptionToPurchaseFeeChange}
          min={0}
          placeholder="00.00"
        />
        <p className="create-p-tage">Total Amount Payable</p>
        <input
          className="create-input-tag"
          type="number"
          value={totalAmountPayable}
          onChange={handleTotalAmountPayableChange}
          min={0}
          placeholder="00.00"
        />
        <p className="create-p-tage">Duration</p>
        <input
          className="create-input-tag"
          type="number"
          value={duration}
          onChange={handleDurationChange}
          min={0}
          placeholder="00"
        />
        <button
          type="button"
          onClick={handleAddingMotorcycle}
          className="create-button-tag"
        >
          ADD
        </button>
      </div>
    </>
  );
};

export default AddMotorcycle;
