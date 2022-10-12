import React from "react";
import './DashBoard.css';
import Cards from './Cards'

const DashBoard = ({ cards }) => {

    const addDashboardCleaner = () => {
        console.log();
    }

    const storeCards = () => {
        let cardsCount = 0;
        const cardArray = [];
        if(cardsCount <=5) {
            cardArray[cardsCount] = cards;
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