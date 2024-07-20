import React from 'react';
import profilepic from '../assets/face 1.png';
import hi from '../assets/hi.png';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FiGithub, FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi";
import { ImDownload } from "react-icons/im";
import {
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiHtml5,
  DiCss3
} from 'react-icons/di';

const Hero = () => {
  return (
    <div className='grid md:grid-cols-2 place-items-center max-w-[1000px] mx-auto mb-8 md:mb-22 mt-14 px-3 drop-shadow-2xl'>
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }

          .waving-hand {
            display: inline-block;
            animation: wave 2s infinite;
            transform-origin: 70% 70%;
          }
        `}
      </style>
      <div className='max-w-[1000px] min-w-[300px]'>
        <p className='text-gray-100 md:text-1xl text-2xl tracking-tight font-bold text-center'>
          <div className='flex items-center justify-center'>
            <span> I'm <span className='font-bold'>Andrei Parquez</span></span>
            <img src={hi} className='w-[30px] ml-2 waving-hand' alt='waving hand' />
          </div>
          <h2 className='text-gray-300 text-5xl'>I <span className='text-green-500'>design</span> and <span className='text-green-500'>develop</span> games and websites.</h2>
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "Game Developer",
              1000,
              "Student",
              1000
            ]}
            speed={50}
            repeat={Infinity}
            className='font-bold italic text-green-600 md:text-1xl'
          />
        </p>

        <div className='flex flex-row gap-4 mb-4 md:mb-0'>
          <a href="/path-to-cv.pdf" target="_blank" rel="noopener noreferrer">
    <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-zinc-800 w-28 h-12 mt-6 p-2 bg-green-500 rounded-full ml-4'>
      <ImDownload className='m-1' />CV
    </button>
  </a>
  <div className='flex flex-row gap-2 mb-4 md:mb-0'>
    <a href="https://www.facebook.com/andrei.parquez.5" target="_blank" rel="noopener noreferrer">
      <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-12 h-12 mt-6 p-2 bg-zinc-800 rounded-full'>
        <FiFacebook className='text-2xl font-bold' />
      </button>
    </a>
    <a href="https://github.com/AndreiParquez" target="_blank" rel="noopener noreferrer">
      <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-12 h-12 mt-6 p-2 bg-zinc-800 rounded-full'>
        <FiGithub className='text-2xl font-bold' />
      </button>
    </a>
    <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-12 h-12 mt-6 p-2 bg-zinc-800 rounded-full'>
        <FiTwitter className='text-2xl font-bold' />
      </button>
    </a>
    <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
      <button className='flex items-center justify-center transform transition-transform hover:scale-105 hover:shadow-lg z-10 cursor-pointer font-bold text-gray-200 w-12 h-12 mt-6 p-2 bg-zinc-800 rounded-full'>
        <FiInstagram className='text-2xl font-bold' />
      </button>
    </a>

          </div>
        </div>
      </div>

      <img src={profilepic} className='w-[300px] md:w-[400px] hidden md:block rendering-pixelated hover:rotate-6 duration-200 drop-shadow-2xl' alt='profile' />
    </div>
  );
}

export default Hero;
