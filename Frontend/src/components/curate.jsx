import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';

import AppsGrid from './AppsGridcurate';

import monkey from '../assets/monkey.png';

import rec from '../assets/earn.png';
import particle from '../assets/particle.png';
import Featured from './featured';
import Dapp from './dapp';
import { RiCloseCircleFill } from "react-icons/ri";

const Rankings = () => {
  const [selectedDapp, setSelectedDapp] = useState(null);
  const navigate = useNavigate();
  const handleRowClick = (dapp) => {
    setSelectedDapp(dapp);
  };

  return (
    <div className="flex md:mt-16 lg:mt-10 mt-16 text-sm">
      <Sidebar />

      {/* Main content */}
      <div className="md:ml-64 flex-grow w-1/2 text-white p-0 md:p-3 lg:px-12 lg:p-10 flex bg-orange-400">
        <div className="w-3/4 p-6 rounded-lg darkblue">
        <h1 className='font-bold  m-3 text-lg'>Community Curated dApps</h1>
          <AppsGrid />
          
          

          
        </div>
        <div className='w-1/4 px-3 space-y-6'>
            <div className='darkblue shadow-md rounded-lg p-4 w-full'>
              <img src={rec} alt="blockchain" className="w-full h-32" />
              <button className='bg-blue-800 text-white p-2 font-bold shadow-md rounded-md w-full mt-2' onClick={() => navigate('/submitdApp')}>Submit a dApp</button>

            </div>
            <div className='darkblue shadow-md rounded-lg p-4 w-full grid grid-cols-4 pt-8 gap-4'>
            <div className="absolute clip blue ml-[-10px] px-2 py-2 mt-[-50px] ">
              <h2 className="text-sm font-bold">Top Contributors</h2>
            </div>
              <img src={monkey} alt="" className="size-10" />
              <img src={monkey} alt="" className="size-10" />
              <img src={monkey} alt="" className="size-10" />
              <img src={monkey} alt="" className="size-10" />
              <img src={monkey} alt="" className="size-10" />
              <img src={monkey} alt="" className="size-10" />
              <img src={monkey} alt="" className="size-10" />
              <img src={monkey} alt="" className="size-10" />
              <img src={monkey} alt="" className="size-10" />
              <img src={monkey} alt="" className="size-10" />
              

            </div>

            <div className='darkblue shadow-md rounded-lg p-4 w-full grid grid-cols-1 pt-8 gap-4'>
            <div className="absolute clip blue ml-[-10px] px-2 py-2 mt-[-50px] ">
              <h2 className="text-sm font-bold">Other dApps</h2>
            </div>
              <div className="flex items-center space-x-2">
                <img src={particle} alt="" className="size-8" /> <p className='text-sm font-semibold'>Particle Network</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={particle} alt="" className="size-8" /> <p className='text-sm font-semibold'>Particle Network</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={particle} alt="" className="size-8" /> <p className='text-sm font-semibold'>Particle Network</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={particle} alt="" className="size-8" /> <p className='text-sm font-semibold'>Particle Network</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={particle} alt="" className="size-8" /> <p className='text-sm font-semibold'>Particle Network</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={particle} alt="" className="size-8" /> <p className='text-sm font-semibold'>Particle Network</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={particle} alt="" className="size-8" /> <p className='text-sm font-semibold'>Particle Network</p>
              </div>
              
              
              

            </div>
        </div>

      </div>
    </div>
  );
};

export default Rankings;
