import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import avatar from '../assets/axie.png';
import logo from '../assets/dapplogo.png';
import Sidebar from './sidebar';
import { FaceSmileIcon, GifIcon } from '@heroicons/react/24/outline';
import Dropdown from './dropdown';

const FeedPage = () => {
  const [postInput, setPostInput] = useState('');
  const [dapp, setDapp] = useState('');
  const [rating, setRating] = useState(0);
  const [ratingsData, setRatingsData] = useState([]);

  useEffect(() => {
    fetchRatings();
  }, []);

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
        username: 'Knowyourdapp', 
        dapp,
        rating,
        comment: postInput
      };
      const response = await axios.post('http://localhost:5000/api/ratings', newRating);
      setRatingsData([...ratingsData, response.data]);
      setPostInput('');
      setDapp('');
      setRating(0);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className="flex min-h-screen md:mt-16 lg:mt-10 mt-16 bg-orange-400 text-sm">
      <Sidebar />
      <div className="md:ml-64 flex-1 p-1 md:p-3 lg:px-56 lg:p-10 bg-orange-400">
        <div className="darkblue p-3 rounded-lg text-white m-2">
          <div className="flex justify-between items-center">
            <div className="flex justify-center space-x-2 items-center">
              <img src={avatar} alt="avatar" className="w-12 h-12 md:border-4 border-2 border-white rounded-full" />
              <p className="text-sm font-bold">Knowyoudapp</p>
            </div>
            <Dropdown />
            <div className="flex items-center">
              <button onClick={() => handleRatingChange(rating - 1)} disabled={rating <= 1} className="w-8 h-8 rounded-full text-white flex items-center justify-center">
                <FaChevronLeft className="h-4 w-4" />
              </button>
              <div className="bg-red-700 text-white font-bold text-lg px-4 py-2 mx-2 rounded-lg">
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
                  <p className="text-[10px] text-orange-500 font-semibold">Rated {rating.rating} dApps</p>
                </div>
              </div>
              <div className="flex items-center md:space-x-20 space-x-3">
                <div className="flex items-center">
                  <p className="text-xs font-semibold">Rated</p>
                  <img src={logo} alt="avatar" className="w-6 h-6 rounded-full m-2" />
                  <p className="text-xs">{rating.dapp}</p>
                </div>
                <div className={`bg-${rating.rating >= 7 ? 'green' : 'red'}-600 text-white font-bold text-lg px-4 py-2 mx-2 rounded-lg`}>
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
}

export default FeedPage;
