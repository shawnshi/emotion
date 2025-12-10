import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Overview from './pages/Overview';
import DailyLog from './pages/DailyLog';

function App() {
  return (
    <Router>
      <div className="bg-app-dark min-h-screen text-app-text font-sans">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/log" element={<DailyLog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
