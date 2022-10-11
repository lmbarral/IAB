import React from "react";
import './DashBoard.css';
import Cards from './Cards'

import cardInfoS from '../Hooks/useCoins'

const DashBoard = () => {

    const addDashboardCleaner = () => {
        console.log();
    }

    const storeCards = () => {
        let cardsCount = 0;
        const cardArray = [];
        if(cardsCount <=5) {
            cardArray[cardsCount] = cardInfoS.cardInfo;
        }
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
            {card.map(card => (<><Cards {...card} /></>))}
        </div>
    );
}

export default DashBoard