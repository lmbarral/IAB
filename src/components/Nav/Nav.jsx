import React, { useState } from "react";
import './Nav.css';
import {BiTrendingUp} from 'react-icons/bi'
import {AiOutlineQuestionCircle} from 'react-icons/ai'
import {IoIosContact} from 'react-icons/io'
import {BsCursor} from 'react-icons/bs'
import {AiFillHome} from 'react-icons/ai'

const Nav = () => {
        
        return(
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
                        <div className="about">
                            <a href="#about">
                                <div>
                                    <AiOutlineQuestionCircle/>
                                </div>
                                About
                            </a>
                        </div>
                        <div className="services">
                            <a href="#services">
                                <div>
                                    <BiTrendingUp/>
                                </div>
                                Services
                            </a>
                        </div>
                        <div className="contacts">
                            <a href="#contacts">
                                <div>
                                    <IoIosContact/>
                                </div>
                                Contact
                            </a>
                        </div>
                        <div className="coinPicker">
                            <a href="#coinpicker">
                                <div className="BsCursor">
                                    <BsCursor/>
                                </div>
                                Coin Picker
                            </a>
                        </div>
                    </nav>
                </div>
            </section>
        )
}

export default Nav;