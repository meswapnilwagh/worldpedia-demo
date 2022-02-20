import React from 'react'

const Nav = () => {
    return (
        <div className="navbar bg-primary shadow-xl">
            <div className="navbar-start">
                <a className="md:pl-24 sm:pl-5 normal-case text-xl self-center whitespace-nowrap text-secondary">🌏 Worldpedia Demo</a>
            </div>
            <div className="navbar-end mr-5">
                <a className="btn btn-secondary text-accent">Get started</a>
            </div>
        </div>

    )
}

export default Nav