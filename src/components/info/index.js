import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../contexts/AppContext";
import albums from "../../assets/albums";
import MusicDetail from "../Detail";
import RankRibbon from "../RankRibobn";
import NotFound from "../NotFound";
import Player from "../Player";
import SiteCard from "./SiteCard";

// individual song page
const MusicInfo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { songs, song, setSong, songPlaying, setSongPlaying, breakpoint } = useContext(AppContext);
  const { id } = useParams();
  let sites = [
    { name: 'youtube', text: 'Youtube Music', url: 'www.youtube.com' },
    { name: 'spotify', text: 'Spotify', url: 'www.spotify.com' },
    { name: 'deezer', text: 'Deezer', url: 'www.deezer.com' }
  ]

  const togglePlay = () => {
    setSongPlaying({
      id: song.id,
      isPlaying: !isPlaying,
      file: song.audio
    })
    setIsPlaying(prev => !prev);
  }

  // play song if
  // audio is playing
  // upon redirection
  useEffect(() => {
    if (songPlaying.id === null)
      setIsPlaying(false);
    else if (!songPlaying.isPlaying)
      setIsPlaying(false);
    else if (songPlaying.id !== null && songPlaying.id === song.id)
      setIsPlaying(true);
  }, [songPlaying, song])

  useEffect(() => {
    setSong(songs.find(song => song.id === id));
  }, [id, songs, setSong])

  return (
    <div>
      {song ?
        <div className="space-y-10">
          <section className="flex bg-white">
            {/* hidden player */}
            <Player />
            {/* music info */}
            <div className="min-w-full justify-center relative lg:flex">
                {/* background cover */}
                <div className="lg:h-40 z-0 lg:absolute lg:left-0 lg:top-0 w-full lg:min-w-full relative">
                  {/* background image */}
                  {/* full height on smaller screen */}
                  <img
                    src={albums[song.thumbnail]}
                    alt={song.album}
                    className="object-cover h-full w-full"
                  />
                  {/* background overlay */}
                  {/* hidden on smaller screen */}
                  <div className="invisible lg:visible absolute left-0 top-0 bg-black bg-opacity-50 min-w-full h-full"></div>
                  {/* rank ribbon */}
                  <div className="z-10 right-5 absolute -top-0.5">
                    {song.rank > 0 &&
                      <RankRibbon rank={song.rank} />
                    }
                  </div>
                  {/* toggle play button */}
                  {/* displayed on smaller screen */}
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

                {/* main content */}
                <div className="z-40 w-full lg:pt-28 lg:h-full">
                  <div className="flex relative">
                    {/* left side: album image */}
                    {/* hidden on smaller screen */}
                    <img
                      src={albums[song.thumbnail]}
                      alt={song.album}
                      className="object-cover h-0 w-0 lg:h-64 lg:w-64 lg:ml-5 invisible lg:visible"
                    />
                    {/* toggle play button */}
                    {/* displayed on larger screen */}
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
                    {/* right side: music detail */}
                    <div className="flex-col mt-auto w-full relative bg-white pt-5 lg:pt-2 pr-5">
                      <MusicDetail item={song} preview={false} />
                    </div>
                  </div>

                  {/* music lyrics */}
                  <div className="text-black min-w-full text-left px-5 lg:text-center leading-relaxed my-5">
                    <span className="whitespace-pre-wrap text-black lowercase">{ song.lyrics }</span>
                  </div>
                </div>
              </div>
          </section>
          {/* listen from */}
          <section>
            <span className="font-bold text-2xl">listen from</span>
            <div className="grid grid-cols-2 gap-4 mt-3">
              {sites.map(site =>
                song.links?.[site.name] ?
                  <SiteCard name={site.name} text={site.text} site={site.url} link={song.links?.[site.name]} />
                  : null
              )}
            </div>
          </section>
        </div>
        // song id doesn't exist
        : <NotFound />
      }
    </div>
  );
}
 
export default MusicInfo;