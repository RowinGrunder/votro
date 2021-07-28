import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SongContext } from "../../contexts/SongContext";
import albums from "../../assets/albums";
import MusicDetail from "../detail";
import RankRibbon from "../RankRibobn";
import NotFound from "../NotFound";
import Player from "../Player";

const MusicInfo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { songs, song, setSong, songPlaying, setSongPlaying, breakpoint } = useContext(SongContext);
  const { id } = useParams();

  const togglePlay = () => {
    setSongPlaying({
      id: song.id,
      isPlaying: !isPlaying,
      file: song.audio
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
    else if (songPlaying.id !== null && songPlaying.id === song.id) {
      setIsPlaying(true);
    }
  }, [songPlaying, song])

  useEffect(() => {
    setSong(songs.find(song => song.id === id));
  }, [id, songs, setSong])

  return (
    <section className={`flex ${song ? 'bg-white' : ''}`}>
      <Player />
      {song ?
        <div className="min-w-full justify-center relative lg:flex">
          <div className="lg:h-40 z-0 lg:absolute lg:left-0 lg:top-0 w-full lg:min-w-full relative">
            <img
              src={albums[song.thumbnail]}
              alt={song.album}
              className="object-cover h-full w-full"
            />
            <div className="invisible lg:visible absolute left-0 top-0 bg-black bg-opacity-50 min-w-full h-full"></div>

            <div className="z-10 right-5 absolute -top-0.5">
              {song.rank > 0 &&
                <RankRibbon rank={song.rank} />
              }
            </div>

            {(breakpoint === 'sm' || breakpoint === 'md') &&
            <div className="z-50 absolute left-5 flex align-center bottom-5">
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
          }
          </div>

          <div className="z-40 w-full lg:pt-28 lg:h-full">
            <div className="flex relative">
              <img
                src={albums[song.thumbnail]}
                alt={song.album}
                className="object-cover h-0 w-0 lg:h-64 lg:w-64 lg:ml-5 invisible lg:visible"
              />
              {(breakpoint === 'lg' || breakpoint === 'xl') &&
                <div className="z-10 absolute rounded-full left-10 bottom-5 flex align-center">
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
              }

              <div className="flex-col mt-auto w-full relative bg-white pt-5 lg:pt-2 pr-5">
                <MusicDetail item={song} preview={false} />
              </div>
            </div>

            <div className="text-black min-w-full text-left px-5 lg:text-center leading-relaxed my-5">
              <span className="whitespace-pre-wrap text-black lowercase">{ song.lyrics }</span>
            </div>
          </div>
        </div>
        : <NotFound />
      }
    </section>
  );
}
 
export default MusicInfo;