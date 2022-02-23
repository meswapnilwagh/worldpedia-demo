import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { City, State } from 'worldpedia';
import Layout from './Layout';
import Card from '../components/Card/Card';
import * as _ from 'lodash';

const Cities = () => {
    const { countryId, stateId } = useParams();
    const state = State.getStateByCodeAndCountry(stateId?.toUpperCase()!, countryId?.toUpperCase()!)
    const cities = _.sortBy(City.getAllCitiesOfState(stateId?.toUpperCase()!, countryId?.toUpperCase()!), 'name')
    return (
        <Layout title={`Cities of ${state?.name}`}>
            {cities && cities.map(city => {
                return (
                    <Card key={city.name} name={`${city.name}`} >
                        <div className='card-actions flex justify-around mt-1'>
                            
                        </div>
                    </Card>
                )
            })}
        </Layout>
    )
}

export default Cities