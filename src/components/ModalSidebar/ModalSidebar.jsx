import "./ModalSidebar.css";



function ModalSidebar({ isOpen, setCartIsOpen, title, children }) {
  return (
    <div className={"ModalSidebar" + (isOpen ? " is-open" : "")}>
      <div
        className="ModalSidebar-overlay"
        onClick={() => setCartIsOpen(false)}
      />
      <div className="ModalSidebar-body">
        <header className="ModalSidebar-header">
          <h2>{title}</h2>
        </header>
        {children}
      </div>
    </div>
  );
}


export default ModalSidebar;