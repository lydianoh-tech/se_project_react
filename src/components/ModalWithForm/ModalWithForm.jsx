import './ModalWithForm.css';
import React, { Children } from 'react';
function ModalWithForm(props) {
    return (

        <div className={`modal ${isActiveModal ? 'modal__opened' : ''}`}>
            <div className="modal__content"><h2 className="modal__title">New Garrment</h2>
                <button type="button" className="modal__close">CLOSE
                </button>
            <form className="modal__form">
                {props.children}
                
                <button type="submit" className="modal__submit">Add Garrment</button>


            </form>
            </div>
        </div>
    );
}
export default ModalWithForm;