import './Loader.css';

function Loader({ isLoading }) {

  return isLoading ? (
    <div className="Loader">
      <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  ) : null;
}

export default Loader;