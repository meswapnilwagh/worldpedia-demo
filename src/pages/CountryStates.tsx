import React from 'react'
import { useParams } from 'react-router-dom';
import { Country, State } from 'worldpedia';
import Layout from './Layout';
import Card from '../components/Card/Card';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';

const CountryStates = () => {
    const { id } = useParams();
    const country = Country.getCountryByCode(id?.toUpperCase()!);
    const states = _.sortBy(State.getAllStatesByCountry(id?.toUpperCase()!),'name');
    return (
        <Layout title={`States of ${country?.name}`}>
            {states && states.map(state => {
                return (
                    <Card key={state.name} name={`${state.name}`} >
                        <div className='card-actions flex justify-around mt-1'>
                            <Link to={`/state/${state.isoCode}`} className="btn btn-secondary btn-outline normal-case">Details</Link>
                            <Link to={`/state/cities/${id}/${state.isoCode}`} className="btn btn-secondary btn-outline normal-case">Cities</Link>
                        </div>
                    </Card>
                )
            })}
        </Layout>
    )
}

export default CountryStates