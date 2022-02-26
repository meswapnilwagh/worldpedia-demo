import React from 'react'
import { images } from '../../constants/images'

const NoRecord = () => {
    return (
        <div className='ml-[10%] mt-[5%] right-0 flex flex-col items-center'>
            <h1 className='text-2xl'>No data found</h1>
            <img src={images.noRecord} className='w-1/2' alt="notfound" />
        </div>
    )
}

export default NoRecord