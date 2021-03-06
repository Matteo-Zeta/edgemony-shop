import './Errorbanner.css';

function Errorbanner({ isError, retryCall, setRetryCall }) {

  return  isError ? (
  <div className="Errorbanner">
      <strong>Ops!</strong> Somethings goes wrong :(
      <button type='button' onClick={()=>setRetryCall(!retryCall)}>Try again</button>
    </div>
  ) : null
}

export default Errorbanner;