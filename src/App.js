import './App.css';
import MusicBoard from './pages/MusicBoard';
import { useContext, useEffect } from 'react';
import { SongContext } from "./contexts/SongContext"
import { songs as data } from './assets/data';

function App() {
  const { songs, setSongs } = useContext(SongContext);
  
  useEffect(() => {
    const sortedData = data.sort((a, b) => b.votes - a.votes);
    setSongs(sortedData);

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
