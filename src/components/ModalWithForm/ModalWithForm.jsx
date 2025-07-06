import "./ModalWithForm.css";
import icon from "../../images/Group.119.svg";

function ModalWithForm({ children, buttonText, title, activeModal, onClose }) {
  return (
    <div
      className={`modal ${
        isOpen ? "modal_opened" : ""
      }isOpen={activeModal === "add-garment"} `}
    >
      <div className="modal__content">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={icon} alt="" className="modal__close-btn" />
        </button>
        <form className="modal__form">
          {children}
          <button type="submit" className="modal__submit">
            {" "}
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
