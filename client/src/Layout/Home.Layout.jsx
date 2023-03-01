import React from 'react'
import { Outlet } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <div className='flex'>
                <div className="my-4 border-r-2 border-grey-100 w-1/5 sticky">
                    <Sidebar />
                </div>
                <div className='my-4 ml-4 w-4/5'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default HomeLayout;