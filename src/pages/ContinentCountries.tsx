import * as _ from 'lodash';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Continent, Country } from 'worldpedia';
import CountryList from '../components/Country/CountryList';
import Layout from './Layout';

const ContinentCountries = () => {
    const { id } = useParams();
    const cont = Continent.getContinentByCode(id?.toUpperCase()!);
    const countries = _.sortBy(Country.getAllCountriesByContinent(id?.toUpperCase()!), 'name');

    return (
        <Layout title={`Countries of ${cont?.name}`}>
            <CountryList countries={countries} />
        </Layout>
    )
}

export default ContinentCountries