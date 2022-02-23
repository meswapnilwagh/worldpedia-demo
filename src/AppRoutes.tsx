import React from 'react';
import { Route, Routes } from "react-router-dom";
import CountryPage from './pages/Country';
import Home from './pages/Home';
import ContinentCountries from './pages/ContinentCountries';
import ContinentRegions from './pages/ContinentRegions';
import CountryStates from './pages/CountryStates';
import SubregionCountries from './pages/SubregionCountries';
import Cities from './pages/Cities';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" >
                <Route index element={<Home />} />
                <Route path="/continent">
                    <Route path="/continent/countries/:id" element={<ContinentCountries />} />
                    <Route path="/continent/subregions/:id" element={<ContinentRegions />} />
                </Route>
                <Route path="/subregion/countries/:id" element={<SubregionCountries />} />
                <Route path="/states/:id" element={<CountryStates />} />
                <Route path="/state/cities/:countryId/:stateId" element={<Cities />} />
                <Route path="/country" element={<CountryPage />} />
                <Route path="/country/:id" element={<CountryPage />} />
            </Route>


        </Routes>
    )
}

export default AppRoutes