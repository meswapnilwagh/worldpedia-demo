import React from 'react'
import { Country } from 'worldpedia';
import { ICountry } from 'worldpedia/lib/interfaces';
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
interface Props {
    continentId?: string;
    regionId?: string;
}
const CountryList = (props: Props) => {
    const { continentId, regionId } = props;
    const countries = continentId ? Country.getAllCountriesByContinent(continentId.toUpperCase()) : regionId ? Country.getAllCountriesBySubregion(regionId.toUpperCase()) : [];
    const renderCountries = () => {
        return countries.map(country => {
            return (
                <Card key={country.iso2} image={country.flag} name={`${country.name}`} >
                    <div className='card-actions flex justify-around mt-1'>
                        <Link to={`/country/${country.iso2}`} className="btn btn-secondary btn-outline normal-case">Details</Link>
                        <Link to={`/states/${country.iso2}`} className="btn btn-secondary btn-outline normal-case">States</Link>
                    </div>
                </Card>
            )
        })
    }
    return (
        <>{renderCountries()}</>
    )
}

export default CountryList