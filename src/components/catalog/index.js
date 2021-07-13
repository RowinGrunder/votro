import { useState } from "react";
import TitleBar from "../TitleBar";
import MusicCard from "./MusicCard";
import SortBar from "./SortBar";

const MusicCatalog = ({ songs, setSongs }) => {
  const sortItems = ['popular', 'latest'];
  const [active, setActive] = useState('popular');

  return (
    <div className="flex justify-center">
      <div className="w-1/2 py-5">
        <TitleBar
          title="music board"
          custom={
            <SortBar
              items={sortItems}
              active={active}
              setActive={setActive}
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