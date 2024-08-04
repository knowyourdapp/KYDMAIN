
import React from 'react';
import cover from '../assets/dappimg.png';
import logo from '../assets/dapplogo.png';
import ss from '../assets/ss.png';
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdFeedback } from "react-icons/md";



const dapp = () => {
  return (
    <div className=" ">
      <div className="flex flex-col md:flex-row gap-10  h-80 bg-blue-300 text-black"  style={{ backgroundImage: `url(${cover})` }}>
        <div className="flex pt-64 px-8 ">
          <img src={logo} alt="Logo" className="w-24 h-24 absolute z-10" />
          <div className="pl-28 text-white z-10">
            <p className="font-bold text-2xl drop-shadow-md">Mastodon</p>
            <p className="font-bold text-base">Rank #12</p>
          </div>
          <div className="absolute w-full h-16  bg-gradient-to-t left-0 from-blue-800 to-transparent"></div>
        </div>
        
      </div>
      
      <nav className="flex items-center justify-between text-sm w-full bg-blue-800 p-5 text-white">
        <ul className="flex space-x-3 ml-28">
          <li>Overview</li>
          <li>Fundamental</li>
          <li>Security</li>
          <li>Overview</li>
          <li>Fundamental</li>
          <li>Security</li>
        </ul>
      </nav>



      <div className="flex flex-col  gap-7  p-3  bg-orange-300 text-black">

        <div className="   p-2 ">
          <div className="flex space-x-2 px-5 absolute">
            <div className="rounded-lg green h-24 w-24 shadow-sm">
              <p className='text-[50px] text-center items-center text-white font-bold mt-2 '>9.5</p>

            </div>
            <div className="py-5 align-middle items-center h-full">
              <p className='font-bold'>2520 users rated this dapp</p>
              <p className='text-base '>Mostly Positive Reviews</p>
            </div>
          </div>


          <div className="blue h-[430px] rounded-2xl  mt-20 p-3 flex-row pt-5 space-y-3 overflow-auto" id="style-2">
            <button className="bg-black  py-2 px-2 rounded-md flex space-x-2 hover:bg-blue-700"><p className='text-white text-xs font-bold'>Add feedback</p> <MdFeedback className='text-base text-white'/></button>
            <div className=" bg-black rounded-2xl p-2 justify-between flex flex-col space-y-4">
              <div className="flex p-2 justify-between">
                <div className="avatar flex space-x-2 ">
                  <img src={logo} alt="Avatar" className="rounded-full h-8" />
                  <div className="text-white ">
                  <p className='text-xs font-bold'>Andrei R. Parquez</p>
                  <p className='text-[11px] text-orange-600 '>Rated 10 dapps</p>
                  </div>
                </div>
                <div className="text-lg green h-10 w-10 rounded items-center flex justify-center">
                  <p className='text-white text-center font-extrabold '>9.5</p>
                </div>
              </div>


              <div className=" text-white w-full px-4 ">
                  <p className='text-sm text-center'>Better than other social media, but needs more UI.</p>
              </div>

              <div className="flex justify-between px-4 py-2">
                <div>
                <button className="green hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
                  <TiArrowSortedUp className="text-white text-2xl" />
                  
                </button>
                <button className="bg-zinc-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full ml-4">
                  <TiArrowSortedDown className="text-white text-2xl" />
                </button>
                </div>
                <p className='text-lime-600 text-[11px] mt-3'>Published on June 10 2024</p>
              </div>




            </div>
            <div className=" bg-black rounded-2xl p-2 justify-between flex flex-col space-y-4">
              <div className="flex p-2 justify-between">
                <div className="avatar flex space-x-2 ">
                  <img src={logo} alt="Avatar" className="rounded-full h-8" />
                  <div className="text-white ">
                  <p className='text-xs font-bold'>Andrei R. Parquez</p>
                  <p className='text-[11px] text-orange-600 '>Rated 10 dapps</p>
                  </div>
                </div>
                <div className="text-lg green h-10 w-10 rounded items-center flex justify-center">
                  <p className='text-white text-center font-extrabold '>9.5</p>
                </div>
              </div>


              <div className=" text-white w-full px-4 ">
                  <p className='text-sm text-center'>Better than other social media, but needs more UI.</p>
              </div>

              <div className="flex justify-between px-4 py-2">
                <div>
                <button className="bg-zinc-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
                  <TiArrowSortedUp className="text-white text-2xl" />
                  
                </button>
                <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full ml-4">
                  <TiArrowSortedDown className="text-white text-2xl" />
                </button>
                </div>
                <p className='text-lime-600 text-[11px] mt-3'>Published on June 10 2024</p>
              </div>
            </div>
            <div className=" bg-black rounded-2xl p-2 justify-between flex flex-col space-y-4">
              <div className="flex p-2 justify-between">
                <div className="avatar flex space-x-2 ">
                  <img src={logo} alt="Avatar" className="rounded-full h-8" />
                  <div className="text-white ">
                  <p className='text-xs font-bold'>Andrei R. Parquez</p>
                  <p className='text-[11px] text-orange-600 '>Rated 10 dapps</p>
                  </div>
                </div>
                <div className="text-lg green h-10 w-10 rounded items-center flex justify-center">
                  <p className='text-white text-center font-extrabold '>9.5</p>
                </div>
              </div>


              <div className=" text-white w-full px-4 ">
                  <p className='text-sm text-center'>Better than other social media, but needs more UI.</p>
              </div>

              <div className="flex justify-between px-4 py-2">
                <div>
                <button className="green hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full">
                  <TiArrowSortedUp className="text-white text-2xl" />
                  
                </button>
                <button className="bg-zinc-600 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded-full ml-4">
                  <TiArrowSortedDown className="text-white text-2xl" />
                </button>
                </div>
                <p className='text-lime-600 text-[11px] mt-3'>Published on June 10 2024</p>
              </div>




            </div>


            

          </div>
        </div>
        <div className=" h-full rounded-xl shadow-sm blue  p-4">
        <p className='font-bold text-2xl text-white'>About</p>
        <p className='text-white text-sm'>Mastodon is a decentralized social network built on open-source software, putting you back in control of your online experience. Mastodon offers a refreshing alternative. Forget algorithms and endless scrolling. </p>
        <p className='text-white text-sm mt-3'>Think of it as a Twitter with a twist. Instead of one giant platform, Mastodon is a network of independent servers called "instances" that cater to various interests and communities. </p>
        
        <p className='font-bold text-base text-white mt-4'>Screenshots</p>
        <img src={ss}  className=" h-80  mx-auto mt-2" />
        
        </div>

      </div>






    </div>
  );
};

export default dapp;
