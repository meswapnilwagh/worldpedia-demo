import React from 'react'
import { Routes as RR, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Country from './pages/Country';

const Routes = () => {
    return (
        <RR>
            <Route path="/" element={<Home />} />
            <Route path="/country" element={<Country />} />
        </RR>
    )
}

export default Routes