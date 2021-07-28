import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// error page
const NotFound = () => {
  const history = useHistory();
  const [inMusicInfo, setInMusicInfo] = useState(null);
  
  useEffect(() => {
    const songPath = history.location.pathname.split('/')[1] === 'song';
    setInMusicInfo(songPath);
  }, [])

  return (
    <div>
      <p className="text-xl">{ inMusicInfo ? 'song' : 'page' } doesn't exist</p>
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