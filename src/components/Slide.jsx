/* eslint-disable react/prop-types */

import { Link } from "react-router"


const Slide = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-amber-500/10'>
                <div className='text-center'>
                    {/* <h1 className='text-3xl font-semibold text-gray-600 lg:text-4xl'>
                        {text}
                    </h1> */}
                    <br />
                    <Link
                        to='/allVolunteer'
                        className='w-full px-5 py-4 mt-4 text-md font-medium text-white capitalize transition-colors duration-300 transform bg-[#eca12c] rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'
                    >
                        See all volunteer
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide
