import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants/images';

const Nav = () => {
    return (
        <>
            <div className="navbar bg-primary shadow-xl">
                <div className="navbar-start flex md:pl-24 sm:pl-5 ">
                    <Link to="/" className="flex">
                        <img src={images.glob} className='h-10 mr-2' alt="glob" />
                        <h1 className="normal-case self-center whitespace-nowrap text-secondary text-2xl flex">Worldpedia</h1>
                    </Link>
                </div>
                <div className="navbar-end md:mr-5">
                    <a href="https://projects.meswapnilwagh.com/worldpedia" target="_blank" className="btn btn-secondary text-accent" rel="noopener noreferrer" >Get started</a>
                </div>
            </div >

        </>

    )
}

export default Nav