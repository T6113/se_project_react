import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../../utils/constants";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import {
  getItems,
  addItem,
  deleteItem,
  updateProfile,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import { signup, signin, checkToken } from "../../utils/auth";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add authentication state
  const [currentUser, setCurrentUser] = useState(null); // Add current user state

  const handleToggleSwitchChange = () => {
    setCurrentTemperatureUnit(currentTemperatureUnit === "F" ? "C" : "F");
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };
  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]);

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleEditProfileClick = () => {
    setActiveModal("edit-profile");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleSignOut = () => {
    // Remove JWT token from localStorage
    localStorage.removeItem("jwt");
    // Set user as logged out
    setIsLoggedIn(false);
    // Clear current user data
    setCurrentUser(null);
  };

  const handleRegister = ({ email, password, name, avatar }) => {
    signup({ email, password, name, avatar })
      .then(() => {
        return signin({ email, password });
      })
      .then((res) => {
        // Store JWT token and set user as logged in
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        // Get user data after successful login
        return checkToken(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Registration failed:", err);
      });
  };

  // Login handler function
  const handleLogin = ({ email, password }) => {
    signin({ email, password })
      .then((res) => {
        // Check that server gave access and store token
        localStorage.setItem("jwt", res.token);
        setIsLoggedIn(true);
        // Get user data after successful login
        return checkToken(res.token);
      })
      .then((userData) => {
        setCurrentUser(userData);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Login failed:", err);
      });
  };

  // Update profile handler function
  const handleUpdateProfile = ({ name, avatar }) => {
    const token = localStorage.getItem("jwt");
    updateProfile({ name, avatar }, token)
      .then((updatedUser) => {
        setCurrentUser(updatedUser);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Profile update failed:", err);
      });
  };

  // Handle card like/unlike functionality
  const handleCardLike = ({ id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        addCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        removeCardLike(id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  const handleAddItemSubmitBtn = ({ name, imageUrl, weather }) => {
    const token = localStorage.getItem("jwt");
    addItem({ name, imageUrl, weather }, token)
      .then((newItem) => {
        setClothingItems((prevItems) => [newItem, ...prevItems]);
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleRemoveItem = (id) => {
    const token = localStorage.getItem("jwt");
    deleteItem(id, token)
      .then((deletedItem) => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== id)
        );
        // Optionally close modal or show feedback
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filterdata = filterWeatherData(data);

        setWeatherData(filterdata);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  // Check for existing token on app load
  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      checkToken(token)
        .then((userData) => {
          // Token is valid, user is logged in
          setIsLoggedIn(true);
          setCurrentUser(userData);
        })
        .catch(() => {
          // Token is invalid, remove it
          localStorage.removeItem("jwt");
          setIsLoggedIn(false);
          setCurrentUser(null);
        });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page">
          <div className="page__content">
            <Header
              weatherData={weatherData}
              handleAddClick={handleAddClick}
              handleRegisterClick={handleRegisterClick}
              handleLoginClick={handleLoginClick}
              isLoggedIn={isLoggedIn}
            />

            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    currentTemperatureUnit={currentTemperatureUnit}
                    onCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onCardDelete={handleRemoveItem}
                    onCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      onCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      onCardDelete={handleRemoveItem}
                      onEditProfile={handleEditProfileClick}
                      onAddItem={handleAddClick}
                      onCardLike={handleCardLike}
                      onSignOut={handleSignOut}
                      isLoggedIn={isLoggedIn}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>

            <Footer />
          </div>
          <AddItemModal
            isOpen={activeModal === "add-garment"}
            onClose={closeActiveModal}
            onAddItemSubmitBtn={handleAddItemSubmitBtn}
          />
          <RegisterModal
            isOpen={activeModal === "register"}
            onClose={closeActiveModal}
            onRegister={handleRegister}
          />
          <LoginModal
            isOpen={activeModal === "login"}
            onClose={closeActiveModal}
            onLogin={handleLogin}
          />
          <EditProfileModal
            isOpen={activeModal === "edit-profile"}
            onClose={closeActiveModal}
            onUpdateProfile={handleUpdateProfile}
          />
          <ItemModal
            isOpen={activeModal === "preview"}
            card={selectedCard}
            onClose={closeActiveModal}
            handleRemoveItem={handleRemoveItem}
          />
        </div>
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;
