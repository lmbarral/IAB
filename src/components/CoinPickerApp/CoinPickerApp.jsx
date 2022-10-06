import React from "react";
import './CoinPickerApp.css';
import CoinGecko from "coingecko-api";
import { useEffect, useState } from "react";
import TableCoins from '../helpers/TableCoins';

function CoinPickerApp() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  
  const CoinGeckoClient = new CoinGecko();

  const getData = async () => {
    try {
      const res = await CoinGeckoClient.coins.list();
      setCoins(res.data);
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const CoinApp = () => {

    return (
        <div Container>
          <div className="row">
              <input
              type="text"
              placeholder="Search a Coin"
              className="form-control bg-dark text-light border-0 mt-4 text-center"
              autoFocus
              onChange={(e) => setSearch(e.target.value)}
              />

              <TableCoins coins={coins} search={search} />
          </div>
        </div>
    )
    }

    return {
        CoinApp,
        getData,
    }
}

export default CoinPickerApp;