import Sidebar from './sidebar';
import Footer from './footer';
import Home from './home';
import React from 'react';
import hero1 from '../assets/reviewteam 1.png';
import hero2 from '../assets/tracker 1.png';
import icon1 from '../assets/dao.png';
import icon2 from '../assets/2tokens.png';
import icon3 from '../assets/badge.png';


const About = () => {
  return (
    <>
    <div className="min-h-screen  md:mt-16 lg:mt-10 mt-16  blue  text-sm">
    <Sidebar />
    <div className="flex-grow md:ml-64 md:p-4 p-2  space-y-20">
      <Home />
      
      <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-row gap-10 px-1 md:px-10 lg:px-20 text-black">
        <div className="flex-1 rounded bg-yellow clipped-bg-yellow p-10">
          <p className="font-bold text-md">Discoverability & Tracking</p>
          <p className="text-sm mt-2">
            <p className="font-bold text-sm">Expert Analysis & Data Aggregation:</p>
            We curate and rank dApps based on a comprehensive evaluation, ensuring you discover the best options.
          </p>
          <div className="flex mt-3">
            <p className="text-sm mt-2">
              <p className="font-bold text-sm">Discoverability & Reliability: </p>
              A higher ranking indicates a dApp's potential and user trust, making it easier to find trustworthy projects.
            </p>
            <img src={hero2} className="w-28 h-2863 max-w-md mx-auto" />
          </div>
          <p className="text-sm mt-2">
            <p className="font-bold text-sm">Trending & Unique Gems:</p>
            We also showcase trending dApps and those with unique features, keeping you at the forefront of innovation
          </p>
        </div>
        <div className="flex-1 rounded clipped-bg-yellow2 bg-yellow p-10">
          <p className="font-bold text-md">Credible Data Aggregation & QA dApp Reviewer</p>
          <p className="text-sm mt-2">
            Rather than focusing solely on surface-level metrics like social scores, a comprehensive approach involves collecting all important and relevant data, both on and off-chain
          </p>
          <div className="flex mt-3 ">
            <img src={hero1} className="w-28 max-w-md h-28 mx-auto" />
            <p className="text-sm mt-2">
              On top of the data analytics, we also have an onboard QA reviewer team that reviews dApps manually. The platform will also provide an opportunity for the users in the community to be part of the reviewer team.
            </p>
          
          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row md:flex-wrap gap-10 px-16 text-white">
  <div className="flex-1 rounded p-10 text-center space-y-2 md:space-x-6 md:w-1/2">
    <img src={icon1} className="w-40 max-w-md mx-auto" />
    <p className='font-bold text-md'>DAO COUNCIL</p>
    <p className='text-sm'>KYD provides a decentralized approach through the KYD Council, a Decentralized Autonomous Organization (DAO) council established to foster user participation and shape the platform's future.</p>
  </div>
  <div className="flex-1 rounded p-5 text-center space-y-6 md:w-1/2">
    <img src={icon3} className="w-32 max-w-md mx-auto" />
    <p className='font-bold text-md'>BADGE SYSTEM</p>
    <p className='text-sm'>KYD rewards valuable contributions and fosters trust with a tiered badge system.
      Users: Earn badges for participation, fostering a stronger community.
      Developers: Earn badges for high-scoring dApps, KYC verification, and platform engagement. These badges signal trust, quality, and dedication to users.</p>
  </div>
  <div className="flex-1 rounded p-5 text-center space-y-6 md:w-full">
    <img src={icon2} className="w-32 max-w-md mx-auto" />
    <p className='font-bold text-md'>TWO TOKEN, POWERFUL ECOSYSTEM</p>
    <p className='text-sm'>$DP (DApps Points): This utility token rewards you for valuable contributions like reviews and upvotes. Earn $DP and fuel your engagement within the KYD community.
    $KYD (KnowYourDapp Token): The platform's core, Proof-of-Stake (PoS) token with dual functionality for Governance and Utility of the platform.</p>
  </div>
</div>



      <div className=" md:flex-row gap-10 px-2 md:px-5 lg:px-10 text-white  ">
        <div className="flex rounded p-10 text-center clipped-bg-blue space-x-4 overflow-auto">
          <div className="absolute">
            <p className='font-bold'>2024 to 2025</p>
            <p className='font-bold text-2xl'>KYD Road Map</p>
          </div>
         <div className='bg-white p-3 w-56 space-y-3 mt-56 min-w-48 h-full'>
          <p className='bg-yellow text-black text-sm p-2 font-bold'>Q1 2024 - Phase 1:</p>
          <div className="text-black text-sm text-left mx-4">
            <li>Initiation of the Project</li>
            <li>Project Planning</li>
            <li>Risk Management Planning</li>
          </div>

          <p className='bg-yellow text-black text-sm p-2 font-bold '>Q2 2024 - Phase 2:</p>
          <div className="text-black text-sm text-left mx-4">
            <li>Deployment of Initial Website Features (manual rating system, all main pages)</li>
            <li>Launch of the KnowYourDapp platform</li>
            <li>Launch of the communities</li>
            <li>Foundation partnership/grant</li>
            <li>Listing of dApps</li>
          </div>
         </div>


        <div className='bg-white p-3 w-56 space-y-3 mt-40 min-w-48 h-full'>
          <p className='bg-yellow text-black text-sm p-2 font-bold'>Q3 2024 - Phase 1:</p>
          <div className="text-black text-sm text-left mx-4">
            <li>Deployment Mid-feature website</li>
            <li>$KYD token launch and initial blockchain integration</li>
            <li>Start of First wave marketing campaign*</li>
            <li>Airdrop and Bounty Campaign Launch  </li>
            <li>blockchain/hashgraph ecosystem partnerships</li>
          </div>

          <p className='bg-yellow text-black text-sm p-2 font-bold '>Q3 2024 - Phase 2:</p>
          <div className="text-black text-sm text-left mx-4">
            <li>$KYD Presale*</li>
            <li>Launch of the KYD services</li>
            <li>(DAO) KYD boards deployment*</li>
            <li>Foundation partnership/grant</li>
            <li>Post-token launch event</li>
          </div>
        </div>


        <div className='bg-white p-3 w-56 min-w-48 space-y-3 mt-28 h-full'>
          <p className='bg-yellow text-black text-sm p-2 font-bold'>Q4 2024 - Phase 1:</p>
          <div className="text-black text-sm text-left mx-4">
            <li>Deployment of Intermediate-feature website (community rating sytem, staking systems, rewards system)</li>
            <li>Launch of dex liquidity pool</li>
            <li>Launch of the badges system and rewards system</li>
            <li>Start of second wave marketing campaign*</li>
            <li>Public Listing of $KYD</li>
          </div>

          <p className='bg-yellow text-black text-sm p-2 font-bold '>Q4 2024 - Phase 2:</p>
          <div className="text-black text-sm text-left mx-4">
            <li>Full Feature Website</li>
            <li>$KYD Initial Token Burning</li>
            <li>Launch game incubators</li>
            <li>launchpads for further growth and expansion</li>
            <li>onboarding mor partners</li>
          </div>
        </div>


        <div className='bg-white p-3 w-56 space-y-3 mt-10 min-w-48 h-full'>
          <p className='bg-yellow text-black text-sm p-2 font-bold'>Q1 2025 - Phase 1:</p>
          <div className="text-black text-sm text-left mx-4">
            <li>dApp marketplace launch




</li>
            <li>Launchpads for further growth and expansion</li>
            <li>integration into decentralized social media*</li>
            <li>KYD smart contract audits services</li>
            <li>KYT Certified badges</li>
            <li>integration to the metaverse*</li>
          </div>

        
        </div>

      


          
        
       
        </div>
      </div>
      
    </div>
    </div>
    </>
  );
};

export default About;
