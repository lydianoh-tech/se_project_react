import "./LoginModal.css";

import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const defaultValues = { email: "", password: "" };

function LoginModal({ isOpen, onClose, onLogin, onSignupClick, isLoading }) {
  const { values, handleChange, resetForm } = useForm(defaultValues);

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    if (!email.trim() || !password.trim()) {
      return;
    }
    onLogin({ email, password });
  }

  const isSubmitDisabled =
    !values.email.trim() || !values.password || isLoading;

  return (
    <ModalWithForm
      title="Log In"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Email
        <input
          className="modal__label_account_info modal__input_text"
          name="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          required
        />
      </label>
      <label className="modal__label">
        Password
        <input
          className="modal__label_account_info modal__input_text"
          name="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </label>
      <div className="login-modal__buttons">
        <button
          type="submit"
          className="modal__submit-btn"
          disabled={isSubmitDisabled}
        >
          Log In
        </button>
        <button
          type="button"
          className="login-modal__switch"
          onClick={onSignupClick}
        >
          or Sign Up
        </button>
      </div>
    </ModalWithForm>
  );
}

export default LoginModal;
