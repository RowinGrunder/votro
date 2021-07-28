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
  const { setSongs, setBreakpoint, breakpoint } = useContext(SongContext);

  // Update breakpoint value
  // whenever screen resizes
  const onResize = () => {
    let width = window.innerWidth;
    if (width <= 640)
      setBreakpoint('sm');
    else if (width > 640 && width <= 768)
      setBreakpoint('md');
    else if (width > 768 && width <= 1024)
      setBreakpoint('lg');
    else if (width > 1024)
      setBreakpoint('xl');
  }

  useEffect(() => {
    onResize();
    window.addEventListener('resize', onResize);
  })
  
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
          <main className="bg-violet-dark bg-gray-da min-h-screen">
            <PageHeader />
            <div className="flex justify-center">
              <div className="lg:w-1/2 w-full py-5 px-3 lg:px-0">
                <Switch>
                  <Route exact path="/">
                    <MusicCatalog />
                  </Route>
                  <Route exact path="/song/:id">
                    <MusicInfo />
                  </Route>
                  <Route component={NotFound} />
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
