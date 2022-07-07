import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import './style.css';

export default function App() {
    return (
        <div className='container'>
            <Navbar />
            <Main />
        </div>
    );
}
