

const SearchBar = ({ city, setCity, onSearch }) => {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="px-4 py-2 border rounded w-full"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;