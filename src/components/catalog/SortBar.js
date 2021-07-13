const SortBar = ({ items, active, setActive }) => {
  
  return (
    <div className="flex items-center gap-2">
      {items.map(item =>
        <span
          key={item}
          className={`
            cursor-pointer
            ${ active===item ? '' : 'text-gray-400' }
          `}
          onClick={() => setActive(item)}
        >
          { item }
        </span>
      )}
    </div>
  );
}
 
export default SortBar;