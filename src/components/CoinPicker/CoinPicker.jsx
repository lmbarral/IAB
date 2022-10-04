import React from "react";
import './CoinPicker.css';

const CoinPicker = () => (
    <section id="coinpicker">
        <div className="CoinPicker">
            <h1 className="coinPicker-h12">
                Are you a pro player? <em className="em">CoinPicker</em> is for you! <br/> Check it out!
            </h1>
            <div className="CoinPicker-style">
                <h1 className="coinPicker-h1">
                    About the tool.
                </h1>
                <div className="coinPicker-text">
                    <p>
                        <em>CoinPicker</em> is, probably, the most usefull tool for a professional coin-tracker. Powered by our friends at CoinGecko, <em>CoinPicker</em> comes in handy everytime you need to track one or more coins even if it's just to be informed or wether you're getting ready for your next move.
                    </p>
                    <p>
                        Straight connected to the CoinGecko API, <em>CoinPicker</em> will let you display up to 6 cryptocurrecies of your choice out of all the avaliable in the market. Just look up for them in the search bar and they will be displayed at the moment with all the information you'll need.
                    </p>
                    <button>
                        <a href="#CoinPicker-app">
                            CoinPicker App
                        </a>
                    </button>
                </div>
            </div>
        </div>
    </section>
)

export default CoinPicker