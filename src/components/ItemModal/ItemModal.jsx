import "./ItemModal.css";
import icon from "../../images/Group_119.svg";

function ItemModal({ isOpen, onClose, card, handleRemoveItem }) {
  const handleDelete = () => {
    handleRemoveItem(card._id);
    onClose();
  };

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
          src={card.imageUrl}
          alt="preview-picture"
          className="modal__image"
        />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather">Weather: {card.weather}</p>
          <button className="modal__delete-btn" onClick={handleDelete}>
            Delete Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
