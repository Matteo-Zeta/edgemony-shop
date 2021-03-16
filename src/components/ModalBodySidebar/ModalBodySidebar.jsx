import "./ModalBodySidebar.css";



function ModalBodySidebar({ isOpen, closeCartModal, title, children }) {
  return (
    <div className={"ModalBodySidebar" + (isOpen ? " is-open" : "")}>
        <header className="ModalBodySidebar-header">
          <button type="button" onClick={closeCartModal}>X</button>
          <h2>{title}</h2>
        </header>
        {children}
    </div>
  );
}


export default ModalBodySidebar;