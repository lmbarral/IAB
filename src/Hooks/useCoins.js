import { useState } from "react";
import axios from "axios";

import getCoinInfo from "./Helpers/getCoinInfo";
import coinData from "./Helpers/coinData";

const BASE_URL = 'https://api.coingecko.com/api/v3/coins';

const useCoins = () => {

    const [coin, setCoin] = useState(false);
    const [isError, setError] = useState(false);
    const [cardInfoS, setCardInfoS] = useState(false);

    const gatherCoinInfo = data => {
        const coinInfo = getCoinInfo(data)
        setCoin({coinInfo});
        const cardInfo = coinData(data);
        setCardInfoS({cardInfo});
        //console.log(cardInfoS);
    };


    const submitRequest = async search => {
        setError(false);
        const { data } = await axios(`${BASE_URL}/${search.toLowerCase()}`);
        //console.log({ data });

        if (!data || data.lenght === 0) {
            setError('There is no such coin');
            return;
        };

        gatherCoinInfo(data);
    };

    return {
        cardInfoS,
        coin,
        submitRequest,
    };

};

export default useCoins