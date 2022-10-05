import React, { useState } from "react";
import './CoinPickerApp.css';
import CoinGecko from "coingecko-api";

const CoinPickerApp = () => {

    const CoinGeckoClient = new CoinGecko();

    const CGPing = async() => {
        const ping = await CoinGeckoClient.ping();
        console.log(ping) // False
    }

    const CoinList = async() => {
        const list = await CoinGeckoClient.coins.list();
        console.log(list)
        return CoinList;
    }

    const CoinApp = () => {

        const { list } = CoinList();

        return(
            <div className="CoinApp-style">
                <h1>CoinPicker Dashboard</h1>
                <p>{list.data[0]}</p> 
            </div>
        )
    }

    return {
        CoinApp,
        CGPing,
        CoinList,
    };
};

export default CoinPickerApp