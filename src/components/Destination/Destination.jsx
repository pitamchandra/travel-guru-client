import React from 'react';
import bg from '../../assets/banner.png'
import { FaArrowRight } from 'react-icons/fa';
import './Destination.css'
import Header from '../Navbar/Header';

const Destination = (props) => {
    console.log(props);
    const style = {
        background : `url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }
    return (
        <>
        <div className="fixed top-0 w-full z-10">
            <Header></Header>
        </div>
        <div className='w-full h-screen overlay flex items-center justify-center' style={style}>
            <div className="container mx-auto z-10">
                <div className="grid md:grid-cols-2 items-center gap-20">
                    <div className='text-white'>
                        <h1 className='text-8xl'>COX'S BAZAR</h1>
                        <p className='mb-5'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className='myBtn'>Booking <FaArrowRight className='inline-block' /></button>
                    </div>
                    <div>
                    <form className='bg-white p-8'> 
                    <div className="mb-6">
                        <label htmlFor="origin" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Origin</label>
                        <input type="text" id="origin" className="bg-slate-200 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Dhaka" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Destination</label>
                        <input type="email" id="email" className="bg-slate-200 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="cox's bazar" required />
                    </div>
                    <div className="mb-6">
                    
                    </div>
                    <button type="submit" className="myBtn w-full rounded-none">Start Booking</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Destination;