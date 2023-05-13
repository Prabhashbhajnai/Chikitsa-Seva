import React from 'react'

// components
import AppointmentCard from '../components/Home/AppointmentCard'

// data
import Doctorinfo from '../data/Doctorinfo'

const Home = () => {
    const data = [
        {
            name: "Anurag Krishna Yadav",
            post: "Physician",
            date: "Monday, 02/01/2023",
            address: "Katra, Prayagraj, UP",
            time: "10:20-10:20",
            isActive: 1,
        },
        {
            name: "Mahesh",
            post: "Physician",
            date: "Monday, 02/01/2023",
            address: "Katra, Prayagraj, UP",
            time: "10:20-10:20",
            isActive: 0,
        },
    ]

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