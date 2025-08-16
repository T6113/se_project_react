import "./EditProfileModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function EditProfileModal({ onClose, isOpen, onUpdateProfile }) {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (isOpen && currentUser) {
      // Fill form with current user data
      setName(currentUser.name || "");
      setAvatar(currentUser.avatar || "");
    }
  }, [isOpen, currentUser]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile({ name, avatar });
  };

  return (
    <ModalWithForm
      title="Change profile data"
      buttonText="Save changes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor="edit-name" className="modal__label">
        Name*{" "}
        <input
          type="text"
          name="name"
          className="modal__input"
          id="edit-name"
          placeholder="Name"
          minLength="1"
          maxLength="30"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <label htmlFor="edit-avatar" className="modal__label">
        Avatar URL{" "}
        <input
          type="url"
          name="avatar"
          className="modal__input"
          id="edit-avatar"
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
          value={avatar}
        />
      </label>
    </ModalWithForm>
  );
}
