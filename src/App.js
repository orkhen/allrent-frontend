import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, createContext  } from 'react'

import MainPage from './pages/MainPage/MainPage'
import PropertyPage from './pages/PropertyPage/PropertyPage'
import LoginPage from './pages/LoginPage/LoginPage';
import SigninPage from './pages/SigninPage/SigninPage';
import PropertyPostPage from './pages/PropertyPostPage/PropertyPostPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import ReservationsPage from './pages/ReservationsPage/ReservationsPage';
import SearchPage from './pages/SearchPage/SearchPage';

export const AppContext = createContext(null);

function App() {
  const [scroll, setScroll] = useState(true)
  const [isLogged, setIsLogged] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Check if the user is authenticated in localStorage
    const authenticated = localStorage.getItem('isLogged') === 'true';
    setIsLogged(authenticated);
  }, []);

  useEffect(() => {
    // If scroll is false, add 'noscroll' class to the body element
    if (!scroll) {
      document.body.classList.add('noscroll');
      document.documentElement.classList.add('noscroll');
    } else {
      // If scroll is true, remove 'noscroll' class from the body element
      document.body.classList.remove('noscroll');
      document.documentElement.classList.remove('noscroll');
    }
  }, [scroll])

  return (
    <AppContext.Provider value={{ isLogged, setIsLogged, windowWidth, scroll, setScroll }}>
      <div className='page'>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SigninPage />} />
            <Route path="/property/post" element={<PropertyPostPage />} />
            <Route path="/property/:id" element={<PropertyPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/reservations' element={<ReservationsPage />} />
            <Route path='/search' element={<SearchPage />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
