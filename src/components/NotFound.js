import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <div>
      <p className="text-xl">page doesn't exist</p>
      <button
        onClick={() => history.push('/')}
        className="hover:text-gray-300 underline justify-start"
      >
        back to music board
      </button>
    </div>
  );
}
 
export default NotFound;