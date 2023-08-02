import './App.css';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import TranslationDisplay from './components/TranslationDisplay';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

const HomePage = <h1>Waiter.io</h1>

function App() {
  return (
    <div className="App">
       <Header/>
       <div>
        <ImageUpload/>
        <TranslationDisplay/>
       </div>
    </div>
  );
}

export default App;
