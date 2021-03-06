import './Modal.css';



function Modal({ isOpen, closeModal, children }) {
  

  return  (
    <div className={`Modal ${ isOpen ? `isOpen` : '' }`}>
      <div className="overlay" onClick={closeModal} />
      {children}
    </div>
  )
}
export default Modal;