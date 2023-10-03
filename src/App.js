import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage'
import PropertyPage from './pages/PropertyPage/PropertyPage'
import LoginPage from './pages/LoginPage/LoginPage';
import SigninPage from './pages/SigninPage/SigninPage';
import PropertyPostPage from './pages/PropertyPostPage/PropertyPostPage';


function App() {

  return (
    <div className="page">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SigninPage />} />
          <Route path="/property/post" element={<PropertyPostPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
