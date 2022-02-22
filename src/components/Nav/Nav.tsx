import React from 'react'
import { images } from '../../constants/images'
import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <div className="navbar bg-primary shadow-xl">
            <div className="navbar-start flex md:pl-24 sm:pl-5 ">
                <img src={images.glob} className='h-10 mr-2' />
                <Link to="/" className="normal-case self-center whitespace-nowrap text-secondary text-2xl">Worldpedia</Link>
            </div>
            <div className="navbar-end md:mr-5">
                <a href="https://projects.meswapnilwagh.com/worldpedia" target="_blank" className="btn btn-secondary text-accent">Get started</a>
            </div>
        </div>

    )
}

export default Nav