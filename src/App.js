import './App.css';
import MusicBoard from './pages/MusicBoard';
import { songs as data } from './assets/data';
import { useEffect, useState } from 'react';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(data);
    console.log(songs);

    return () => {
      //
    }
  }, [songs])

  return (
    <div className="App">
      <main className="bg-gray-900 min-h-screen">
        <MusicBoard
          songs={songs}
          setSongs={setSongs}
        />
      </main>
    </div>
  );
}

export default App;
