import { useState, createContext } from 'react';

export const SongContext = createContext();

function SongContextProvider(props) {
  const [songs, setSongs] = useState([]);
  const [active, setActive] = useState('popular');

  const increaseVote = id => {
    let updatedSongs = songs.map(song => {
      if (song.id === id)
        song.votes++;

      return song;
    })

    const sortedData = updatedSongs.sort((a, b) => b.votes - a.votes);
    sortedData.map((song, index) => {
      song.rank = 0;
      switch (index) {
        case 0:
          song.rank = 1;
          break;
        case 1:
          song.rank = 2;
          break;
        case 2:
          song.rank = 3;
          break;
        default:
          song.rank = 0;
          break;
      }

      return song;
    })

    setSongs(sortedData);
  }

  const sortByPopular = () => {
    const sortedData = songs.sort((a, b) => b.votes - a.votes);
    sortedData.map((song, index) => {
      song.rank = 0;
      switch (index) {
        case 0:
          song.rank = 1;
          break;
        case 1:
          song.rank = 2;
          break;
        case 2:
          song.rank = 3;
          break;
        default:
          song.rank = 0;
          break;
      }

      return song;
    })
    setSongs(sortedData);
  }

  const sortByLatest = () => {
    const sortedData = songs.sort((a, b) => new Date(b.released) - new Date(a.released));
    setSongs(sortedData);
  }

  const value = { songs, setSongs, increaseVote, active, setActive, sortByPopular, sortByLatest };

  return(
    <SongContext.Provider value={value}>
      {props.children}
    </SongContext.Provider>
  )
}

export default SongContextProvider;