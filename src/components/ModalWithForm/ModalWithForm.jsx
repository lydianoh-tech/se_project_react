import './ModalWithForm.css';
import React from 'react';
import closeBtn from '../../assets/close-btn.png';

function ModalWithForm(props) {
    return (
        <div className={`modal ${props.isActiveModal ? 'modal__opened' : ''}`}>
            
      <div className="modal__overlay">
            <div className="modal__content">
                <h2 className="modal__title">{props.title}</h2>
                <button
                    type="button"
                    className="modal__close"
                    onClick={props.closeActiveModal}
                > <img src={closeBtn} alt="Close" className="modal__close-icon" />
                   
                </button>
                <form className="modal__form">
                    {props.children}
                    <button type="submit" className="modal__submit-btn">
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
}

export default ModalWithForm;