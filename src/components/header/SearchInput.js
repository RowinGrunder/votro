const SearchInput = () => {
  return (
    <div className="flex min-w-full gap-2">
      <input
        type="search"
        className="h-14 bg-gray-800 text-white w-full px-5 outline-none focus:bg-gray-700"
        placeholder="what are you looking for?"
      />
      <button className="h-14 bg-black text-white px-5 w-1/6 hover:bg-opacity-60">
        search
      </button>
    </div>
  );
}
 
export default SearchInput;