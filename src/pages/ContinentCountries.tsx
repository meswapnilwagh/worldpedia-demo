import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Continent, Country } from 'worldpedia';
import Card from '../components/Card/Card';
import Layout from './Layout';

const ContinentCountries = () => {
    const { id } = useParams();
    const cont = Continent.getContinentByCode(id?.toUpperCase()!);
    const countries = Country.getAllCountriesByContinent(id?.toUpperCase()!);

    return (
        <Layout title={`Countries of ${cont?.name}`}>
            {countries && countries.map(country => {
                return (
                    <Card key={country.iso2} image={country.flag} name={`${country.name}`} >
                        <div className='card-actions flex justify-around mt-1'>
                            <Link to={`/country/${country.iso2}`} className="btn btn-secondary btn-outline normal-case">Details</Link>
                            <Link to={`/states/${country.iso2}`} className="btn btn-secondary btn-outline normal-case">States</Link>
                        </div>
                    </Card>
                )
            })}
        </Layout>
    )
}

export default ContinentCountries