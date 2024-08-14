import React from 'react';
import avatar from '../assets/cj.png';
import cover from '../assets/cover.png';
import { NavLink } from 'react-router-dom';
import { HomeIcon, ChatBubbleBottomCenterTextIcon, FireIcon, Cog6ToothIcon, InformationCircleIcon, PencilIcon } from '@heroicons/react/24/solid';

const Sidebar = () => {
  return (
    <aside className="fixed h-full w-64 darkblue text-white hidden md:block">
      <div className="m-7 rounded-lg overflow-hidden">
        {/* <div className="bg-cover bg-center w-full h-20" style={{ backgroundImage: `url(${cover})` }}></div>*/}
        <div className="p-3">
          {/*<div className="flex items-center mt-[-50px] space-x-2">
            <img src={avatar} alt="profile" className="w-12 h-12 rounded-full border-4 border-zinc-900 mt-5" />
            <h1 className="text-center text-base font-bold mt-3">John Doe</h1>
          </div>
          <div className="pl-10">
            <div className="flex mb-5 ml-2 space-x-6">
              <div className='text-center'>
                <p className='text-sm font-bold'>120</p>
                <p className='text-xs'>Reviews</p>
              </div>
              <div className='text-center'>
                <p className='text-sm font-bold'>120</p>
                <p className='text-xs'>Upvotes</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className='text-center'>
                <p className='text-sm font-bold'>120</p>
                <p className='text-xs'>Curations</p>
              </div>
              <div className='text-center'>
                <p className='text-sm font-bold'>120</p>
                <p className='text-xs'>Reputation</p>
              </div>
            </div>
          </div>*/}
          {/*<button className="w-full h-8 bg-blue-500 text-white rounded-lg mt-5 flex justify-center items-center">
            <PencilIcon className="w-4 h-4 mr-2" />
            Edit Profile
          </button>*/}
        </div>
      </div>
      <nav className="mt-1">
        <NavLink 
          to="/home" 
          className={({ isActive }) => 
            isActive ? "flex items-center py-2.5 px-7 transition duration-200 bg-blue-800 text-white" : "flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white"
          }
        >
          <HomeIcon className="w-7 h-7 mr-3" />
          Home
        </NavLink>
        <NavLink 
          to="/explore" 
          className={({ isActive }) => 
            isActive ? "flex items-center py-2.5 px-7 transition duration-200 bg-blue-800 text-white" : "flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white"
          }
        >
          <FireIcon className="w-7 h-7 mr-3" />
          Explore
        </NavLink>
        <NavLink 
          to="/feed" 
          className={({ isActive }) => 
            isActive ? "flex items-center py-2.5 px-7 transition duration-200 bg-blue-800 text-white" : "flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white"
          }
        >
          <ChatBubbleBottomCenterTextIcon className="w-7 h-7 mr-3" />
          Feed
        </NavLink>
        <NavLink 
          to="/curate" 
          className={({ isActive }) => 
            isActive ? "flex items-center text-center justify-center py-2.5 px-7 bg-orange-400 text-black font-bold m-5 mx-9 rounded-lg transition duration-200" : "flex items-center text-center justify-center py-2.5 px-7 bg-orange-400 text-black font-bold m-5 mx-9 rounded-lg transition duration-200 hover:bg-blue-800 hover:text-white"
          }
        >
          Curate Now
        </NavLink>
        <NavLink 
          to="/settings" 
          className={({ isActive }) => 
            isActive ? "flex items-center py-2.5 px-7 transition duration-200 bg-blue-800 text-white" : "flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white"
          }
        >
          <Cog6ToothIcon className="w-7 h-7 mr-3" />
          Settings
        </NavLink>
        <NavLink 
          to="/about" 
          className={({ isActive }) => 
            isActive ? "flex items-center py-2.5 px-7 transition duration-200 bg-blue-800 text-white" : "flex items-center py-2.5 px-7 transition duration-200 hover:bg-blue-800 hover:text-white"
          }
        >
          <InformationCircleIcon className="w-7 h-7 mr-3" />
          About
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
