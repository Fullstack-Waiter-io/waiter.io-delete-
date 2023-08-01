import './App.css';
import Header from './components/Header';
import ImageUpload from './components/ImageUpload';
import TranslationDisplay from './components/TranslationDisplay';


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
