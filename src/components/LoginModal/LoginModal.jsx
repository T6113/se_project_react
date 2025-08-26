import "./LoginModal.css";
import { useState, useEffect } from "react";
import icon from "../../images/Group_119.svg";

export default function LoginModal({
  onClose,
  isOpen,
  onLogin,
  onRegisterClick,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setErrorMessage("");
    }
  }, [isOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password }).catch(() => {
      setErrorMessage("Email or password incorrect");
    });
  };

  const handleSignUpClick = () => {
    onRegisterClick();
  };

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content_type_login">
        <h2 className="modal__title_type_login">Log In</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close_type_login"
        >
          <img
            src={icon}
            alt="close-btn"
            className="modal__close-btn_type_login"
          />
        </button>
        <form onSubmit={handleSubmit} className="modal__form_type_login">
          <label htmlFor="login-email" className="modal__label_type_login">
            Email*{" "}
            <input
              type="email"
              name="email"
              className="modal__input_type_login"
              id="login-email"
              placeholder="Email"
              required
              onChange={handleEmailChange}
              value={email}
            />
          </label>
          <label htmlFor="login-password" className="modal__label_type_login">
            Password*{" "}
            <input
              type="password"
              name="password"
              className="modal__input_type_login"
              id="login-password"
              placeholder="Password"
              required
              onChange={handlePasswordChange}
              value={password}
            />
          </label>
          {errorMessage && (
            <div className="modal__error_type_login">{errorMessage}</div>
          )}
          <div className="modal__submit-btn_type_login">
            <button
              type="submit"
              className="modal__submit_type_login"
              disabled={!isFormValid}
            >
              Log In
            </button>
            <button
              type="button"
              className="modal__signup-link_type_login"
              onClick={handleSignUpClick}
            >
              or Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
