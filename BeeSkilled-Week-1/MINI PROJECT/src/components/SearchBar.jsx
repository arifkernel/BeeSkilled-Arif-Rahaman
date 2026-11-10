
function SearchBar({ search, setSearch }) {
  return (
    <div className="search-box">

      <span>⌕</span>

      <input
        type="text"
        placeholder="Search football stories, leagues, teams..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && (
        <button onClick={() => setSearch("")}>
          CLEAR
        </button>
      )}

    </div>
  );
}

export default SearchBar;
