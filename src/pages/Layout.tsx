import React from 'react'
import { Link } from 'react-router-dom';

interface Props {
    title: string;
    children: React.ReactNode;
    showButton?: boolean;
}
const Layout = ({ title, children, showButton }: Props) => {
    return (
        <div className="px-5 pt-10 md:px-24 md:pt-10 lg:pt-10 sm:px-10 sm:pt-10 h-screen mb-10 ">
            <div className='flex justify-between sm:flex-wrap'>
                <div className='flex'>
                    <h1 className='text-4xl mr-5 text-secondary'>{title}</h1>
                    {showButton && <Link to={`/countries`} className="btn btn-secondary btn-outline normal-case">All Countries</Link>}
                </div>
            </div>
            <div className='border mt-2 border-secondary'></div>
            <div className='flex pt-10 pb-32 flex-wrap w-full h-full overflow-y-auto'>
                {children}
            </div>

        </div>
    )
}

export default Layout