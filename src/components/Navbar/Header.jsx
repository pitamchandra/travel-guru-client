import React from 'react';
import logo from '../../assets/logo.png'
import logo2 from '../../assets/blackLogo.png'
import { Link } from 'react-router-dom';

const Header = ({props}) => {
    const blackLogo = props;
    return (
        <div className='container mx-auto px-2 md:px-0 my-8 flex justify-between items-center '>
            <Link to='/'>
                {
                    blackLogo ? <img className='w-28 h-14' src={logo2} alt="logo" /> : <img className='w-28 h-14' src={logo} alt="logo" />
                }
            </Link>
            <div className={`flex gap-7 items-center ${blackLogo ? 'text-black' : 'text-white'}`}>
                <input className='p-1 text-black border' type="text" placeholder='search your destination'/>
                <Link to='/'>Home</Link>
                <Link to="/destination">Destination</Link>
                <Link>Blog</Link>
                <Link>Contact</Link>
                <Link to='/login'><button className='myBtn'>login</button></Link>
            </div>
        </div>
    );
};

export default Header;