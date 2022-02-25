import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
interface Props {
    children: React.ReactNode;
    open: boolean;
    onClose: Function;
    className?: string;
}

const Dialog = (props: Props) => {
    return (
        <>
            <div className="fixed inset-0 bg-gray-900 flex opacity-60 overflow-scroll" onClick={() => props.onClose()} ></div>
            <div className={`absolute p-8 bg-white sm:w-1/2 lg:w-1/3 m-auto flex-col flex rounded-lg border-2 border-primary z-50 top-24 left-0 right-0 ${props.className}`}>
                <div className='overflow-hidden h-[98%]'>{props.children}</div>
                <span className="absolute top-0 right-0 p-4 cursor-pointer" onClick={() => props.onClose()} >
                    <FontAwesomeIcon icon={['fas', 'close']} />
                </span>
            </div>
        </>
    )
}

export default Dialog