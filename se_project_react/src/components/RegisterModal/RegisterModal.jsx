import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect } from "react";
import { useForm } from "../../hooks/useForm";

const defaultValues = {
  email: "",
  password: "",
  name: "",
  avatar: "",
};

export default function RegisterModal({
  title,
  onClose,
  isOpen,
  onRegisterModalSubmit,
  onLoginClick,
  isLoading,
}) {
  const { values, handleChange, resetForm } = useForm(defaultValues);

  useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegisterModalSubmit({
      email: values.email,
      password: values.password,
      name: values.name,
      avatar: values.avatar,
    });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-email" className="modal__label">
        Email*
        <input
          type="email"
          className="modal__input"
          id="register-email"
          name="email"
          placeholder="Email"
          required
          onChange={handleChange}
          value={values.email}
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password*
        <input
          type="password"
          className="modal__input"
          id="register-password"
          name="password"
          placeholder="Password"
          required
          onChange={handleChange}
          value={values.password}
        />
      </label>
      <label htmlFor="register-name" className="modal__label">
        Name*
        <input
          type="text"
          className="modal__input"
          id="register-name"
          name="name"
          placeholder="Name"
          required
          onChange={handleChange}
          value={values.name}
        />
      </label>
      <label htmlFor="register-avatar" className="modal__label">
        Avatar URL
        <input
          type="url"
          className="modal__input"
          id="register-avatar"
          name="avatar"
          placeholder="Avatar URL"
          onChange={handleChange}
          value={values.avatar}
        />
      </label>
      <div className="register-modal__actions">
        <button
          type="submit"
          className="register-modal__submit"
          disabled={
            !values.email || !values.password || !values.name || isLoading
          }
        >
          Sign Up
        </button>
        <button
          type="button"
          className="register-modal__switch"
          onClick={onLoginClick}
        >
          or Log In
        </button>
      </div>
    </ModalWithForm>
  );
}
