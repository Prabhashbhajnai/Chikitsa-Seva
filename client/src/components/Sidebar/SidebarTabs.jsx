import React from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import classnames from 'classnames';
import { RiHome5Line, RiCalendarLine, RiTestTubeFill } from 'react-icons/ri'
import { GiPlagueDoctorProfile } from 'react-icons/gi'
import { GrContactInfo } from 'react-icons/gr'
import { GoFileSubmodule, GoCreditCard } from 'react-icons/go'
import { FaWpforms } from 'react-icons/fa'

const SidebarTabs = (props) => {
    const { id } = useParams()

    return (
        <Link to={`/${props.route}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={classnames("text-gray-500 font-light flex items-center gap-3", { "text-red-400 font-semibold": props.isActive, })}>
                <h3 className='text-xl'>{props.icon}</h3>
                <h3 className="text-lg font-medium flex flex-col"> {props.title}</h3>
            </div>
        </Link>
    )
}

const SidebarTabsContainer = (props) => {
    const location = useLocation()
    const currentPath = location.pathname

    const dashboard = [
        {
            icon: <RiHome5Line />,
            title: "Home",
            route: 'home',
            isActive: currentPath.includes("/home")
        },
        {
            icon: <RiCalendarLine />,
            title: "Appointments",
            route: 'appointments',
            isActive: currentPath.includes("/appointments")
        },
        {
            icon: <GiPlagueDoctorProfile />,
            title: "Find Doctor",
            route: 'finddoctor',
            isActive: currentPath.includes("/finddoctor")
        },
        // {
        //     icon: <GrContactInfo />,
        //     title: "Contacts",
        //     route: 'contacts',
        //     isActive: currentPath.includes("/contacts")
        // },
        {
            icon: <GrContactInfo />,
            title: "Disease Prediction AI",
            route: 'DiseasePrediction',
            isActive: currentPath.includes("/DiseasePrediction")
        },
    ]

    const medical = [
        {
            icon: <RiTestTubeFill />,
            title: "Lab Results",
            route: 'labresults',
            isActive: currentPath.includes("/labresults")
        },
        {
            icon: <GoFileSubmodule />,
            title: "Records",
            route: 'records',
            isActive: currentPath.includes("/records")
        },
        {
            icon: <FaWpforms />,
            title: "Organ Donation",
            route: 'OrganDonation',
            isActive: currentPath.includes("/OrganDonation")
        },
        
    ]

    return (
        <>
            <div className='flex flex-col px-3 gap-4 md:gap-4 scrollbar-hide h-screen sticky top-0'>
                <h1 className='text-xl font-semibold text-gray-400'>Dashboard</h1>
                {dashboard.map((tab) => (
                    <SidebarTabs {...tab} key={`123${tab.route}`} />
                ))}
                <h1></h1>

                <h1 className='text-xl font-semibold text-gray-400'>Medical</h1>
                {medical.map((tab) => (
                    <SidebarTabs {...tab} key={`123${tab.route}`} />
                ))}
                <h1></h1>

                <h1 className='text-xl font-semibold text-gray-400'>Finance</h1>
                <Link to="/payments" style={{ textDecoration: 'none', color: 'black' }}>
                    <div className={classnames("text-gray-500 font-light flex items-center gap-3", { "text-red-400 font-semibold": props.isActive, })}>
                        <h3 className='text-xl'><GoCreditCard /></h3>
                        <h3 className="text-lg font-medium flex flex-col">Payments</h3>
                    </div>
                </Link>
                <h1 className='text-xl font-semibold text-gray-400'>Donor Services</h1>
                <a href="https://chikitsa-seva-blood-bank.onrender.com/login" style={{ textDecoration: 'none', color: 'black' }} target='blank'>
                    <div className={classnames("text-gray-500 font-light flex items-center gap-3", { "text-red-400 font-semibold": props.isActive, })}>
                        <h3 className='text-xl'><FaWpforms /></h3>
                        <h3 className="text-lg font-medium flex flex-col">Blood Donation</h3>
                    </div>
                </a>
                {/* <a href="https://172.25.190.246:3000" style={{ textDecoration: 'none', color: 'black' }} target='blank'>
                    <div className={classnames("text-gray-500 font-light flex items-center gap-3", { "text-red-400 font-semibold": props.isActive, })}>
                        <h3 className='text-xl'><FaWpforms /></h3>
                        <h3 className="text-lg font-medium flex flex-col">Organ Donation</h3>
                    </div>
                </a> */}

            </div>
        </>
    );
}

export default SidebarTabsContainer