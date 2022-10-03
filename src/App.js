import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import CoinPicker from './components/CoinPicker';

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Nav />
        <About />
        <Services />
        <CoinPicker />
      </>
    </div>
  );
}

export default App;
