import React from 'react'
import { Country } from 'worldpedia';
import * as _ from 'lodash';
import Layout from './Layout';
import CountryList from '../components/Country/CountryList';

const Countries = () => {
    const countries = _.sortBy(Country.getAllCountries(), 'name');

    return (
        <Layout title={`Countries`} >
            <CountryList countries={countries} />
        </Layout>
    )
}

export default Countries