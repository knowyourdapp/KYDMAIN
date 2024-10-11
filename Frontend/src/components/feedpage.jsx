import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import avatar from '../assets/axie.png';
import logo from '../assets/dapplogo.png';
import Sidebar from './sidebar';
import Footer from './footer';
import { FaceSmileIcon, GifIcon } from '@heroicons/react/24/outline';
import Dropdown from './dropdown';
import SolflareIntegration from './SolflareIntegration';

const FeedPage = () => {
  const [username, setUsername] = useState('Guest'); // Initialize as 'Guest'
  const [postInput, setPostInput] = useState('');
  const [dappName, setDappName] = useState('');
  const [dappImage, setDappImage] = useState('');
  const [rating, setRating] = useState(0);
  const [ratingsData, setRatingsData] = useState([]);

  useEffect(() => {
    fetchRatings();
    const storedEmail = localStorage.getItem('email'); // Retrieve email from localStorage
  console.log('Retrieved email:', storedEmail);
  
  if (storedEmail) {
    // Fetch username based on the email
    fetchUsername(storedEmail);
  }
    
  }, []);

  const fetchUsername = async (email) => {
    try {
      const response = await axios.post('http://localhost:5000/api/auth/get-username', { email }); // Assuming you create this endpoint
      const { username } = response.data;
      setUsername(username); // Set the username based on response
    } catch (err) {
      console.error('Error fetching username:', err);
      setUsername('Guest'); // Fallback in case of error
    }
  };

  const fetchRatings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/ratings');
      setRatingsData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (event) => {
    setPostInput(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const newRating = {
        username, 
        dapp: dappName,
        dappImage,  // Include the image in the new rating
        rating,
        comment: postInput
      };
      
      // Submit the rating
      const response = await axios.post('http://localhost:5000/api/ratings', newRating);
      
      // After successfully submitting the rating, retrieve the user's wallet address
      const userResponse = await axios.post('http://localhost:5000/api/auth/get-user-wallet', { username });
      const { walletAddress } = userResponse.data; // Adjust this based on your endpoint response structure
  
      // Send tokens to the user's wallet
      const tokenResponse = await axios.post('http://localhost:5000/send-token', {
        fromSecretKey:[208,22,50,106,68,240,35,127,151,198,210,74,109,241,196,45,133,
          200,139,185,59,56,132,47,51,183,192,125,57,186,143,225,66,99,228,110,1,
          50,70,104,91,191,83,44,162,92,124,53,34,147,28,144,9,245,230,84,138,227,157,1,80,234,170,219], // Replace with the actual secret key or retrieve it securely
        toPublicKey: walletAddress,
        mintAddress: "6D7KDTLi9szw5993gMm1nKzt6w2xk5xYYMqVpA7SamLe", // Replace with your actual mint address
        amount: 100 // Specify the amount of tokens to send
      });
  
      console.log(tokenResponse.data); // Log the response from the token transfer
  
      // Update local state
      setRatingsData([...ratingsData, response.data]);
      setPostInput('');
      setDappName('');
      setDappImage('');
      setRating(0);
    } catch (err) {
      console.error(err);
    }
  };
  
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleDappSelect = (selectedDapp) => {
    setDappName(selectedDapp.label);
    setDappImage(selectedDapp.img);
  };

  const getRatingColor = (rating) => {
    return rating >= 7 ? 'bg-green-600' : 'bg-red-600';
  };

  return (
    <div className="flex min-h-screen md:mt-16 lg:mt-10 mt-16 bg-orange-400 text-sm">
      <Sidebar />
      <div className="md:ml-64 flex-1 p-1 md:p-3 lg:px-56 lg:p-10 bg-orange-400">
        <div className="darkblue p-3 rounded-lg text-white m-2">
          <div className="flex justify-between items-center">
            <div className="flex justify-center space-x-2 items-center">
              <img src={avatar} alt="avatar" className="w-12 h-12 md:border-4 border-2 border-white rounded-full" />
              <p className="text-sm font-bold">{username || 'Guest'}</p>
            </div>
            <Dropdown onSelect={handleDappSelect} />
            <div className="flex items-center">
              <button onClick={() => handleRatingChange(rating - 1)} disabled={rating <= 1} className="w-8 h-8 rounded-full text-white flex items-center justify-center">
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <div className={`${getRatingColor(rating)} text-white font-bold text-lg px-4 py-2 mx-2 rounded-lg`}>
                {rating}
              </div>
              <button onClick={() => handleRatingChange(rating + 1)} disabled={rating >= 10} className="w-8 h-8 rounded-full text-white flex items-center justify-center">
                <FaChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="px-10 py-2">
            <textarea
              value={postInput}
              onChange={handleInputChange}
              className="w-full p-2 py-5 blue text-white text-xs border-gray-300 rounded-lg shadow-lg placeholder:text-xs placeholder:text-white resize-none"
              placeholder="Tap here to rate your dApp..."
              rows={postInput.split('\n').length}
            />
            <div className="flex">
              <FaceSmileIcon className="w-6 h-6 mt-2" />
              <GifIcon className="w-6 h-6 mt-2" />
            </div>
          </div>
          <div className="flex justify-end items-center space-x-2 mt-5">
            <p className="text-xs">Create an article</p>
            <button onClick={handleSubmit} className="px-5 h-8 rounded-md bg-blue-500 text-white flex items-center justify-center">
              Submit
            </button>
          </div>
        </div>

        {ratingsData.map((rating) => (
          <div key={rating._id} className="darkblue p-3 rounded-lg text-white m-2">
            <div className="flex justify-between items-center">
              <div className="flex justify-center space-x-2 items-center">
                <img src={avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                <div>
                  <p className="text-sm font-bold">{rating.username}</p>
                  <p className="text-[10px] text-orange-500 font-semibold">Rated {rating.dapp}  ({rating.rating})</p>
                </div>
              </div>
              <div className="flex items-center md:space-x-20 space-x-3">
                <div className="flex items-center">
                  <p className="text-xs font-semibold">Rated</p>
                  <img src={rating.dappImage} alt="dApp logo" className="w-6 h-6 rounded-full m-2" /> {/* Display dApp image */}
                  <p className="text-xs">{rating.dapp}</p> {/* Optionally, display dApp name */}
                </div>
                  <div className={`${getRatingColor(rating.rating)} text-white font-bold text-lg px-4 py-2 mx-2 rounded-lg`}>
                  {rating.rating}
                </div>

              </div>
            </div>
            <div className="px-10 py-2">
              <div className="w-full p-2 blue text-white text-xs border-gray-300 rounded-lg shadow-lg placeholder:text-xs placeholder:text-white resize-none">
                {rating.comment}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedPage;
