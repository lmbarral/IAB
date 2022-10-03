import React from "react";
import './Nav.css';
import {BiTrendingUp} from 'react-icons/bi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {BsCursor} from 'react-icons/bs'

const Nav = () => (

    <div className="Nav-style">
        <nav>
            <a href="/About">
                <div>
                    <AiOutlineQuestionCircle/>
                </div>
                About
            </a>
            <a href="/Services">
                <div>
                    <BiTrendingUp/>
                </div>
                Services
            </a>
            <a href="/Contact">
                <div>
                    <IoIosContact/>
                </div>
                Contact
            </a>
            <a href="/CoinPicker">
                <div className="BsCursor">
                    <BsCursor/>
                </div>
                Coin Picker
            </a>
        </nav>
    </div>
    
)

export default Nav;