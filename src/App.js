import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

const HomePage = <h1>Waiter.io</h1>

function App() {
  return (
    <Router>
        <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
      </Router>
  );
}

export default App;
