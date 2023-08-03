import './App.css';
import React from 'react';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import TranslationDisplay from './components/TranslationDisplay';
import { processImageAndTranslate } from './OCR/ocr';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

const HomePage = <h1>Waiter.io</h1>

function App() {
  const handleFileSelect = (selectedFile, selectedLanguage) => {
    if (selectedFile) {
      processImageAndTranslate(selectedFile, selectedLanguage);
    }
  }

  return (
    <div className="App">
       <Header/>
       <div>
        <ImageUpload onFileSelect={handleFileSelect}/>
        <TranslationDisplay/>
       </div>
    </div>
  );
}

export default App;
