import React from 'react'

// components
import HospitalCard from '../components/Payments/HospitalCard'

// data
import Hospitalinfo from '../data/Hospitalinfo'

const Payments = () => {
    return (
        <>
            <div className='flex flex-wrap gap-3'>
                {Hospitalinfo.map((tab) => (
                    <HospitalCard {...tab} key={`123${tab.route}`} />
                ))}
            </div >
        </>
    )
}

export default Payments