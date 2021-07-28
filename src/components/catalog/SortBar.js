import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const SortBar = () => {
  const items = ['popular', 'latest'];
  const { active, setActive, sortByPopular, sortByLatest } = useContext(AppContext);

  // sort items
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