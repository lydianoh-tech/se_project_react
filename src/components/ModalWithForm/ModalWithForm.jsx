import './ModalWithForm.css';
import React from 'react';

function ModalWithForm(props) {
    return (
        <div className={`modal ${props.isActiveModal ? 'modal__opened' : ''}`}>
            <div className="modal__content">
                <h2 className="modal__title">{props.title}</h2>
                <button
                    type="button"
                    className="modal__close"
                    onClick={props.closeActiveModal}
                >Close
                   
                </button>
                <form className="modal__form">
                    {props.children}
                    <button type="submit" className="modal__submit">
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ModalWithForm;