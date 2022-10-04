import React from "react";
import './Nav.css';
import {BiTrendingUp} from 'react-icons/bi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {BsCursor} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'

const Nav = () => (
    <section id="nav">
        <div className="home_button">
            <a href="#header">
                <button>
                    <AiFillHome />
                </button>
            </a>
        </div>
        <div className="Nav-style">
            <nav>
                <a href="#about">
                    <div>
                        <AiOutlineQuestionCircle/>
                    </div>
                    About
                </a>
                <a href="#services">
                    <div>
                        <BiTrendingUp/>
                    </div>
                    Services
                </a>
                <a href="#contacts">
                    <div>
                        <IoIosContact/>
                    </div>
                    Contact
                </a>
                <a href="#coinpicker">
                    <div className="BsCursor">
                        <BsCursor/>
                    </div>
                    Coin Picker
                </a>
            </nav>
        </div>
    </section>
)

export default Nav;