import React from 'react';
import Header from '../Navbar/Header';
import './Home.css'
import bg from '../../assets/banner.png'
import Slider from '../Slider/Slider';
import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
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
                <div className="grid md:grid-cols-3 items-center gap-6">
                    <div className='text-white'>
                        <h1 className='text-8xl'>COX'S BAZAR</h1>
                        <p className='mb-5'>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach, and it ...</p>
                        <button className='myBtn'>Booking <FaArrowRight className='inline-block' /></button>
                    </div>
                    <div className="col-span-2">
                        <Slider></Slider>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;