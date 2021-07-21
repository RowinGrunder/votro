import './App.css';
import { useContext, useEffect } from 'react';
import { SongContext } from "./contexts/SongContext"
import { songs as data } from './assets/data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MusicCatalog from './components/catalog'
import MusicInfo from './components/info';
import PageHeader from './components/header';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { setSongs } = useContext(SongContext);
  
  // Save imported data into
  // songs variable upon load 
  useEffect(() => {
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
  }, [])
  
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <main className="bg-gray-900 min-h-screen">
            <PageHeader />
            <div className="flex justify-center">
              <div className="w-1/2 py-5">
                <Switch>
                  <Route exact path="/">
                    <MusicCatalog />
                  </Route>
                  <Route exact path="/song/:id">
                    <MusicInfo />
                  </Route>
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </div>
            </div>
          </main>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
