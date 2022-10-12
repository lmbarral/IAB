import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import CoinPicker from './components/CoinPicker';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts';
import CoinPickerApp from './components/CoinPickerApp';
import CardDashBoard from './components/CardDashboard/CardDashBoard';
import DashBoard from './DashBoard/DashBoard';
import Cards from './DashBoard/Cards';

import useCoins from './Hooks/useCoins';


function App() {

  const { state, CoinPickerBody, CoinPickerReturn } = CoinPicker();
  const { Form } = CoinPickerApp();
  const { submitRequest, cardInfoS } = useCoins();

  const onSubmit = value => {
    submitRequest(value);
  }

  return (
    <div className="App">
      <>
        <Header />
        {state && (
          <>
            <CoinPickerReturn />
            <CardDashBoard />
            <Form submitSearch={onSubmit}/>
            {cardInfoS && (
              <>
              <DashBoard cards={cardInfoS.cardInfo}/>
              </>
            )}
          </>
        )}
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
