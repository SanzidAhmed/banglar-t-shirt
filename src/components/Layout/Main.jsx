import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import './Main.css'
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='outlet-container'>
                <Outlet></Outlet>
                <Toaster />
            </div>
        </div>
    );
};

export default Main;