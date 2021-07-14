import './App.css';
import MusicBoard from './pages/MusicBoard';
import { useContext, useEffect } from 'react';
import { SongContext } from "./contexts/SongContext"
import { songs as data } from './assets/data';

function App() {
  const { songs, setSongs, active } = useContext(SongContext);
  
  useEffect(() => {
    if (active !== 'latest') {
      const sortedData = data.sort((a, b) => b.votes - a.votes);
      sortedData.map((song, index) => {
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

    return () => {
      //
    }
  }, [songs, setSongs])
  return (
    <div className="App">
      <main className="bg-gray-900 min-h-screen">
        <MusicBoard />
      </main>
    </div>
  );
}

export default App;
