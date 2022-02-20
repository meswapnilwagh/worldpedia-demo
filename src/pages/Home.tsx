import React from 'react'
import Card from '../components/Card/Card';
import { images } from '../constants/images';
import { Continent } from 'worldpedia';

const Home = () => {
    const continents = Continent.getAllContinents();

    const renderContinents = () => {
        return continents.map(continent => {
            const code = continent.code.toLowerCase() as keyof typeof images;
            return (<Card key={continent.code} image={images[code]} name={`${continent.name}-${continent.code}`} />)
        })
    }
    return (
        <>
            <div className='flex px-28 pt-20 w-full justify-between'>
                <div className='flex'>
                    <h1 className='text-4xl mr-5 text-secondary'>Continents</h1>
                    <button type="button" className="text-secondary-600 hover:text-white border border-secondary hover:bg-secondary focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 hover:border-primary">View All Countries</button>
                </div>
                <div className="relative mr-1 ">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none h-10">

                    </div>
                    <input type="text" id="table-search" className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5" placeholder="Search for items" />
                </div>
            </div>
            <div className='border mx-28 mt-2 border-secondary'></div>
            <div className='flex px-28 py-10 flex-wrap'>
                {renderContinents()}
            </div>

        </>

    )
}

export default Home