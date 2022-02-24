import React from 'react';
import { useParams } from 'react-router-dom';
import { Country } from 'worldpedia';
import CountryList from '../components/Country/CountryList';
import Layout from './Layout';

const SubregionCountries = () => {
    const { id } = useParams();
    const countries = Country.getAllCountriesBySubregion(id!);
    return (
        <Layout title={`Countries of ${id}`}>
            <CountryList countries={countries} />
        </Layout>
    )
}

export default SubregionCountries