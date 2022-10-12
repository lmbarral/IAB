import React from "react";
import './CoinPickerApp.css';
import { useState } from "react";

import Cards from '../../DashBoard/Cards'

function CoinPickerApp() {
  const [search, setSearch] = useState('');
  const [counter, setCounter] = useState(0);

  const Form = ({submitSearch}) => {

    const onSubmit = e => {
      e.preventDefault();
      setCounter(counter + 1);
      if (!search || search === '') return;
      submitSearch(search);
      setSearch("");
    };

    return(
      <div className="CoinPickerApp-style">
        <div className="form">
          <form onSubmit={onSubmit}>
              <input
                  aria-label="search"
                  type="text"
                  className={`form-control`}
                  placeholder="Search Coins"
                  autoFocus
                  required
                  onChange={e => setSearch(e.target.value)}
                  value={search}
              />

            <button type="submit" className="button" onClick={onSubmit}>
              Search
            </button>
          </form>
        </div>
      </div>  
    );
  };

  const DashBoard = ({ cards }) => {

    //console.log(cards);

    const addDashboardCleaner = () => {
        console.log();
    }

    const storeCards = () => {
        var cardArray = [];
        if(counter <=6) {
            //console.log(counter);
            cardArray.push(cards);
        }
        console.log(cardArray);
        return cardArray;
    }

    var card = [];
    card = storeCards();

    console.log(card);

    return(
        <div className="Dashboard-style">
            <button onClick={addDashboardCleaner}>
                Clean Dashboard
            </button>
            <div className="card_map">
              {card.map(card => (<><Cards {...card} /></>))}
            </div>
        </div>
    );
}

  return {
    Form,
    DashBoard,
  };

}

export default CoinPickerApp;