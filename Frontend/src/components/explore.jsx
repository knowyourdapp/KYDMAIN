import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Sidebar from './sidebar';
import blockchain from '../assets/blockchain.png';
import Dropdown from './dropdown-explore';
import AppsGrid from './AppsGrid';
import { useNavigate } from 'react-router-dom';
import solana from '../assets/solana.jpg'


import ss from '../assets/image 7.png';
import logo from '../assets/axie-infinity-logo.png';
import Featured from './featured';
import Dapp from './dapp';
import { RiCloseCircleFill } from "react-icons/ri";
import { SolanaJSONRPCErrorCode } from '@solana/web3.js';

const Rankings = () => {
  const navigate = useNavigate();

  const [selectedDapp, setSelectedDapp] = useState(null);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    // Fetch form data from the server when the component loads
    const fetchFormData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/forms'); // Backend API endpoint
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    fetchFormData();
  }, []);

  const handleRowClick = (dapp) => {
    navigate('/dapp', { state: dapp });  
  };

  return (
    <div className="flex md:mt-16 lg:mt-10 mt-16 text-sm">
      <Sidebar />

      {/* Main content */}
      <div className="md:ml-64 flex-grow w-1/2 text-white p-0 md:p-3 lg:px-12 lg:p-10 bg-orange-400">
        <div className="w-full p-3">
          <AppsGrid />
          
          <div className="darkblue shadow-md rounded-md p-4 w-full flex-grow overflow-auto">
            <h1 className='font-bold text-white m-3 text-lg'>Top Blockchain Apps</h1>
            <nav className="mb-4 w-full">
              <ul className="flex justify-start md:justify-between px-7 space-x-4 overflow-x-auto whitespace-nowrap text-sm text-white">
                <li className="flex-shrink-0 border-b-4 border-b-orange-600"><a href="#">All Categories</a></li>
                <li className="flex-shrink-0"><a href="#">Games</a></li>
                <li className="flex-shrink-0"><a href="#">DeFi</a></li>
                <li className="flex-shrink-0"><a href="#">Gaming</a></li>
              </ul>
            </nav>

            <div className="flex items-center space-x-5 mb-4 text-sm">
              <Dropdown />
              <div className="relative w-full my-3">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full p-4 pr-4 py-2 rounded-md border-2 blue border-gray-300 focus:outline-none focus:border-blue-500"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <AiOutlineSearch className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className='blue'>
                  <tr className="border-y-2 border-indigo-100">
                    <th className='p-2 text-center'>Rank</th>
                    <th className='text-center'></th>
                    <th className='text-center'>Name</th>
                    <th className='text-center'>Blockchain</th>
                    <th className='text-center'>Category</th>
                    <th className='text-center'>Status</th>
                    <th className='text-center'>KYD Ratings</th>
                    <th className='text-center'>Community Score</th>
                  </tr>
                </thead>
                <tbody>
                {formData.map((dapp, index) => (
                    <tr key={index} className="border-b-4 border-indigo-300 py-4 cursor-pointer" onClick={() => handleRowClick(dapp)}>
                      <td className="text-center">{index + 1}</td>
                      <td className="text-center">
                      {Array.isArray(dapp.screenshots) && dapp.screenshots.length > 0 ? (
                dapp.screenshots.map((screenshot, screenshotIndex) => (
                  <img
                    key={screenshotIndex}
                    src={`http://localhost:5000/uploads/${screenshot}`} // Construct the URL
                    alt={`Screenshot ${screenshotIndex + 1}`} // Provide an alt text
                    className="w-5 h-5 object-cover m-1" // Add classes for size and spacing
                  />
                ))
              ) : (
                <p>No screenshots available</p> // Fallback if no screenshots exist
              )}
            </td>
                      <td className="text-center">{dapp.name}</td>
                      <td className="flex justify-center items-center">
                      <img src={solana} alt="Logo" className="w-5 h-5" /> </td>
                      <td className="text-center">{dapp.primaryNetwork}</td>
                      <td className="text-center">{dapp.projectStatus}</td>
                      <td className="text-center">
                      <div
                        className={`w-8 h-8 flex justify-center items-center mx-auto rounded-md font-bold text-white ${
                          index === 0
                            ? "bg-green-700"
                            : index === 1
                            ? "bg-green-700"
                            : index === 2
                            ? "bg-green-700"
                            : "bg-red-500"
                        }`}
                      >
                        {index === 0 ? "10" : index === 1 ? "9" : index === 2 ? "7" : "6"}
                      </div>
                    </td>

                    <td className="text-center">
                      <div
                        className={`w-8 h-8 flex justify-center items-center mx-auto rounded-md font-bold text-white ${
                          index === 0
                            ? "bg-green-700"
                            : index === 1
                            ? "bg-green-700"
                            : index === 2
                            ? "bg-green-700"
                            : "bg-red-500"
                        }`}
                      >
                        {index === 0 ? "10" : index === 1 ? "9" : index === 2 ? "7" : "6"}
                      </div>
                    </td>


 
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {selectedDapp && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
              <div className="bg-white w-full md:w-1/2 overflow-y-auto overflow-x-hidden slide-in-right">
                <button className="text-black absolute" onClick={() => setSelectedDapp(null)}><RiCloseCircleFill className='size-7 text-blue-950'/></button>
                
                <Dapp />
                <Featured />


                
              </div>
            </div>
          )}

          <Featured />

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 space-x-auto px-0 md:px-7 lg:px-1 gap-10 text-white mt-10">
            <div className="absolute clip blue px-5 py-2 mt-[-20px] ml-2">
              <h2 className="text-2xl font-bold">What's New?</h2>
            </div>
            <div className="darkblue shadows text-white rounded-lg p-6">
              <div className="overflow-x-auto mt-4">
                <table className="w-full min-w-[600px]">
                  <thead className='blue'>
                    <tr className="border-y-2 border-indigo-100">
                      <th className='p-2 text-center'>Rank</th>
                      <th className='text-left'>Name</th>
                      <th className='text-center'>Token</th>
                      <th className='text-center'>Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((rank) => (
                      <tr key={rank} className="border-b-4 border-indigo-300 py-4">
                        <td className="text-center font-bold">{rank}</td>
                        <td className="flex items-center space-x-2"><img src={logo} alt="Game Logo" className="h-8" />Axie Infinity</td>
                        <td className="text-center">116k</td>
                        <td className="text-center text-red-600">-1.6m</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="darkblue shadows text-white rounded-lg p-6">
              <div className="absolute clip blue px-5 py-2 mt-[-40px] ml-2">
                <h2 className="text-2xl font-bold">News?</h2>
              </div>
              <img src={ss} alt="What's New?" className="w-full object-cover mb-4" />
              <h3 className="font-bold text-xl">Lorem ipsum dolor sit amet, consectetur</h3>
              <p className="text-sm">ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rankings;
