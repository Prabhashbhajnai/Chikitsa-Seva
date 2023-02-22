import React from 'react'
import { useLocation, useParams, Link } from 'react-router-dom'
import classnames from 'classnames';
import { RiHome5Line, RiCalendarLine } from 'react-icons/ri'
import { GiPlagueDoctorProfile } from 'react-icons/gi'
import { GrContactInfo } from 'react-icons/gr'

const SidebarTabs = (props) => {
    const { id } = useParams()

    return (
        <Link to={`${props.route}`} style={{ textDecoration: 'none', color: 'black' }}>
            <div className={classnames("text-gray-500 font-light", { "text-red-400 font-semibold": props.isActive, })}>
                <h3 className="text-lg font-medium">{props.icon} {props.title}</h3>
            </div>
        </Link>
    )
}

const SidebarTabsContainer = (props) => {
    const location = useLocation()
    const currentPath = location.pathname

    const tabs = [
        {
            icon: RiHome5Line,
            title: "Home",
            route: '/',
            isActive: currentPath.includes("/")
        },
        {
            icon: RiCalendarLine,
            title: "Appointments",
            route: '/appointments',
            isActive: currentPath.includes("/appointments")
        },
        {
            icon: GiPlagueDoctorProfile,
            title: "Find Doctor",
            route: '/finddoctor',
            isActive: currentPath.includes("/finddoctor")
        },
        {
            icon: GrContactInfo,
            title: "Contacts",
            route: '/contacts',
            isActive: currentPath.includes("/contacts")
        },
    ]

    return (
        <>
            <div className='flex flex-col px-3 gap-4 md:gap-4 scrollbar-hide'>
                {tabs.map((tab) => (
                    <SidebarTabs {...tab} key={`123${tab.route}`} />
                ))}
            </div>
        </>
    );
}

export default SidebarTabsContainer