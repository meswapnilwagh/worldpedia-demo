import React from 'react';
import { images } from '../../constants/images';

interface ICard {
    image?: string,
    name: string
    children?: React.ReactNode;
    imageBorder?: boolean;
}

const Card = ({ image, name, children, imageBorder }: ICard) => {
    return (
        <>
            <div className="card bg-white shadow-xl mr-5 mb-5 w-96 md:mr-5 md:mb-5 lg:mr-10 lg:mb-10 xl:mr-5 xl:mb-4 xl:w-80 border border-primary">
                <figure className='mt-8'>
                    {image
                        ? <img src={image} alt={name} className={`h-28 rounded-xl ${imageBorder && 'border border-secondary'}`} />
                        : <img src={images.world} alt={name} className="h-28 rounded-xl" />
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