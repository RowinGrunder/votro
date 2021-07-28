import { useContext } from "react";
import TitleBar from "../TitleBar";
import MusicCard from "./MusicCard";
import SortBar from "./SortBar";
import { AppContext } from "../../contexts/AppContext";
import Player from "../Player";

const MusicCatalog = () => {
  const { songs, filteredSongs, search, searchClick } = useContext(AppContext);
  
  return (
    <div>
      {/* title bar */}
      <TitleBar
        title="music board"
        custom={
          <SortBar />
        }
      />
      <div className="py-5 space-y-3">
        {/* hidden player */}
        <Player />
        {/* music list */}
        {search
          ? filteredSongs.length
            ? filteredSongs.map(song =>
              <MusicCard
                key={song.id}
                item={song}
              />
            )
            : searchClick
              ? <span className="lowercase"><span className="underline">{ search }</span> not found</span>
              : <span className="lowercase">press "enter" to search for <span className="underline">{ search }</span></span>
          : songs.map(song =>
            <MusicCard
              key={song.id}
              item={song}
            />
          )
        }
      </div>
    </div>
  );
}
 
export default MusicCatalog;