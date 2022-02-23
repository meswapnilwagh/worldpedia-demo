import React from 'react'
import { useParams, Link } from 'react-router-dom';
import { Country } from 'worldpedia';
import Layout from './Layout';
import Card from '../components/Card/Card';

const SubregionCountries = () => {
    const { id } = useParams();
    console.log('id :', id);
    const countries = Country.getAllCountriesBySubregion(id!);
    return (
        <Layout title={`Countries of ${id}`}>
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

export default SubregionCountries