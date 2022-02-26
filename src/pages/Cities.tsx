import * as _ from 'lodash';
import React from 'react';
import { useParams } from 'react-router-dom';
import { City, State } from 'worldpedia';
import Card from '../components/Card/Card';
import Layout from './Layout';

const Cities = () => {
    const { countryId, stateId } = useParams();
    const state = State.getStateByCodeAndCountry(stateId?.toUpperCase()!, countryId?.toUpperCase()!)
    const cities = _.sortBy(City.getAllCitiesOfState(stateId?.toUpperCase()!, countryId?.toUpperCase()!), 'name')
    return (
        <Layout title={`Cities of ${state?.name}`}>
            <div className='flex flex-wrap h-fit w-full'>
                {cities && cities.map(city => {
                    return (
                        <Card key={city.name} name={`${city.name}`} >
                            <div className='card-actions flex justify-around mt-1'>

                            </div>
                        </Card>
                    )
                })}
            </div>
        </Layout>
    )
}

export default Cities