import React from 'react'
import { Outlet } from 'react-router-dom';

// components
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <div className='flex w-full gap-5'>
                <div className="border-r-2 border-grey-100 fixed w-1/5">
                    <Sidebar />
                </div>
                <div className='pl-5 my-4 ml-auto w-4/5 right-0 '>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default HomeLayout;