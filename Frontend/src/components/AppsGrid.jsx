import React from 'react';
import zk from '../assets/zk.png';
import bz from '../assets/bz.png';
import h from '../assets/h.png';
import t from '../assets/t.png';
import r from '../assets/r.png';
import d from '../assets/d.png';

const appsData = [
  {
    title: 'ZkFinance',
    category: 'DeFi',
    votes: 188,
    description: 'zkFinance is an all-in-one DEFI solution for zkSync. Offering lending & borrowing, bridge, cross-chain swaps and a concentrated liquidity DEX.',
    
    image: zk,
  },
  {
    title: 'HOPE GAMES',
    category: 'Games',
    votes: 87,
    description: 'GambleFi platform built on the Blast Layer2 network, designed to provide an exciting and rewarding gaming experience for web3.',
    
    image: h,
  },
  {
    title: 'Biswap DEX',
    category: 'DeFi',
    votes: 108,
    description: 'Biswap V3 is an innovative decentralized exchange that employs a novel discretized concentrated liquidity mechanism.',
    
    image: bz,
  },
  {
    title: 'TFM',
    category: 'DeFi',
    votes: 94,
    description: 'Interchain terminal including multiple products: - Cross-chain swaps and transfers between any IBC enabled Cosmos chains.',
    
    image: t,
  },
  {
    title: 'RIVES',
    category: 'Games',
    votes: 77,
    description: 'RIVES is revolutionizing the gaming experience with its onchain fantasy console that unlocks creativity and enhances value.',
    
    image: r,
  },
  {
    title: 'DCA.Monster',
    category: 'DeFi',
    votes: 70,
    description: 'DCA.Monster is an Automated Market Maker (AMM) leveraging ERC20 streams for granular, efficient on-chain Dollar Cost Averaging (DCA).',
    
    image: d,
  },
];

const AppsGrid = () => {
  return (
    <div className="p-3 md:p-12 bg-orange-100 rounded-md text-black mb-4">
      <div className="flex justify-between items-center mb-4">
      <h1 className='font-bold  m-3 text-lg'>Explore Community Curated dApps</h1>
        <a href="#" className="text-black">View more...</a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {appsData.map((app, index) => (
          <div key={index} className={`p-4 border  bg-white shadowleft`}>
            <div className="flex items-center mb-2">
              <img src={app.image} alt={app.title} className="w-12 h-12 mr-2" />
              <div className='w-full'>
                <h3 className="text-base font-bold">{app.title}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-sm text--600">{app.category}</p>
                    <div className="flex justify-between items-center">
                        <span className="text-lg">▲</span>
                        <span className="text-base font-bold">{app.votes}</span>
                    </div>
                </div>
              </div>
            </div>
           
            <p className="my-6 text-sm">{app.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppsGrid;
