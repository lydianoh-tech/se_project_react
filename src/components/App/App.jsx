import React from 'react';
import './App.css';

import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm"; 

function App() {
  const [weatherData, setweatherData] = React.useState({type:""});
  const [isActiveModal, setIsActiveModal] = React.useState("");
  return (
    <div className="page">
      <div className="page__content">
        <Header/> 
        <Main/>{}
      </div>
      <ModalWithForm >
        title = "New Garrment"
        buttonText = "Add Garrment"
        isActiveModal={isActiveModal}
        setIsActiveModal={setIsActiveModal}
        weatherData={weatherData}
                <form action="" className="modal__form">
                <label  htmlFor="name" className="modal__label"> Name

                    
                    <input type="text" className="modal__input" name="name" placeholder='Name' required />
                </label>
                <label htmlFor="imageurl" className="modal__label"> Name{' '}
                    <input type="text" className="modal__input" id ="imageurl" name="imageurl" placeholder="Image URL"
                        
                     required />
                </label>
                <fieldset className='modal__radio-buttons'>
                    <legend className='modal__legend'>Select the weather type</legend>
                    <label htmlFor="hot" className="modal__label modal__label-type-radio">
                        <input type="radio" className="modal__radio" id="cold" name="weather-type" value="hot" required />
                        Hot
                    </label><label htmlFor="warm" className="modal__label modal__label-type-radio">
                        <input type="radio" className="modal__radio" id="cold" name="weather-type" value="hot" required />
                        warm
                    </label>
                    <label htmlFor="cold" className="modal__label modal__label-type-radio">
                        <input type="radio" className="modal__radio" id="cold" name="weather-type" value="hot" required />
                        Cold
                    </label>
                    
                </fieldset></form></ModalWithForm>
    </div>
    
    
  ); 
}

export default App;