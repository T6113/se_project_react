import "./RegisterModal.css";
import { useState, useEffect } from "react";
import icon from "../../images/Group_119.svg";

export default function RegisterModal({
  onClose,
  isOpen,
  onRegister,
  onLoginClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
      setErrorMessage("");
    }
  }, [isOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage(""); // Clear error when user types
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    setErrorMessage("");
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name, avatar }).catch(() => {
      setErrorMessage(
        "Registration failed. Please check your information and try again."
      );
    });
  };

  const handleLoginClick = () => {
    onLoginClick();
  };

  const isFormValid =
    email.trim() !== "" &&
    password.trim() !== "" &&
    name.trim() !== "" &&
    avatar.trim() !== "";

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content_type_register">
        <h2 className="modal__title_type_register">Sign Up</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close_type_register"
        >
          <img
            src={icon}
            alt="close-btn"
            className="modal__close-btn_type_register"
          />
        </button>
        <form onSubmit={handleSubmit} className="modal__form_type_register">
          {errorMessage && (
            <div className="modal__error_type_register">{errorMessage}</div>
          )}
          <label
            htmlFor="register-email"
            className="modal__label_type_register"
          >
            Email*{" "}
            <input
              type="email"
              name="email"
              className="modal__input_type_register"
              id="register-email"
              placeholder="Email"
              required
              onChange={handleEmailChange}
              value={email}
            />
          </label>
          <label
            htmlFor="register-password"
            className="modal__label_type_register"
          >
            Password*{" "}
            <input
              type="password"
              name="password"
              className="modal__input_type_register"
              id="register-password"
              placeholder="Password (min 6 characters)"
              minLength="6"
              required
              onChange={handlePasswordChange}
              value={password}
            />
          </label>
          <label htmlFor="register-name" className="modal__label_type_register">
            Name*{" "}
            <input
              type="text"
              name="name"
              className="modal__input_type_register"
              id="register-name"
              placeholder="Name (2-30 characters)"
              minLength="2"
              maxLength="30"
              required
              onChange={handleNameChange}
              value={name}
            />
          </label>
          <label
            htmlFor="register-avatar"
            className="modal__label_type_register"
          >
            Avatar URL*{" "}
            <input
              type="url"
              name="avatar"
              className="modal__input_type_register"
              id="register-avatar"
              placeholder="https://example.com/avatar.jpg"
              required
              onChange={handleAvatarChange}
              value={avatar}
            />
          </label>
          <div className="modal__submit-btn_type_register">
            <button
              type="submit"
              className="modal__submit_type_register"
              disabled={!isFormValid}
            >
              Sign Up
            </button>
            <button
              type="button"
              className="modal__login-link_type_register"
              onClick={handleLoginClick}
            >
              or Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
