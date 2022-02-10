import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/Navbar/Index.js';
import TheStudio from './components/Pages/TheStudio';
import RecoveryLounge from './components/Pages/RecoveryLounge';
import FitnessFacility from './components/Pages/FitnessFacility.js';
import TheArena from './components/Pages/TheArena';
import RejuvenationSpa from './components/Pages/RejuvenationSpa';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<FitnessFacility />} />
          <Route path="/the-studio" exact element={<TheStudio />} />
          <Route
            path="/the-recovery-lounge"
            exact
            element={<RecoveryLounge />}
          />
          <Route path="/the-arena" exact element={<TheArena />} />
          <Route
            path="/the-rejuvenation-spa"
            exact
            element={<RejuvenationSpa />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
