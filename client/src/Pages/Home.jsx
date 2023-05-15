import React from 'react'

// components
import AppointmentCard from '../components/Home/AppointmentCard'

// data
import Doctorinfo from '../data/Doctorinfo'

const Home = () => {
    return (
        <>
            <div className='flex flex-wrap gap-3'>
                {Doctorinfo.map((tab) => (
                    <AppointmentCard {...tab} key={`123${tab.route}`} />
                ))}
            </div>
        </>
    )
}

export default Home