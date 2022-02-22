import React from 'react';
import { Route, Routes } from "react-router-dom";
import CountryPage from './pages/Country';
import Home from './pages/Home';
import ContinentCountries from './pages/ContinentCountries';
import ContinentRegions from './pages/ContinentRegions';
import CountryStates from './pages/CountryStates';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Home />} />
                <Route path="/continent">
                    <Route path="/continent/countries/:id" element={<ContinentCountries />} />
                    <Route path="/continent/subregions/:id" element={<ContinentRegions />} />
                </Route>
                <Route path="/subregions/countries/:id" element={<ContinentRegions />} />
                <Route path="/states/:id" element={<CountryStates />} />
                <Route path="/country" element={<CountryPage />} />
                <Route path="/country/:id" element={<CountryPage />} />
            </Route>


        </Routes>
    )
}

export default AppRoutes