import { useState } from "react";
import axios from "axios";

import getCoinInfo from "./Helpers/getCoinInfo";

const BASE_URL = 'https://api.coingecko.com/api/v3/coins';

const useCoins = () => {

    const [coin, setCoin] = useState(false);
    const [isError, setError] = useState(false);

    const gatherCoinInfo = data => {
        const coinInfo = getCoinInfo(data)

        setCoin({coinInfo});
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

    console.log(coin);

    return {
        coin,
        submitRequest,
    };

};

export default useCoins