import "./EditProfileModal.css";
import { useState, useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import icon from "../../images/Group_119.svg";

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

  const isFormValid = name.trim() !== "";

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content_type_editprofile">
        <h2 className="modal__title_type_editprofile">Change profile data</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close_type_editprofile"
        >
          <img
            src={icon}
            alt="close-btn"
            className="modal__close-btn_type_editprofile"
          />
        </button>
        <form onSubmit={handleSubmit} className="modal__form_type_editprofile">
          <label htmlFor="edit-name" className="modal__label_type_editprofile">
            Name*{" "}
            <input
              type="text"
              name="name"
              className="modal__input_type_editprofile"
              id="edit-name"
              placeholder="Name"
              minLength="1"
              maxLength="30"
              required
              onChange={handleNameChange}
              value={name}
            />
          </label>
          <label
            htmlFor="edit-avatar"
            className="modal__label_type_editprofile"
          >
            Avatar URL*{" "}
            <input
              type="url"
              name="avatar"
              className="modal__input_type_editprofile"
              id="edit-avatar"
              placeholder="Avatar URL"
              onChange={handleAvatarChange}
              value={avatar}
            />
          </label>
          <div className="modal__submit-btn_type_editprofile">
            <button
              type="submit"
              className="modal__submit_type_editprofile"
              disabled={!isFormValid}
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
