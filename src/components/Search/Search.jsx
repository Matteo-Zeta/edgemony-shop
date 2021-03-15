
import "./Search.css";

function Search({ onSearch }) {
  return (
    <div className="Search">
      <i className="fas fa-search"></i>
      <input
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search here..."
        type="search"
      />
    </div>
  );
}


export default Search;

