import "./LoginModal.css";

import { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ isOpen, onClose, onLogin, onSignupClick, isLoading }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = formData;
    if (!email.trim() || !password.trim()) {
      return;
    }
    onLogin({ email, password });
  }

  const isSubmitDisabled =
    !formData.email.trim() || !formData.password || isLoading;

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
          value={formData.email}
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
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <div className="login-modal__actions">
        <button
          type="submit"
          className="login-modal__submit"
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
