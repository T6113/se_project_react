import "./ItemModal.css";
import icon from "../../images/Group_119.svg";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemModal({ isOpen, onClose, card = {}, handleRemoveItem }) {
  const currentUser = useContext(CurrentUserContext);

  // Checking if the current user is the owner of the current clothing item
  const isOwn = card.owner === currentUser?._id;

  const handleDelete = () => {
    if (card._id && handleRemoveItem) {
      handleRemoveItem(card._id);
      // Don't call onClose here - let the parent component handle it after successful deletion
    }
  };

  // Don't render if card is empty/undefined
  if (!card || !card._id) {
    return null;
  }

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content_type_image">
        <button
          onClick={onClose}
          type="button"
          className="modal__close modal__close_preview"
        >
          <img src={icon} alt="close-icon" className="modal__close-btn" />
        </button>
        <img
          src={card.imageUrl || ""}
          alt={card.name || "Item image"}
          className="modal__image"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name || "Unnamed Item"}</h2>
          <p className="modal__weather">Weather: {card.weather || "Unknown"}</p>
          {isOwn && (
            <button className="modal__delete-btn" onClick={handleDelete}>
              Delete Item
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
