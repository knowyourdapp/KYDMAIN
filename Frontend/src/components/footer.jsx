// Footer.jsx
import React from 'react';
import logo from '../assets/2.png';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t border-gray-200 rounded-lg mt-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center space-x-8 items-start">
          <div className="flex flex-col justify-center mb-8 md:mb-0">
            <h1 className="text-lg font-bold text-gray-900 mb-2">Because Information is Power.</h1>
            <div className="items-center">
                <div className='flex'>
              <img src={logo} alt="Logo" className="h-8 w-auto mr-2" />
              <a className=' text-xl flex items-center'>
                    knowyour<span className='text-orange-500'>d</span><span className='text-blue-800'>app</span>
                </a>
                </div>
              <p className="text-sm text-gray-900">Your Unbiased dApp Knowledge Source.</p>
            </div>
          </div>
            <div className="grid grid-cols-3 gap-8 md:flex  md:space-x-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Product</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><a href="#rankings" className="hover:underline">Rankings</a></li>
                  <li><a href="#game-fi" className="hover:underline">Game-Fi dApps</a></li>
                  <li><a href="#defi" className="hover:underline">De-Fi dApps</a></li>
                  <li><a href="#social" className="hover:underline">Social dApps</a></li>
                  <li><a href="#utility" className="hover:underline">Utility dApps</a></li>
                  <li><a href="#tools" className="hover:underline">Tools dApps</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Company</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><a href="#terms" className="hover:underline">Terms of Use</a></li>
                  <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                  <li><a href="#notice" className="hover:underline">General Notice</a></li>
                  <li><a href="#about" className="hover:underline">About Us</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Resources</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><a href="#whitepaper" className="hover:underline">Whitepaper</a></li>
                  <li><a href="#tokenomics" className="hover:underline">Tokenomics</a></li>
                  <li><a href="#faq" className="hover:underline">FAQ</a></li>
                  <li><a href="#brand-assets" className="hover:underline">Brand Assets</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Contribute</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li><a href="#submit" className="hover:underline">Submit dApp</a></li>
                  <li><a href="#advertise" className="hover:underline">Advertise</a></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
