import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBike } from '../redux/Bikes/bikeSlice';
import '../App.css';
/* eslint-disable jsx-a11y/label-has-associated-control, jsx-a11y/label-has-for */

const AddMotorcycle = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: '',
    deposit: '',
    finance_fee: '',
    option_to_purchase_fee: '',
    total_amount_payable: '',
    duration: '',
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name.trim()
      || !formData.image
      || !formData.description
      || !formData.deposit
      || !formData.finance_fee
      || !formData.option_to_purchase_fee
      || !formData.duration
      || !formData.total_amount_payable
    ) {
      alert('Please fill all the fields.');
      return;
    }
    dispatch(createBike(formData));
    setFormData({
      name: '',
      image: '',
      description: '',
      deposit: '',
      finance_fee: '',
      option_to_purchase_fee: '',
      total_amount_payable: '',
      duration: '',
    });
  };
  return (
    <div className="container-div">
      <form className="create-container" onSubmit={handleSubmit}>
        <h2 className="h1">Add New Bike</h2>
        <label className="create-p-tag">Bike Name</label>
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={formData.name}
          onChange={handleInputChange}
          className="create-input-tag"
        />
        <label className="create-p-tag">Bike Image</label>
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleInputChange}
          className="create-input-tag"
        />
        <label className="create-p-tag">Description</label>
        <input
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          cols={4}
          className="create-input-tag"
          rows="10"
        />
        <label className="create-p-tag">Deposit</label>
        <input
          type="number"
          min={0}
          name="deposit"
          autoComplete="deposit"
          value={formData.deposit}
          onChange={handleInputChange}
          className="create-input-tag"
        />
        <label className="create-p-tag">Finance Fees</label>
        <input
          type="number"
          min={0}
          name="finance_fee"
          autoComplete="finance_fee"
          value={formData.finance_fee}
          onChange={handleInputChange}
          className="create-input-tag"
        />
        <label className="create-p-tag">Option to Purchase Fee</label>
        <input
          type="number"
          min={0}
          name="option_to_purchase_fee"
          autoComplete="option_to_purchase_fee"
          value={formData.option_to_purchase_fee}
          onChange={handleInputChange}
          className="create-input-tag"
        />
        <label className="create-p-tag">Total amount Payable</label>
        <input
          type="number"
          min={0}
          name="total_amount_payable"
          autoComplete="total_amount_payable"
          value={formData.total_amount_payable}
          onChange={handleInputChange}
          className="create-input-tag"
        />
        <label className="create-p-tag">Duration</label>
        <input
          type="number"
          min={0}
          name="duration"
          autoComplete="duration"
          value={formData.duration}
          onChange={handleInputChange}
          className="create-input-tag"
        />
        <button className="create-button-tag" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddMotorcycle;
