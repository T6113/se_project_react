import "./AddItemModal.css";
import { useState, useEffect } from "react";
import icon from "../../images/Group_119.svg";

export default function AddItemModal({ onClose, isOpen, onAddItemSubmitBtn }) {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [weather, setWeather] = useState("");

  useEffect(() => {
    if (isOpen) {
      setName("");
      setImageUrl("");
      setWeather("");
    }
  }, [isOpen]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleWeatherChange = (e) => {
    setWeather(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItemSubmitBtn({ name, imageUrl, weather });
  };

  const isFormValid =
    name.trim() !== "" && imageUrl.trim() !== "" && weather !== "";

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content_type_additem">
        <h2 className="modal__title_type_additem">New garment</h2>
        <button
          onClick={onClose}
          type="button"
          className="modal__close_type_additem"
        >
          <img
            src={icon}
            alt="close-btn"
            className="modal__close-btn_type_additem"
          />
        </button>
        <form onSubmit={handleSubmit} className="modal__form_type_additem">
          <label htmlFor="add-item-name" className="modal__label_type_additem">
            Name{" "}
            <input
              type="text"
              name="name"
              className="modal__input_type_additem"
              id="add-item-name"
              placeholder="Name"
              minLength="1"
              maxLength="30"
              required
              onChange={handleNameChange}
              value={name}
            />
          </label>
          <label
            htmlFor="add-item-imageUrl"
            className="modal__label_type_additem"
          >
            Image{" "}
            <input
              type="url"
              name="imageUrl"
              className="modal__input_type_additem"
              id="add-item-imageUrl"
              placeholder="Image URL"
              required
              onChange={handleImageUrlChange}
              value={imageUrl}
            />
          </label>
          <fieldset className="modal__radio-fieldset_type_additem">
            <legend className="modal__legend_type_additem">
              Select the weather type:
            </legend>
            <label
              htmlFor="add-item-hot"
              className="modal__label_type_additem modal__label_radio_type_additem"
            >
              <input
                id="add-item-hot"
                type="radio"
                name="weatherType"
                className="modal__radio-input_type_additem"
                value="hot"
                onChange={handleWeatherChange}
                checked={weather === "hot"}
              />{" "}
              Hot
            </label>
            <label
              htmlFor="add-item-warm"
              className="modal__label_type_additem modal__label_radio_type_additem"
            >
              <input
                id="add-item-warm"
                type="radio"
                name="weatherType"
                className="modal__radio-input_type_additem"
                value="warm"
                onChange={handleWeatherChange}
                checked={weather === "warm"}
              />{" "}
              Warm
            </label>
            <label
              htmlFor="add-item-cold"
              className="modal__label_type_additem modal__label_radio_type_additem"
            >
              <input
                id="add-item-cold"
                type="radio"
                name="weatherType"
                className="modal__radio-input_type_additem"
                value="cold"
                onChange={handleWeatherChange}
                checked={weather === "cold"}
              />{" "}
              Cold
            </label>
          </fieldset>
          <div className="modal__submit-btn_type_additem">
            <button
              type="submit"
              className="modal__submit_type_additem"
              disabled={!isFormValid}
            >
              Add garment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
