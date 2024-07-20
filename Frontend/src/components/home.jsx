import React from 'react';
import hero1 from '../assets/magnifinal.svg';
import hero2 from '../assets/telescope.svg';
import hero3 from '../assets/curator-kyd.svg';
import hero4 from '../assets/kyd-final-miners.svg';

const Home = () => {
  return (
    <div className="flex-grow md:p-4 p-2 md:mt-20 mt-16">
      <div className="flex flex-col md:flex-row gap-4 clipped-bg shadowbg">
        <div className="flex-1 text-white rounded flex flex-col justify-center  lg:ps-24 md:p-8 p-10 ">
          <h1 className="text-left md:text-3xl lg:text-6xl text-2xl">Know your </h1>
          <h1 className="font-bold md:text-3xl lg:text-6xl text-2xl">dApplications</h1>
          <p className="text-lg mt-5">Unveil the cryptospace, one dApp at a time. Research and review the latest dApps using live data and advance data aggregation.</p>
        </div>
        <div className="flex-1 p-4 rounded flex items-center justify-center">
          <img src={hero1} alt="Game Logo" className="w-full md:w-60 lg:w-full h-auto max-w-md" />
        </div>
      </div>

      

      <div className="md:flex flex-col md:flex-row gap-4 ">
        <div className="flex-1 p-4 rounded flex items-center justify-center">
          <img src={hero2} alt="Game Logo" className="w-full md:w-60 lg:w-full h-auto max-w-md" />
        </div>
        <div className="flex-1 text-white rounded flex flex-col justify-center  lg:ps-24 md:p-8 p-10 ">
          <h1 className="font-bold md:text-3xl lg:text-6xl text-2xl">Explore. Discover.</h1>
          <p className="text-lg mt-5">dApps made easy. Dive into the best with KnowYourDapp.com. Curated rankings, powerful search & trending picks. Stop drowning in surface level crypto data</p>
        </div>
      </div>



      <div className="flex flex-col md:flex-row gap-4  clipped-bg">
      <div className="flex-1 text-white rounded flex flex-col justify-center  lg:ps-24 md:p-8 p-10 ">
          <h1 className="text-left md:text-3xl lg:text-3xl text-2xl">Curates dApps with </h1>
          <h1 className="font-bold md:text-3xl lg:text-6xl text-2xl">KYD rating system</h1>
          <p className="text-lg mt-5">Tired of shallow and shady data reviews? Go thru intricate dApps analysis with our KYD Rating System. Dive deeper for real data and better decisions</p>
        </div>
        <div className="md:flex-1 p-4 rounded flex items-center justify-center">
          <img src={hero3} alt="Game Logo" className="w-full md:w-60 lg:w-full h-auto max-w-md" />
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 p-4 rounded flex items-center justify-center">
          <img src={hero4} alt="Game Logo" className="w-full md:w-60 lg:w-full h-auto max-w-md" />
        </div>
        <div className="flex-1 text-white rounded flex flex-col justify-center  lg:ps-24 md:p-8 p-10 ">
          <h1 className="font-bold md:text-3xl lg:text-6xl text-2xl">Feedback-to-Earn</h1>
          <h1 className="text-left md:text-3xl lg:text-3xl text-2xl">Decentralized & incentivize users’ feedback</h1>
          <p className="text-lg mt-5">Your voice matters. Earn $DP tokens by providing valuable feedback and helping us build a better future for dApps.</p>
        </div>
      </div>


    </div>
  );
};

export default Home;
