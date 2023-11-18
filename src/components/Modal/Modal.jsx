import "./style.scss"

const Modal = ({ isOpen, closeModal, children,variant ,message}) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className={`modal-overlay ${variant ? 'first' :'' } ${message ? 'message' :'' }`}>
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