import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'rsuite/dist/rsuite-no-reset.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MainPage from './pages/MainPage/MainPage'
import PropertyPage from './pages/PropertyPage/PropertyPage'


function App() {
  return (
    <div className="page">
      <Router>
        <Routes> {/* Use 'Routes' here */}
          <Route path="/" element={<MainPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
