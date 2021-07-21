import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongContext } from "../../contexts/SongContext";
import albums from "../../assets/albums";
import MusicDetail from "../detail";
import RankRibbon from "../RankRibobn";

const MusicInfo = () => {
  const { songs, song, setSong } = useContext(SongContext);
  const { id } = useParams();

  useEffect(() => {
    setSong(songs.find(song => song.id === id));
  }, [id, songs, setSong])

  return (
    <section className={`flex ${song ? 'bg-white' : ''}`}>
      {song &&
        <div className="min-w-full justify-center relative flex">
          <div className="z-10 right-5 absolute -top-0.5">
            {song.rank > 0 &&
              <RankRibbon rank={song.rank} />
            }
          </div>

          <div className="h-40 z-0 absolute left-0 top-0 min-w-full">
            <img
              src={albums[song.thumbnail]}
              alt={song.album}
              className="object-cover h-full w-full"
            />
            <div className="absolute left-0 top-0 bg-black bg-opacity-50 min-w-full h-full"></div>
          </div>

          <div className="z-40 w-full pt-28 h-full">
            <div className="flex">
              <img
                src={albums[song.thumbnail]}
                alt={song.album}
                className="object-cover h-64 w-64 ml-5"
              />

              <div className="flex-col mt-auto w-full relative bg-white pt-2 pr-5">
                <MusicDetail item={song} preview={false} />
              </div>
            </div>

            <div className="text-black min-w-full text-center leading-relaxed my-5">
              <span className="whitespace-pre-wrap text-black">{ song.lyrics }</span>
            </div>
          </div>
        </div>
      }
    </section>
  );
}
 
export default MusicInfo;