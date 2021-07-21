import SearchInput from "./SearchInput";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { SongContext } from "../../contexts/SongContext";

const PageHeader = () => {
  const history = useHistory();
  const [isHome, setIsHome] = useState(true);
  const { songs, song } = useContext(SongContext);

  history.listen((location) => {
    if (location.pathname !== "/")
      setIsHome(false);
    else
      setIsHome(true);
  })

  const nextSong = () => {
    const index = songs.findIndex(item => item.id === song.id)
    if ((index + 1) <= songs.length-1) {
      const nextSong = songs[index + 1];
      history.push(`/song/${nextSong.id}`)
    }
  }
  
  return (
    <div className="flex justify-center py-5">
      <div className="w-1/2">
        {isHome
          ? <SearchInput />
          : <div className="flex justify-between mt-3">
            <button
              onClick={() => history.push('/')}
              className="hover:text-gray-300 underline justify-start"
            >
              back to music board
            </button>
            <button
              onClick={() => nextSong()}
              className="hover:text-gray-300 underline justify-start"
            >
              go to next song
            </button>
          </div>
        }
      </div>
    </div>
  );
}
 
export default PageHeader;