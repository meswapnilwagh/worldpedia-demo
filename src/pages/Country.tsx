import React from 'react'
import { useParams } from 'react-router-dom'
import { Country } from 'worldpedia';
import CountryDetail from '../components/Country/CountryDetail';
const CountryPage = () => {
    const { id } = useParams();
    const renderCountry = () => {
        return <CountryDetail id={id!} />
    }

    const renderCountries = () => {
        return <h1>Test</h1>
    }
    return (
        <div>{id ? renderCountry() : renderCountries()}</div>
    )
}

export default CountryPage