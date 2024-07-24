import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import logo from '../assets/2.png';
import avatar from '../assets/cj.png';
import cover from '../assets/cover.png';
import { HomeIcon, ChatBubbleBottomCenterTextIcon, FireIcon, Cog6ToothIcon, InformationCircleIcon, PencilIcon } from '@heroicons/react/24/solid';

const Navbar = ({ toggleLoginModal }) => {
    const [nav, setNav] = useState(false);

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    return (
        <div className='fixed top-0 left-0 w-full blue text-white z-50'>
            <div className='flex md:justify-between items-center md:px-10 h-16 mx-auto px-4'>
                <div onClick={toggleNav} className='md:hidden z-30'>
                    {nav ? <AiOutlineClose size={30} className='text-orange-500' /> : <IoMenu size={30} className='text-orange-500' />}
                </div>
                <div className='flex mx-auto md:mx-0'>
                    <img src={logo} alt="Game Logo" className="h-8" />
                    <a className='md:text-xl flex items-center text-base'>
                        knowyour<span className='text-orange-500'>d</span><span className='textwhite'>app</span>
                    </a>
                </div>
                <div className='flex items-center ml-4 relative'>
                    <input 
                        type='text' 
                        placeholder='Search' 
                        className='px-5 py-2 rounded-full placeholder:text-gray-400 darkblue border-2 border-zinc-300 focus:outline-none text-xs font-bold focus:ring-2 focus:ring-blue-500 w-40 md:w-64'
                    />
                    <AiOutlineSearch className='absolute  text-2xl right-2 top-1/2 transform -translate-y-1/2 text-orange-400' />
                </div>
                <div className='ml-4  space-x-2 md:block hidden'>
                    <button onClick={toggleLoginModal} className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-xs font-bold transition-colors text-white">
                        Log in
                    </button>
                    <button onClick={toggleLoginModal} className="px-4 py-2 rounded-full border-2  hover:bg-orange-600 text-xs transition-colors text-orange-white">
                        Sign up
                    </button>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-full darkblue flex flex-col justify-center items-start transform ${nav ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
                <div className="bg-zinc-900 w-full overflow-hidden">
                    <div className="bg-cover bg-center h-28" style={{ backgroundImage: `url(${cover})` }}></div>
                    <div className="p-3">
                        <div className="flex items-center mt-[-60px] space-x-2">
                            <img src={avatar} alt="profile" className="w-24 h-24 rounded-full border-8 border-zinc-900 mt-5" />
                            <h1 className="text-center text-xl font-bold mt-9">Andrei R. Parquez</h1>
                        </div>
                        <div className="flex justify-center items-center m-4">
                            <div className="flex mb-5 ml-2 space-x-6">
                                <div className='text-center'>
                                    <p className=' font-bold'>120</p>
                                    <p className='text-xs'>Reviews</p>
                                </div>
                                <div className='text-center'>
                                    <p className=' font-bold'>120</p>
                                    <p className='text-xs'>Upvotes</p>
                                </div>
                                <div className='text-center'>
                                    <p className=' font-bold'>120</p>
                                    <p className='text-xs'>Curations</p>
                                </div>
                                <div className='text-center'>
                                    <p className=' font-bold'>120</p>
                                    <p className='text-xs'>Reputation</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-1/2 h-11 mx-auto font-bold mb-2 bg-blue-500 text-white rounded-lg mt-5 flex justify-center items-center">
                            <PencilIcon className="w-5 h-5 mr-2 font-bold" />
                            Edit Profile
                        </button>
                    </div>
                </div>
                <nav className="mt-1 w-full">
                    <NavLink 
                      to="/home" 
                      className={({ isActive }) => 
                        isActive ? "flex items-center py-2.5 px-7 transition duration-200 bg-blue-800 text-white" : "flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white"
                      }
                      onClick={closeNav}
                    >
                      <HomeIcon className="w-7 h-7 mr-3" />
                      Home
                    </NavLink>
                    <NavLink 
                      to="/explore" 
                      className={({ isActive }) => 
                        isActive ? "flex items-center py-2.5 px-7 transition duration-200 bg-blue-800 text-white" : "flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white"
                      }
                      onClick={closeNav}
                    >
                      <FireIcon className="w-7 h-7 mr-3" />
                      Explore
                    </NavLink>
                    <NavLink 
                      to="/feed" 
                      className={({ isActive }) => 
                        isActive ? "flex items-center py-2.5 px-7 transition duration-200 bg-blue-800 text-white" : "flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white"
                      }
                      onClick={closeNav}
                    >
                      <ChatBubbleBottomCenterTextIcon className="w-7 h-7 mr-3" />
                      Feed
                    </NavLink>
                    <a href="#" className="flex items-center text-center justify-center text-black font-bold py-2.5 px-7 bg-orange-400 m-5 mx-9 rounded-lg transition duration-200 hover:bg-blue-800 hover:text-white">
                      Curate Now
                    </a>
                    <NavLink 
                      to="/settings" 
                      className={({ isActive }) => 
                        isActive ? "flex items-center py-2.5 px-7 transition duration-200 bg-blue-800 text-white" : "flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white"
                      }
                      onClick={closeNav}
                    >
                      <Cog6ToothIcon className="w-7 h-7 mr-3" />
                      Settings
                    </NavLink>
                    <NavLink 
                      to="/about" 
                      className={({ isActive }) => 
                        isActive ? "flex items-center py-2.5 px-7 transition duration-200 bg-blue-800 text-white" : "flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white"
                      }
                      onClick={closeNav}
                    >
                      <InformationCircleIcon className="w-7 h-7 mr-3" />
                      About
                    </NavLink>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
