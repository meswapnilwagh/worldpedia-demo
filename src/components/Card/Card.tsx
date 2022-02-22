import React from 'react';
import { images } from '../../constants/images';

interface ICard {
    image?: string,
    name: string
    children?: React.ReactNode;
}

const Card = ({ image, name, children }: ICard) => {
    return (
        <>
            <div className="card  md:w-80  bg-white shadow-xl mr-5 mb-5 lg:mr-10 lg:mb-10 md:mr-2 md:mb-5 bordered">
                <figure className='mt-8'>
                    {image
                        ? <img src={image} alt={name} className="h-28" />
                        : <img src={images.world} alt={name} className="h-28" />
                    }
                </figure>
                <div className="card-body">
                    <h2 className="card-title justify-center">{name}</h2>
                    <hr />
                    {children}
                </div>
            </div>
        </>
    )
}

export default Card