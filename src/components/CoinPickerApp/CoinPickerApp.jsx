import React from "react";
import './CoinPickerApp.css';
import { useState } from "react";

function CoinPickerApp() {
  const [search, setSearch] = useState('');

  const Form = ({submitSearch}) => {

    const onSubmit = e => {
      e.preventDefault();
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

            <button type="submit" className="button" onClick={()=>onSubmit}>
              Search
            </button>
          </form>
        </div>
      </div>  
    );
  };

  return {
    Form,
  };

}

export default CoinPickerApp;