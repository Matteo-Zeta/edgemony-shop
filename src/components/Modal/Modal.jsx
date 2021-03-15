
import './Modal.css';



function Modal({ isOpen, closeModal, children }) {
  

  return  (
    <div className={`Modal ${ isOpen ? `isOpen` : '' }`}>
      <div className="overlay" onClick={()=>closeModal} />
        <div className="modal-body">
        <button type="button" onClick={closeModal}>X</button>
          {children}
        </div>
    </div>
  )
}
export default Modal;