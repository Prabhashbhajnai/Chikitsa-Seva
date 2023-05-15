import React, { useState } from 'react'

// component
import PaymentModal from './Payment'

const HospitalCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const pay = () => {
        setIsOpen(true)
    };

    return (
        <>
            <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen}/>
            <div className='bg-white mx-2 p-2 px-4 mb-2 rounded-2xl transition shadow-lg duration-700 ease-in-out hover:shadow-2xl  md:w-1/2 lg:w-1/4 lg:h-50'>
                <div className='h-2/3 w-full'>
                    <img
                        src={props.url}
                        alt='hospital'
                        className='h-full w-full'
                    />
                </div>
                <div className='h-1/3 w-full flex flex-col items-center gap-5'>
                    <h1>{props.name}</h1>
                    <button onClick={pay} className='bg-red-300 text-xl rounded-lg w-full'>Pay Now</button>
                </div>
            </div>
        </>
    )
}

export default HospitalCard