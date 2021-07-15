import { useContext } from "react";
import { SongContext } from "../../contexts/SongContext";

const SearchInput = () => {
  const { search, setSearch, searchFor } = useContext(SongContext);

  const handleClick = e => {
    e.preventDefault();
    searchFor();
  }

  return (
    <form onSubmit={e => handleClick(e)}>
      <div className="flex min-w-full gap-2">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          type="search"
          className="h-14 bg-gray-800 text-white w-full px-5 outline-none focus:bg-gray-700"
          placeholder="search for genre, writer, song title or artist name"
        />
        <button type="submit" className="h-14 bg-black text-white px-5 w-1/6 hover:bg-opacity-60">
          search
        </button>
      </div>
    </form>
  );
}
 
export default SearchInput;