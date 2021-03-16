
import './ModalBodyCenter.css';



function ModalBodyCenter({ isOpen, closeModal, children }) {
  

  return  (
        <div className={`ModalBodyCenter ${ isOpen ? `isOpen` : '' }`}>
        <button type="button" onClick={closeModal}>X</button>
          {children}
        </div>
  )
}
export default ModalBodyCenter;