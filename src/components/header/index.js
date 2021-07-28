import SearchInput from "./SearchInput";
import { useHistory } from "react-router-dom";
import { useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

// dynamic header
const PageHeader = () => {
  const history = useHistory();
  const [isHome, setIsHome] = useState(true);
  const { songs, song } = useContext(AppContext);

  history.listen((location) => {
    const home = location.pathname === "/" || location.pathname === "/error";
    setIsHome(home);
  })

  // go to next song
  const nextSong = () => {
    const index = songs.findIndex(item => item.id === song.id)
    if ((index + 1) <= songs.length-1) {
      const nextSong = songs[index + 1];
      history.push(`/song/${nextSong.id}`)
    }
  }
  
  return (
    <div className="flex justify-center py-5">
      <div className="lg:w-1/2 w-full px-3 lg:px-0">
        {isHome
          // home page elements
          // search input and button 
          ? <SearchInput />
          // music info page elements
          : <div className="flex justify-between mt-3">
            {/* back button */}
            <button
              onClick={() => history.push('/')}
              className="hover:text-gray-300 underline justify-start"
            >
              back to music board
            </button>
            {/* next button */}
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