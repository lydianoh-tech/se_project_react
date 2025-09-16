import ModalWithForm from "../ModalWithForm/ModalWithForm"
import useForm from "../../hooks/useForm";

import React, { useState } from "react";
import './AddItemModal.css';

const AddItemModal = ({ isOpen, onAddItem, onClose }) => {
  const defaultValues = { 
    name: "", imageUrl: "", weatherType: "" 
  };
  console.log(defaultValues.imageUrl);
  const{values, handleChange } = useForm(defaultValues, );

const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(values,imageUrl);
    onClose(); 
  };

  return (
    <ModalWithForm
      title="New garment"
      name="new-card"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="modal__label">
        Name
        <input 
        type="text" 
        className="modal__input modal__input_type_card-name" 
        id="name" 
        name="name" 
        placeholder="Name"
        minLength="1" 
        maxLength="30" 
        value={values.name} 
        onChange={handleChange}
        required />
      </label>
      <label htmlFor="imageurl" className="modal__label">
            Image URL
            <input 
            type="text" 
            className="modal__input modal__input_type_card-url" 
            id="imageUrl" 
            name="imageUrl" 
            placeholder="Image URL" 
            value={values.imageUrl} 
            onChange={handleChange}
            required />
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type</legend>
            <label htmlFor="hot" className="modal__label modal__label_type_radio">
              <input
                type="radio"
                className="modal__radio"
                id="hot"
                name="weatherType"
                value="hot"
                checked={values.weatherType === "hot"}
                onChange={handleChange}
                required
              />
              <span className="modal__custom-radio"></span>
              Hot
            </label>
            <label htmlFor="warm" className="modal__label modal__label_type_radio">
              <input
                type="radio"
                className="modal__radio"
                id="warm"
                name="weatherType"
                value="warm"
                checked={values.weatherType === "warm"}
                onChange={handleChange}
                required
              />
              <span className="modal__custom-radio"></span>
              Warm
            </label>
            <label htmlFor="cold" className="modal__label modal__label_type_radio">
              <input
                type="radio"
                className="modal__radio"
                id="cold"
                name="weatherType"
                value="cold"
                checked={values.weatherType === "cold"}
                onChange={handleChange}
                required
              />
              <span className="modal__custom-radio"></span>
              Cold
            </label>
          </fieldset>
    </ModalWithForm>
  );
};


  
export default AddItemModal;