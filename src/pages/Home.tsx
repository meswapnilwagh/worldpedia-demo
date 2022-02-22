import React from 'react';
import { Link } from 'react-router-dom';
import { Continent } from 'worldpedia';
import Card from '../components/Card/Card';
import { images } from '../constants/images';
import Layout from './Layout';

const Home = () => {
    const continents = Continent.getAllContinents();

    return (
        <Layout title="Continents">
            {continents && continents.map(continent => {
                const code = continent.code.toLowerCase() as keyof typeof images;
                return (
                    <Card key={continent.code} image={images[code]} name={`${continent.name}-${continent.code}`}>
                        < div className='card-actions flex justify-around mt-1'>
                            <Link to={`/continent/subregions/${continent.code}`} className="btn btn-secondary btn-outline normal-case">Subregions</Link>
                            <Link to={`/continent/countries/${continent.code}`} className="btn btn-secondary btn-outline normal-case">Countries</Link>
                        </div>
                    </Card>
                )
            })}
        </Layout>

    )
}

export default Home