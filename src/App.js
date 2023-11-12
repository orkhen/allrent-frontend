import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'

import MainPage from './pages/MainPage/MainPage'
import PropertyPage from './pages/PropertyPage/PropertyPage'
import LoginPage from './pages/LoginPage/LoginPage';
import SigninPage from './pages/SigninPage/SigninPage';
import PropertyPostPage from './pages/PropertyPostPage/PropertyPostPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';


function App() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated in localStorage
    const authenticated = localStorage.getItem('isLogged') === 'true';
    setIsLogged(authenticated);
  }, []);

  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage isLogged={isLogged} />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SigninPage />} />
          <Route path="/property/post" element={<PropertyPostPage isLogged={isLogged} />} />
          <Route path="/property/:id" element={<PropertyPage isLogged={isLogged} />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
