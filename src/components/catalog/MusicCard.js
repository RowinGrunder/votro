import { useContext, useEffect, useState } from "react";
import MusicDetail from "../detail";
import albums from "../../assets/albums";
import RankRibbon from "../RankRibobn";
import { SongContext } from "../../contexts/SongContext";

const MusicCard = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { songPlaying, setSongPlaying } = useContext(SongContext)
  
  const togglePlay = () => {
    setSongPlaying({
      id: item.id,
      isPlaying: !isPlaying,
      file: item.audio
    })
    setIsPlaying(prev => !prev);
  }

  useEffect(() => {
    if (songPlaying.id === null) {
      setIsPlaying(false);
    }
    else if (!songPlaying.isPlaying) {
      setIsPlaying(false);
    }
    else if (songPlaying.id !== null && songPlaying.id === item.id) {
      setIsPlaying(true);
    }
  }, [songPlaying, item])

  return (
    <section className="grid grid-cols-3 bg-white relative">
      {songPlaying.isPlaying && songPlaying.id !== item.id && <div className="bg-black opacity-60 h-full w-full absolute z-50"></div>}
      <div className="relative min-h-full min-w-full col-span-3 lg:col-span-1">
        <img
          src={albums[item.thumbnail]}
          alt={item.album}
          className="object-cover h-full w-full"
        />

        <div className="absolute h-full w-full pl-5 pb-3 left-0 top-0 flex flex-wrap content-between">
          <div className="-m-0.5 w-full">
            {item.rank > 0 &&
              <RankRibbon rank={item.rank} />
            }
          </div>
          <button
            onClick={() => togglePlay()}
            className="cursor-pointer rounded-full"
          >
            {isPlaying ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            }
          </button>
        </div>
      </div>

      <div className="lg:col-span-2 col-span-3">
        <MusicDetail item={item} />
      </div>
    </section>
  );
}
 
export default MusicCard;