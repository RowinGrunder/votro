import { useContext } from "react";
import { SongContext } from "../../contexts/SongContext";

const SortBar = ({ items, active }) => {
  const { setActive, sortByPopular, sortByLatest } = useContext(SongContext);

  const handleClick = item => {
    setActive(item);
    switch (item) {
      case 'popular':
        sortByPopular();
        break;
      case 'latest':
        sortByLatest();
        break;
      default:
        break;
    }
  }

  return (
    <div className="flex items-center gap-2">
      {items.map(item =>
        <span
          key={item}
          className={`
            cursor-pointer
            ${ active===item ? '' : 'text-gray-400' }
          `}
          onClick={() => handleClick(item)}
        >
          { item }
        </span>
      )}
    </div>
  );
}
 
export default SortBar;