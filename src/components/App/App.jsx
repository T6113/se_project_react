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
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Form } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import { getItems } from "../../utils/api";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

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

    // Add the event listener when a modal is active
    document.addEventListener("keydown", handleEscClose);

    // Clean up the listener when the modal is closed or the component unmounts
    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // Re-run effect when activeModal changes

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemSubmitBtn = ({ name, link, weather }) => {
    setClothingItems((prevItems) => [{ name, link, weather }, ...prevItems]);
    closeActiveModal();
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
        console.log(data);
        //set the clothing items using the data that was returned.
      })
      .catch(console.error);
  }, []);

  //array of data not rendering..
  //data needs to render as cards in both Main & profile components
  // handle data(clothingItems) in Main & profile to render
  return (
    <CurrentTemperatureUnitContext.Provider
      value={{ currentTemperatureUnit, handleToggleSwitchChange }}
    >
      <div className="page">
        <div className="page__content">
          <Header weatherData={weatherData} handleAddClick={handleAddClick} />

          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  currentTemperatureUnit={currentTemperatureUnit}
                  onCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={<Profile onCardClick={handleCardClick} />}
            />
          </Routes>

          <Footer />
        </div>
        <AddItemModal
          isOpen={activeModal === "add-garment"}
          onClose={closeActiveModal}
          onAddItemSubmitBtn={handleAddItemSubmitBtn}
        />
        <ItemModal
          isOpen={activeModal === "preview"}
          card={selectedCard}
          onClose={closeActiveModal}
        />
      </div>
    </CurrentTemperatureUnitContext.Provider>
  );
}

export default App;
