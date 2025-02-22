import './App.css';
import Login from './pages/Login';
import AuthlyRedirect from './pages/AuthlyRedirect';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoggedIn from './pages/LoggedIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/oauth/authly" element={<AuthlyRedirect />} />
        <Route path="/loggedin" element={<LoggedIn />} />
      </Routes>
    </Router>
  );
}

export default App;
