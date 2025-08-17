import "./ModalWithForm.css";
import icon from "../../images/Group_119.svg";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_add-btn">
        <h2 className="modal__title">{title}</h2>
        <button onClick={onClose} type="button" className="modal__close">
          <img src={icon} alt="close-btn" className="modal__close-btn" />
        </button>
        <form onSubmit={onSubmit} className="modal__form">
          {children}
          <div className="modal__submit-btn">
            <button type="submit" className="modal__submit">
              {" "}
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
