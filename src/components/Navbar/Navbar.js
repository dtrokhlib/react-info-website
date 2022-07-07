import React from 'react';
import Logo from './assets/reactjs-icon.png';
import './Navbar.css';

export default function Navbar() {
    return (
        <header>
            <nav className='nav'>
                <div className='nav--icon'>
                    <img src={Logo} alt='React Logo' />
                    <span>ReactFacts</span>
                </div>

                <span className='nav--title'>React Course - Project 1</span>
            </nav>
        </header>
    );
}
