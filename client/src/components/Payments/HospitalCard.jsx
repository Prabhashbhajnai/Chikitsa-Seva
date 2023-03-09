import React from 'react'

const HospitalCard = () => {
    return (
        <>
            <div className='bg-white mx-2 p-2 px-4 mb-2 rounded-2xl transition shadow-lg duration-700 ease-in-out hover:shadow-2xl  md:w-1/2 lg:w-1/4 lg:h-1/4'>
                <div className='h-1/3 w-full'>
                    <img
                        src="https://cracku.in/latest-govt-jobs/wp-content/uploads/2020/10/AIIMS-Logo.jpg"
                        alt="aiims"
                        className='h-full w-full'
                    />
                </div>
                <div className='h-2/3 w-full flex flex-col items-center gap-5'>
                    <h1>AIIMS Delhi</h1>
                    <button className='bg-red-300 text-xl rounded-lg w-full'>Pay Now</button>
                </div>
            </div>
        </>
    )
}

export default HospitalCard