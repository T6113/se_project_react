import "./ConfirmDeleteModal.css";
import icon from "../../images/Group_119.svg";

function ConfirmDeleteModal({ isOpen, onClose, onConfirm }) {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content_type_delete-confirm">
        <button
          onClick={onClose}
          type="button"
          className="modal__close_type_delete-confirm"
        >
          <img
            src={icon}
            alt="close-btn"
            className="modal__close-btn_type_delete-confirm"
          />
        </button>
        <div className="modal__text_type_delete-confirm">
          Are you sure you want to delete this item?
          <br />
          This action is irreversible.
        </div>
        <button
          className="modal__button_type_delete-confirm modal__button_type_delete-confirm_action_delete"
          onClick={handleConfirm}
          type="button"
        >
          Yes, delete item
        </button>
        <button
          className="modal__button_type_delete-confirm modal__button_type_delete-confirm_action_cancel"
          onClick={handleCancel}
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
