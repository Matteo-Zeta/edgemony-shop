import './Errorbanner.css';

function Errorbanner({ isError, retryCall, setRetryCall }) {

  return  isError ? (
  <div className="Errorbanner">
      <strong>{isError}</strong>
      <button type='button' onClick={()=>setRetryCall(!retryCall)}>Try again</button>
    </div>
  ) : null
}

export default Errorbanner;