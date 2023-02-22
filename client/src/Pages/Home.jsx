import React from 'react'

// components
import AppointmentCard from '../components/Home/AppoointmentCard'

const Home = () => {
    return (
        <>
            <div className='flex flex-wrap gap-3'>
                <AppointmentCard />
                <AppointmentCard />
                <AppointmentCard />
                <AppointmentCard />
            </div>
        </>
    )
}

export default Home