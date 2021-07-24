import { useContext, useEffect, useRef } from "react";
import { SongContext } from "../contexts/SongContext";

const Player = () => {
  const audioPlayer = useRef(null);
  const { songPlaying, setSongPlaying } = useContext(SongContext);

  const togglePlay = () => {
    if (songPlaying.isPlaying) {
      audioPlayer.current.play();
    }
    else {
      audioPlayer.current.pause();
    }
  }

  const stopSong = () => {
    setSongPlaying({
      id: null,
      isPlaying: false,
      file: ''
    })
  }

  useEffect(() => {
    togglePlay();
  }, [songPlaying])

  return (
    <audio
      hidden
      onEnded={() => stopSong()}
      src={songPlaying.file}
      ref={audioPlayer}
    >
    </audio>
  );
}
 
export default Player;