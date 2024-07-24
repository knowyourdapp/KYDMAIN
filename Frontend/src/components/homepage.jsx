import React from 'react';
import Sidebar from './sidebar';
import Featured from './featured';

import Footer from './footer';
import cover from '../assets/dappimg.png';  
import cov from '../assets/cov.png';  
import logo from '../assets/dapplogo.png'; 
import ss from '../assets/image 7.png';
import hero1 from '../assets/magnifinal.svg';
import hero2 from '../assets/telescope.svg';
import hero3 from '../assets/curator-kyd.svg';
import hero4 from '../assets/kyd-final-miners.svg';
import hero from '../assets/Group 51.png';
          

const Homepage = () => {
  return (
    <>
      <div className="flex min-h-screen md:mt-16 lg:mt-10 mt-16  bg-orange-400  text-sm">
        <Sidebar />
        <div className="md:ml-64 flex-1 p-4 md:p-3 lg:p-10 bg-orange-400 justify-end">  

         
            
            <div className="blue flex shadows justify-between text-white items-end rounded-lg  " style={{
        backgroundImage: `url(${cov})`,
        backgroundRepeat: 'repeat',
        backgroundSize: '700px',


        
      }}>
            <div className="w-1/2"></div>
            <img src={hero} alt="Game Logo" className="md:h-32 h-28 lg:h-52   rounded-lg m-2" />
            

              
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-4">
            
          <div className="darkblue flex shadows  text-white rounded-lg  ">
              <img src={hero1} alt="Game Logo" className="md:w-32 w-28 lg:w-44  rounded-lg m-2" />
              <div className=" flex flex-col justify-center items-center w-full mb-4">
                <h2 className="text-2xl font-bold blue px-4 w-full">Browse</h2>
                <p className='text-sm px-1'>Explore a curated selection of innovative dApps.</p>
              </div>
            </div>

            <div className="darkblue flex shadows  text-white rounded-lg ">
              <img src={hero3} alt="Game Logo" className="md:w-32 w-28 lg:w-44  rounded-lg m-2" />
              <div className=" flex flex-col justify-center items-center w-full mb-4">
                <h2 className="text-2xl font-bold blue px-4 w-full">Curate</h2>
                <p className='text-sm px-1'>Curate and contribute your own dApp to our growing community.</p>
              </div>
            </div>

            <div className="darkblue flex shadows  text-white rounded-lg ">
              <img src={hero4} alt="Game Logo" className="md:w-32 w-28 lg:w-44  rounded-lg m-2" />
              <div className=" flex flex-col justify-center items-center w-full mb-4">
                <h2 className="text-2xl font-bold blue px-4 w-full">Earn</h2>
                <p className='text-sm px-1'>Get rewarded for your review/contributions with our platform's native currency.</p>
              </div>
            </div>

            <div className="darkblue flex shadows text-white rounded-lg ">
              <img src={hero2} alt="Game Logo" className="md:w-32 w-28 lg:w-44  rounded-lg m-2" />
              <div className=" flex flex-col justify-center items-center w-full mb-4">
                <h2 className="text-2xl font-bold blue px-4 w-full">Engage</h2>
                <p className='text-sm px-1'>Vote, rate, comment, and share your thoughts about the dApps in the space.</p>
              </div>
            </div>

          </div>

          <div className="darkblue shadows text-white rounded-lg  mt-10">
            <div className="absolute clip blue px-5 py-2 mt-[-20px] ml-2">
            <h2 className="text-2xl font-bold ">Editorial Spotlight</h2>
            </div>
            <div className="p-1">
            <img src={cover} alt="Mastodon" className="w-full h-48  rounded-lg object-cover " />
            </div>
            <div className="flex flex-col md:flex-row items-center px-10 py-5">
              <img src={logo} alt="Mastodon" className="w-20 h-20 rounded-lg md:mr-4" />
              <div>
                <h3 className="text-lg font-bold md:text-left text-center">Mastodon</h3>
                <p className='text-sm indent-8'>Mastodon is a decentralized social network built on open-source software, putting you back in control of your online experience. Mastodon offers a refreshing alternative. Forget algorithms and endless scrolling. Think of it as a Twitter with a twist.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 space-x-auto px-0 md:px-7 lg:px-1 gap-16 text-white mt-10">
              <div className="absolute clip  blue px-5 py-2 mt-[-20px] ml-2">
              <h2 className="text-2xl font-bold ">What's New?</h2>
              </div>
            <div className="darkblue shadows text-white rounded-lg p-6"> 
              <img src={ss} alt="What's New?" className="w-full  object-cover mb-4" />
              <h3 className=" font-bold text-xl">Lorem ipsum dolor sit amet, consectetur</h3>
              <p className="text-sm">ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>

           
            <div className="darkblue shadows text-white rounded-lg p-6">
            <div className="absolute clip blue px-5 py-2 mt-[-40px] ml-2">
            <h2 className="text-2xl font-bold ">News?</h2>
            </div>
              
              <img src={ss} alt="What's New?" className="w-full  object-cover mb-4" />
              <h3 className=" font-bold text-xl">Lorem ipsum dolor sit amet, consectetur</h3>
              <p className="text-sm">ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <Featured />
        
        </div>
        
      </div>
     
      
    </>
  );
};

export default Homepage;
