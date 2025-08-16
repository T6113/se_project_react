import "./SideBar.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SideBar({ onEditProfile, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  // Create avatar placeholder with first letter of name
  const getAvatarPlaceholder = (name) => {
    if (!name) return "?";
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="sidebar__container">
      <div className="sidebar__header">
        {currentUser?.avatar ? (
          <img
            className="sidebar__avatar"
            src={currentUser.avatar}
            alt={currentUser.name}
          />
        ) : (
          <div className="sidebar__avatar-placeholder">
            {getAvatarPlaceholder(currentUser?.name)}
          </div>
        )}
        <p className="sidebar__username">{currentUser?.name}</p>
      </div>
      <button
        onClick={onEditProfile}
        className="sidebar__edit-btn"
        type="button"
      >
        Edit profile
      </button>
      <button
        onClick={onSignOut}
        className="sidebar__signout-btn"
        type="button"
      >
        Sign out
      </button>
    </div>
  );
}

export default SideBar;
