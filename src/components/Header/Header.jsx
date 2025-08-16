import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  handleRegisterClick,
  handleLoginClick,
  isLoggedIn,
}) {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  // Create avatar placeholder with first letter of name
  const getAvatarPlaceholder = (name) => {
    if (!name) return "?";
    return name.charAt(0).toUpperCase();
  };

  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="WTWR Logo" />
      </Link>

      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <div className="header__add-section">
        <ToggleSwitch />

        {isLoggedIn ? (
          <button
            onClick={handleAddClick}
            type="button"
            className="header__clothes-btn"
          >
            + Add clothes
          </button>
        ) : (
          <div className="header__auth-buttons">
            <button
              onClick={handleLoginClick}
              type="button"
              className="header__clothes-btn"
            >
              Log In
            </button>
            <button
              onClick={handleRegisterClick}
              type="button"
              className="header__clothes-btn"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>

      {isLoggedIn && currentUser && (
        <Link to="/profile" className="header__link">
          <div className="header__user-container">
            <p className="header__username">{currentUser.name}</p>
            {currentUser.avatar ? (
              <img
                src={currentUser.avatar}
                alt={currentUser.name}
                className="header__avatar"
              />
            ) : (
              <div className="header__avatar-placeholder">
                {getAvatarPlaceholder(currentUser.name)}
              </div>
            )}
          </div>
        </Link>
      )}
    </header>
  );
}

export default Header;
