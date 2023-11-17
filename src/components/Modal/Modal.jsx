import "./style.scss"

const Modal = ({ isOpen, closeModal, children,variant }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className={`modal-overlay ${variant ? 'first' :''} `}>
        <div className="modal-content">
          <span className="close-btn" onClick={closeModal}>
            &times;
          </span>
          {children}
        </div>
      </div>
    );
  };

  export default Modal;