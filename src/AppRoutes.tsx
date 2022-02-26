import React from 'react';
import { Route, Routes } from "react-router-dom";
import Cities from './pages/Cities';
import ContinentCountries from './pages/ContinentCountries';
import ContinentRegions from './pages/ContinentRegions';
import Countries from './pages/Countries';
import CountryStates from './pages/CountryStates';
import Home from './pages/Home';
import SubregionCountries from './pages/SubregionCountries';

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
                <Route path="/countries" element={<Countries />} />

            </Route>


        </Routes>
    )
}

export default AppRoutes