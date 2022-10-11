import React from "react";
import './DashBoard.css';

const Cards = ({ coinIcon, coinName, coingeckoRank, coinSymbol, coinLongS, coinShortS, coinPrice, coinVolume, coinPriceChange24}) => {
    
    return (
        <div className="cardContainer">

                <div className="card">
                    <div className="image">
                        <img src={coinIcon}></img>
                    </div>
                    <div className="data_column">
                        <div className="title">
                            {coinName}
                        </div>
                        <div className="ticker">
                            ({coinSymbol})
                        </div>
                    </div>
                </div>
                <hr />
                <div className="cardBody">
                    <div className="cardBodyList">
                        Price: $ {coinPrice}
                    </div>
                    <div className="cardBodyList">
                        Volume: $ {coinVolume}
                    </div>
                    <div className="cardBodyList">
                        PC24Hs: {coinPriceChange24}%
                    </div>
                    <div className="cardBodyList">
                        Long Sentiment: {coinLongS}%
                    </div>
                    <div className="cardBodyList">
                        Short Sentiment: {coinShortS}%
                    </div>
                    <div className="cardBodyList">
                        CG Rank: {coingeckoRank}
                    </div>
                </div>
        </div>
    )
}

export default Cards