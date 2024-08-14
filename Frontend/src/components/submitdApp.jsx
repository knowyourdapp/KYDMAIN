import React, { useState } from 'react';

import Sidebar from './sidebar';

const FormPage = () => {
  const [activeTab, setActiveTab] = useState('general');

  const renderFormContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <form className='darkblue p-6'>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="col-span-2">
                <label className="block mb-2">Name</label>
                <input type="text" className="w-1/2 p-2 rounded blue" />
              </div>

              <div className="col-span-1">
                <label className="block mb-2">Logo</label>
                <div className="border-2 border-dashed rounded-lg p-4 flex items-center justify-center blue">
                  <p className='text-base'>Browse Files</p>
                </div>
              </div>
              <br></br>

              <div>
                <label className="block mb-2">Website</label>
                <input type="text" className="w-full p-2 rounded blue" />
              </div>

              <div>
                <label className="block mb-2">Status</label>
                <select className="w-full p-2 rounded blue">
                  <option>Select Status</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Short Teaser</label>
                <input type="text" className="w-full p-2 rounded blue" />
              </div>

              <div>
                <label className="block mb-2">Is the founder/team doxxed?</label>
                <select className="w-full p-2 rounded blue">
                  <option>Select Option</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="block mb-2">Description</label>
                <textarea className="w-full p-2 rounded blue h-32"></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-4">
            <button className="bg-blue-800 px-4 py-2 rounded text-white">Next</button>
          </div>
          </form>
        );
      case 'category':
        return (
          <form className='darkblue p-6'>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block mb-2">Category Name</label>
                <input type="text" className="w-full p-2 rounded blue" />
              </div>
              <div>
                <label className="block mb-2">Category Type</label>
                <select className="w-full p-2 rounded blue">
                  <option>Select Type</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block mb-2">Category Description</label>
                <textarea className="w-full p-2 rounded blue h-32"></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-4">
            <button className="bg-blue-800 px-4 py-2 rounded text-white">Next</button>
          </div>
          </form>
        );
      case 'technical':
        return (
          <form className='darkblue p-6 text-xs'>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="block mb-2">Primary Blockchain Network</label>
                <select className="w-1/2 p-2 rounded blue">
                  <option>Select Network</option>
                </select>
              </div>

              <div className="col-span-2">
                <label className="block mb-2">If multiple chains, please select the following chains:</label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    'Acala', 'Algorand', 'Astar', 'Avalanche', 'Base', 'BNB Chain', 
                    'Ethereum', 'Solana', 'Polygon', 'Optimism', 'zkSync Era',
                    'Flow', 'Immutable X', 'Moonriver', 'Near', 'Ronin', 'Skale',
                    'WAX', 'Wemix', 'ThunderCore', 'Aptos', 'Tezos', 'Arbitrum',
                    'Hedera', 'Klaytn', 'ZetaChain', 'EOS', 'Telos', 'TRON'
                  ].map(chain => (
                    <div key={chain} className="flex items-center">
                      <input type="checkbox" id={chain} className="mr-2" />
                      <label htmlFor={chain}>{chain}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-2">Primary Token Address</label>
                <input type="text" className="w-full p-2 rounded blue" />
              </div>

              <div>
                <label className="block mb-2">Is the token audited?</label>
                <select className="w-full p-2 rounded blue">
                  <option>Select Option</option>
                </select>
              </div>

              <div>
                <label className="block mb-2">Coin Listings (dex, marketplace, listings, etc.)</label>
                <input type="text" className="w-full p-2 rounded blue" />
              </div>

              <div>
                <label className="block mb-2">Coin Listings (dex, marketplace, listings, etc.)</label>
                <input type="text" className="w-full p-2 rounded blue" />
              </div>
            </div>
            <div className="flex justify-end mt-4">
            <button className="bg-blue-800 px-4 py-2 rounded text-white">Next</button>
          </div>
          </form>
        );

        case 'content':
          return (
            <form className='darkblue p-6 text-xs'>
              {/* Content and Links Form */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block mb-2">Screenshots</label>
                  <div className="border-2 w-1/2 border-dashed rounded-lg p-4 flex items-center justify-center blue">
                    <p className='text-sm'>Browse Files</p>
                  </div>
                </div>
        
                <div className="col-span-2">
                  <label className="block mb-2">Teaser/Gameplay Video</label>
                  <div className="border-2 w-1/2 border-dashed rounded-lg p-4 flex items-center justify-center blue">
                    <p className='text-sm'> Browse Files</p>
                  </div>
                </div>
        
                <div className="col-span-2">
                  <label className="block mb-2">Social Media Links</label>
                  <div className="space-y-2">
                    {['Telegram', 'X (Twitter)', 'Discord', 'Facebook', 'YouTube', 'Reddit', 'Mastodon', 'Lenster', 'Medium'].map(platform => (
                      <input
                        key={platform}
                        type="text"
                        placeholder={platform}
                        className="w-full p-2 rounded blue"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-4">
            <button className="bg-blue-800 px-4 py-2 rounded text-white">Next</button>
          </div>
            </form>
          );
        
        default:
        return null;
    }
  };

  return (
    <div className="flex md:mt-16 lg:mt-10 mt-16 text-sm">
      <Sidebar />

      {/* Main content */}
      <div className="md:ml-64 flex-grow w-1/2 text-white p-0 md:p-3 lg:px-12 lg:p-10 flex bg-orange-400">
        <div className="w-full rounded-lg text-white">
          {/* Navigation Tabs */}
          <div className="flex">
            <button
              className={`px-5 py-3 rounded-t-lg ${activeTab === 'general' ? 'darkblue' : 'blue'}`}
              onClick={() => setActiveTab('general')}
            >
              General Information
            </button>
            <button
              className={`px-5 py-3 rounded-t-lg ${activeTab === 'category' ? 'darkblue' : 'blue'}`}
              onClick={() => setActiveTab('category')}
            >
              Category
            </button>
            <button
              className={`px-5 py-3 rounded-t-lg ${activeTab === 'technical' ? 'darkblue' : 'blue'}`}
              onClick={() => setActiveTab('technical')}
            >
              Technical
            </button>
            <button
              className={`px-5 py-3 rounded-t-lg ${activeTab === 'content' ? 'darkblue' : 'blue'}`}
              onClick={() => setActiveTab('content')}
            >
              Content and Links
            </button>
          </div>

          {/* Render Form Content Based on Active Tab */}
          {renderFormContent()}

          
        </div>
      </div>
    </div>
  );
};

export default FormPage;
