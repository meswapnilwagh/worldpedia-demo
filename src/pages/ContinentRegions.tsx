import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Continent, Subregion } from 'worldpedia';
import Card from '../components/Card/Card';
import Layout from './Layout';

const ContinentRegions = () => {
    const { id } = useParams();
    const cont = Continent.getContinentByCode(id?.toUpperCase()!);
    const subregions = Subregion.getAllSubregionByContinent(id?.toUpperCase()!);
    return (
        <Layout title={`Regions of ${cont?.name}`}>
            <div className='flex flex-wrap h-fit w-full'>
                {subregions && subregions.map(region => {
                    return (
                        <Card key={region.name} name={`${region.name}`} >
                            <div className='card-actions flex justify-around mt-1'>
                                <Link to={`/subregion/countries/${region.name}`} className="btn btn-secondary btn-outline normal-case">Countries</Link>
                            </div>
                        </Card>
                    )
                })}
            </div>
        </Layout>
    )
}

export default ContinentRegions