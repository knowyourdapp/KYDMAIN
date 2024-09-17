


import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the import path as needed
import landing from '../assets/landing.png';
import token from '../assets/token.png';
import token2 from '../assets/token2.png';
import signin from '../assets/signin.png';

import axios from 'axios';



function Index() {
  
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAccountModal, setShowAccountModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    username: '',
    email: '',
    password: '',
    reEnterPassword: '',
    walletAddress: '',
  });
  const [errorMessages, setErrorMessages] = useState({ login: '', signup: '' });
  const navigate = useNavigate();

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const toggleAccountModal = () => {
    setShowAccountModal(!showAccountModal);
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', loginData);
      console.log('Login successful:', response.data);
      
      // Store username in localStorage
      localStorage.setItem('email', response.data.email);
      console.log('Stored email:', localStorage.getItem('email'));

      navigate('/home'); // Redirect to home page
    } catch (error) {
      console.error('Login error:', error.response.data);
      setErrorMessages({ ...errorMessages, login: error.response.data.message || 'Invalid credentials' });
    }
  };
  

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (signupData.password !== signupData.reEnterPassword) {
      setErrorMessages({ ...errorMessages, signup: 'Passwords do not match' });
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/api/auth/signup', signupData);
      console.log('Signup successful:', response.data);
      setShowSuccessModal(true); // Show success modal
      setShowAccountModal(false); // Hide signup modal
      setErrorMessages({ ...errorMessages, signup: '' }); // Clear any existing signup errors
    } catch (error) {
      console.error('Signup error:', error.response.data);
      setErrorMessages({ ...errorMessages, signup: error.response.data.message || 'Signup error' });
    }
  };

  useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        setShowSuccessModal(false);
        setShowLoginModal(true); // Show login modal after 4 seconds
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal]);
  

  return (
    <div className='relative h-screen flex flex-col justify-center overflow-hidden blue md:p-4 p-2'>
      <Navbar toggleLoginModal={toggleLoginModal} />
      <div className="bg-orange-400 rounded-full absolute top-[-50px] right-[-100px] z-10 shadows h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] md:h-[700px] md:w-[700px] md:block hidden lg:h-[1000px] lg:w-[1000px]"></div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="h-screen z-20 w-full md:w-4/12 md:h-[700px] flex space-y-6 flex-col justify-center items-center md:px-2">
          <p className='text-white text-[30px] md:text-[40px] lg:text-[50px] font-semibold text-center'>
            Your <span className='text-orange-500 font-extrabold drop-shadow'>Social Platform </span> for dApps
          </p>
          <div className="px-auto">
            <p className='text-white font-bold text-center text-sm md:text-sm'>Discover, discuss, and contribute to the dApp revolution.</p>
            <p className='text-white font-bold mt-2 text-center text-sm md:text-sm'>Curate your favorite dApps, engage with the community, review and earn $DP.</p>
          </div>
          <div className='flex space-x-4'>
            <button className='bg-orange-500 text-black rounded-lg p-3 font-bold text-sm md:text-sm shadow' onClick={() => navigate('/home')}>Go to Home</button>
            <button className='bg-white text-black rounded-lg p-3 font-bold text-sm md:text-sm shadow' onClick={() => navigate('/explore')}>Explore dApps!</button>
          </div>
        </div>
        <div className="h-screen z-20 w-full md:w-6/12 md:h-[700px] relative hidden md:block">
          <img src={landing} alt="Game Logo" className="w-full left-10 md:left-0 rounded-2xl absolute bottom-0 md:bottom-32 lg:bottom-0 2xl:bottom-0" />
          <img src={token} alt="Token 1" className="w-1/5 md:w-1/3 lg:w-1/5 float-animation-1 absolute left-10 md:bottom-96 lg:bottom-[460px] md:left-0" />
          <img src={token2} alt="Token 2" className="w-1/3 md:w-1/4 lg:w-1/5 float-animation-2 absolute bottom-0 md:bottom-52 lg:bottom-0 right-10 md:right-6" />
          <img src={token} alt="Token 3" className="w-1/3 md:w-1/6 lg:w-1/5 float-animation-3 absolute bottom-0 md:bottom-52 lg:bottom-0" />
          <img src={token2} alt="Token 4" className="w-1/3 md:w-1/4 lg:w-1/6 float-animation-4 absolute md:bottom-96 lg:bottom-[300px] right-10 md:right-28" />
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl md:space-x-4 mx-4 flex flex-col md:flex-row">
            <button className="absolute top-1 right-3 text-gray-500 font-extrabold" onClick={toggleLoginModal}>x</button>
            <div className="w-full md:w-2/3 flex justify-center items-center rounded-lg mt-4 md:mt-0">
              <img src={signin} alt="Game Logo" className="md:w-full w-3/4 rounded-lg" />
            </div>
            <div className="w-full md:w-1/3">
              <h2 className="text-lg font-bold mb-4 text-center">Login to your Account</h2>
              {errorMessages.login && <p className="text-red-500 text-center mb-4">{errorMessages.login}</p>}
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <label className="block text-black mb-2 text-xs">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={loginData.username}
                    onChange={handleLoginChange}
                    className="w-full p-2 border text-sm border-gray-300 rounded-lg shadow-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2 text-xs">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleLoginChange}
                    className="w-full p-2 text-sm border border-gray-300 rounded-lg shadow-lg"
                  />
                  <a href='#' className='text-xs'>Forgot Password?</a>
                </div>
                <div className="flex space-x-2 justify-center items-center">
                  <button type="submit" className="blue text-white py-2 px-4 border-2 rounded-lg text-sm font-bold">Login</button>
                  <button type="button" className="bg-white text-black border-2 py-2 px-1 text-sm rounded-lg font-bold" onClick={toggleAccountModal}>Create an account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showAccountModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl md:space-x-4 mx-4 flex flex-col md:flex-row">
            <button className="absolute top-1 right-3 text-gray-500 font-extrabold" onClick={toggleAccountModal}>x</button>
            <div className="w-full md:w-1/2 flex justify-center items-center rounded-lg mt-4 md:mt-0">
              <img src={signin} alt="Game Logo" className="w-full rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-lg font-bold mb-4 text-center">Sign Up</h2>
              {errorMessages.signup && <p className="text-red-500 text-center mb-4">{errorMessages.signup}</p>}
              <form onSubmit={handleSignupSubmit}>
                <div className="mb-4">
                  <label className="block text-black mb-2 text-xs">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={signupData.username}
                    onChange={handleSignupChange}
                    className="w-full p-2 border text-sm border-gray-300 rounded-lg shadow-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2 text-xs">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={signupData.email}
                    onChange={handleSignupChange}
                    className="w-full p-2 border text-sm border-gray-300 rounded-lg shadow-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2 text-xs">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={signupData.password}
                    onChange={handleSignupChange}
                    className="w-full p-2 border text-sm border-gray-300 rounded-lg shadow-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2 text-xs">Re-enter Password</label>
                  <input
                    type="password"
                    name="reEnterPassword"
                    value={signupData.reEnterPassword}
                    onChange={handleSignupChange}
                    className="w-full p-2 border text-sm border-gray-300 rounded-lg shadow-lg"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-black mb-2 text-xs">Wallet Address</label>
                  <input
                    type="text"
                    name="walletAddress"
                    value={signupData.walletAddress}
                    onChange={handleSignupChange}
                    className="w-full p-2 border text-sm border-gray-300 rounded-lg shadow-lg"
                  />
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="blue text-white py-2 px-4 border-2 rounded-lg text-sm font-bold">Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-full max-w-sm">
            <h2 className="text-lg font-bold mb-4">Signup Successful!</h2>
            <p className="mb-4">You will be redirected to the login page shortly...</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={() => setShowSuccessModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;

