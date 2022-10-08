import React from "react";
import './CardDashBoard.css';
import DashBoard from "../../DashBoard/DashBoard";

const CardDashBoard = ({ data }) => {

    return(
        <div className="CardDashBoard-style">
            <h1 className="CardDashBoard-h1">
                Coin Dashboard
            </h1>
            <div className="CardDashBoard-text">
                <p>
                    As simple as it gets, just type in the search bar the coin you desire to look up to and the information will be displayed ASAP.
                </p>
                <div className="CardDashBoard-h12">
                    <h1>
                        Powered by <a href="https://www.coingecko.com/" target="_blank">CoinGecko</a>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default CardDashBoard