import './App.css';
import { useContext, useEffect } from 'react';
import { AppContext } from "./contexts/AppContext"
import { songs as data } from './assets/data';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MusicCatalog from './components/Catalog'
import MusicInfo from './components/Info';
import PageHeader from './components/Header';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const { setSongs, setBreakpoint } = useContext(AppContext);

  // update breakpoint value
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
  
  // save imported data into
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
          <main className="bg-violet-dark min-h-screen">
            <PageHeader />
            <div className="flex justify-center">
              <div className="w-full lg:w-1/2 px-3 lg:px-0 py-5">
                <Switch>
                  {/* home */}
                  <Route exact path="/">
                    <MusicCatalog />
                  </Route>
                  {/* song info page */}
                  <Route exact path="/song/:id">
                    <MusicInfo />
                  </Route>
                  {/* error page */}
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
