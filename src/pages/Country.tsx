import React from 'react'
import { useParams } from 'react-router-dom'
import { Country } from 'worldpedia';

const CountryPage = () => {
    const { id } = useParams();
    const renderCountry = () => {
        return <h1> </h1>
    }

    const renderCountries = () => {
        return <h1>Test</h1>
    }
    return (
        <div>{id ? renderCountry() : renderCountries()}</div>
    )
}

export default CountryPage