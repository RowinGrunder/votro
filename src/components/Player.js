import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../contexts/AppContext";

// hidden player
const Player = () => {
  const audioPlayer = useRef(null);
  const { songPlaying, setSongPlaying } = useContext(AppContext);

  // play/pause song
  const togglePlay = () => {
    if (songPlaying.isPlaying) {
      audioPlayer.current.play();
    }
    else {
      audioPlayer.current.pause();
    }
  }

  // stop song
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