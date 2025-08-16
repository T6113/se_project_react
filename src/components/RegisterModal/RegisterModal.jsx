import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

export default function RegisterModal({ onClose, isOpen, onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setName("");
      setAvatar("");
    }
  }, [isOpen]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      title="Sign Up"
      buttonText="Sign Up"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="register-email" className="modal__label">
        Email*{" "}
        <input
          type="email"
          name="email"
          className="modal__input"
          id="register-email"
          placeholder="Email"
          required
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <label htmlFor="register-password" className="modal__label">
        Password*{" "}
        <input
          type="password"
          name="password"
          className="modal__input"
          id="register-password"
          placeholder="Password"
          minLength="6"
          required
          onChange={handlePasswordChange}
          value={password}
        />
      </label>
      <label htmlFor="register-name" className="modal__label">
        Name*{" "}
        <input
          type="text"
          name="name"
          className="modal__input"
          id="register-name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="register-avatar" className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="register-avatar"
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}
