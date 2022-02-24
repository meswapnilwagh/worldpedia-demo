import React from 'react'

interface Props {
    title: string;
    children: React.ReactNode;
}
const Layout = ({ title, children }: Props) => {
    return (
        <div className="mx-5 px-10 pt-10 md:px-20 md:pt-10 lg:pt-10 sm:px-10 sm:pt-10 h-screen mb-10">
            <div className='flex justify-between sm:flex-wrap'>
                <div className='flex'>
                    <h1 className='text-4xl mr-5 text-secondary'>{title}</h1>
                </div>
            </div>
            <div className='border mt-2 border-secondary'></div>
            <div className='flex pt-10 pb-32 flex-wrap w-full h-full overflow-y-auto scroll'>
                {children}
            </div>

        </div>
    )
}

export default Layout