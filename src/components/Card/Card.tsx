import React from 'react'
import { images } from '../../constants/images';

interface ICard {
    image: string,
    name: string
}
const Card = ({ image, name }: ICard) => {
    return (
        <>
            <div id={name} className="card w-80 bg-white shadow-xl mr-10 mb-10 bordered">
                <figure className='mt-2'><img src={image} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between mt-1'>
                        <div className="card-actions">
                            <button className="btn btn-secondary btn-outline">Subregions</button>
                        </div>
                        <div className="card-actions">
                            <button className="btn btn-secondary btn-outline">Countries</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card