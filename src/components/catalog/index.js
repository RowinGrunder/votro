import { useContext } from "react";
import TitleBar from "../TitleBar";
import MusicCard from "./MusicCard";
import SortBar from "./SortBar";
import { SongContext } from "../../contexts/SongContext";

const MusicCatalog = () => {
  const { songs, filteredSongs, search, searchClick } = useContext(SongContext);
  
  return (
    <div>
      <TitleBar
        title="music board"
        custom={
          <SortBar />
        }
      />
      <div className="py-5 space-y-3">
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
              : <span className="lowercase">Click "Enter" to search for <span className="underline">{ search }</span></span>
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