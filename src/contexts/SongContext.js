import { useState, createContext } from 'react';

export const SongContext = createContext();

function SongContextProvider(props) {
  const [songs, setSongs] = useState([]);

  const increaseVote = id => {
    let updatedSongs = songs.map(song => {
      if (song.id === id)
        song.votes++;

      return song;
    })

    setSongs(updatedSongs);
  }

  const value = { songs, setSongs, increaseVote };

  return(
    <SongContext.Provider value={value}>
      {props.children}
    </SongContext.Provider>
  )
}

export default SongContextProvider;