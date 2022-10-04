import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import CoinPicker from './components/CoinPicker';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts';

function App() {

  const { state, CoinPickerBody, CoinPickerReturn } = CoinPicker();

  return (
    <div className="App">
      <>
        <Header />
        {state && (<CoinPickerReturn />)}
        {!state && (
          <>
            <Nav />
            <About />
            <Services />
            <CoinPickerBody />
            <Contacts />
          </>
        )}
        <Footer />
      </>
    </div>
  );
}

export default App;
