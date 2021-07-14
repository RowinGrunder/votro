import { useContext } from "react";
import TitleBar from "../TitleBar";
import MusicCard from "./MusicCard";
import SortBar from "./SortBar";
import { SongContext } from "../../contexts/SongContext";

const MusicCatalog = () => {
  const { songs, active } = useContext(SongContext);
  const sortItems = ['popular', 'latest'];
  
  return (
    <div className="flex justify-center">
      <div className="w-1/2 py-5">
        <TitleBar
          title="music board"
          custom={
            <SortBar
              items={sortItems}
              active={active}
            />
          }
        />
        <div className="py-5 space-y-3">
          {songs.map(song =>
            <MusicCard
              key={song.id}
              item={song}
            />
          )}
        </div>
      </div>
    </div>
  );
}
 
export default MusicCatalog;