import React, { useState, useRef } from 'react';
import Sidebar from './sidebar';

const FormPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [logoFileNames, setLogoFileNames] = useState(['Browse Files']);
  const [screenshotFileNames, setScreenshotFileNames] = useState(['Browse Files']);
  const [videoFileNames, setVideoFileNames] = useState(['Browse Files']);

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    website: '',
    projectStatus: '',
    shortTeaser: '',
    isFounderDoxxed: '',
    description: '',
    categoryName: '',
    categoryType: '',
    categoryDescription: '',
    primaryNetwork: '',
    tokenAddress: '',
    isTokenAudited: '',
    coinListings: '',
    socialLinks: {
      telegram: '',
      twitter: '',
      discord: '',
      facebook: '',
      youtube: '',
      reddit: '',
      mastodon: '',
      lenster: '',
      medium: '',
    },
  });

  const [checkedChains, setCheckedChains] = useState({
    chain1: false,
    chain2: false,
    chain3: false,
    chain4: false
});

const handleCheckboxChange = (e) => {
  const { id, checked } = e.target;
  setCheckedChains(prevState => ({
      ...prevState,
      [id]: checked
  }));
};

  const handleNext = () => {
    const tabs = ['general', 'category', 'technical', 'content'];
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const handleFileChange = (e, setFileNames) => {
    const files = Array.from(e.target.files);
    setFileNames(files.length > 0 ? files.map(file => file.name) : ['Browse Files']);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in formData) {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    } else if (name in formData.socialLinks) {
      setFormData(prevState => ({
        ...prevState,
        socialLinks: {
          ...prevState.socialLinks,
          [name]: value
        }
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const chains = Object.keys(checkedChains).filter(key => checkedChains[key]);

    const formToSubmit = {
      ...formData,
      logo: logoFileNames,
      screenshots: screenshotFileNames,
      video: videoFileNames,
      chains
    };

    try {
      const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formToSubmit),
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        alert('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const renderFormContent = () => {
    switch (activeTab) {
      case 'general':
        return (
          <form className='darkblue p-6'>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="col-span-2">
                <label className="block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-1/2 p-2 rounded blue"
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2">Logo</label>
                <div 
                  className="border-2 w-1/2 border-dashed rounded-lg p-4 flex items-center justify-center blue cursor-pointer"
                  onClick={() => document.getElementById('logoFileInput').click()}
                >
                  <p className='text-sm'>
                    {logoFileNames.join(', ')}
                  </p>
                </div>
                <input
                  id="logoFileInput"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={(e) => handleFileChange(e, setLogoFileNames)}
                />
              </div>
              <div>
                <label className="block mb-2">Website</label>
                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                />
              </div>
              <div>
                <label className="block mb-2">Project Status</label>
                <select
                  name="projectStatus"
                  value={formData.projectStatus}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                >
                  <option value="" disabled>Select Status</option>
                  <option>Development</option>
                  <option>Presale</option>
                  <option>Alpha</option>
                  <option>Beta</option>
                  <option>Live</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Short Teaser</label>
                <input
                  type="text"
                  name="shortTeaser"
                  value={formData.shortTeaser}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                />
              </div>
              <div>
                <label className="block mb-2">Is the founder/team doxxed?</label>
                <select
                  name="isFounderDoxxed"
                  value={formData.isFounderDoxxed}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                >
                  <option value="" disabled>Select Option</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue h-32"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button 
                type="button" 
                className="bg-blue-800 px-4 py-2 rounded text-white"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        );
      case 'category':
        return (
          <form className='darkblue p-6'>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block mb-2">Category Name</label>
                <input
                  type="text"
                  name="categoryName"
                  value={formData.categoryName}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                />
              </div>
              <div>
                <label className="block mb-2">Category Type</label>
                <select
                  name="categoryType"
                  value={formData.categoryType}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                >
                  <option value="" disabled>Select Category</option>
                  <option>Social & Identity</option>
                  <option>DeFi</option>
                  <option>Decentralized Games</option>
                  <option>Other</option>
                  <option>None</option>
                </select>
              </div>
              <div className="col-span-2">
                <label className="block mb-2">Category Description</label>
                <textarea
                  name="categoryDescription"
                  value={formData.categoryDescription}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue h-32"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button 
                type="button" 
                className="bg-blue-800 px-4 py-2 rounded text-white"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        );
      case 'technical':
        return (
          <form className='darkblue p-6 text-xs'>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block mb-2">Primary Network</label>
                <select
                  name="primaryNetwork"
                  value={formData.primaryNetwork}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                >
                  <option value="" disabled>Select Network</option>
                  <option>Ethereum</option>
                  <option>Binance Smart Chain</option>
                  <option>Polygon</option>
                  <option>Arbitrum</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Token Address</label>
                <input
                  type="text"
                  name="tokenAddress"
                  value={formData.tokenAddress}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                />
              </div>
              <div>
                <label className="block mb-2">Is Token Audited?</label>
                <select
                  name="isTokenAudited"
                  value={formData.isTokenAudited}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                >
                  <option value="" disabled>Select Option</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div>
                <label className="block mb-2">Coin Listings</label>
                <input
                  type="text"
                  name="coinListings"
                  value={formData.coinListings}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                />
              </div>
              <div>
                <label className="block mb-2">Chains</label>
                <div className="grid grid-cols-4 gap-2">
                  <label>
                      <input
                          type="checkbox"
                          id="chain1"
                          checked={checkedChains.chain1}
                          onChange={handleCheckboxChange}
                      />
                      Acala
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="chain2"
                          checked={checkedChains.chain2}
                          onChange={handleCheckboxChange}
                      />
                      Algorand
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="chain3"
                          checked={checkedChains.chain3}
                          onChange={handleCheckboxChange}
                      />
                      Astar
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="chain4"
                          checked={checkedChains.chain4}
                          onChange={handleCheckboxChange}
                      />
                      Avalanche
                  </label>
              </div>

              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button 
                type="button" 
                className="bg-blue-800 px-4 py-2 rounded text-white"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </form>
        );
      case 'content':
        return (
          <form className='darkblue p-6 text-xs'>
            <div>
              <label className="block mb-2">Screenshots</label>
              <div 
                className="border-2 border-dashed rounded-lg p-4 flex items-center justify-center blue cursor-pointer"
                onClick={() => document.getElementById('screenshotsFileInput').click()}
              >
                <p className='text-sm'>
                  {screenshotFileNames.join(', ')}
                </p>
              </div>
              <input
                id="screenshotsFileInput"
                type="file"
                multiple
                className="hidden"
                onChange={(e) => handleFileChange(e, setScreenshotFileNames)}
              />
            </div>
            <div>
              <label className="block mb-2">Video</label>
              <div 
                className="border-2 border-dashed rounded-lg p-4 flex items-center justify-center blue cursor-pointer"
                onClick={() => document.getElementById('videoFileInput').click()}
              >
                <p className='text-sm'>
                  {videoFileNames.join(', ')}
                </p>
              </div>
              <input
                id="videoFileInput"
                type="file"
                multiple
                className="hidden"
                onChange={(e) => handleFileChange(e, setVideoFileNames)}
              />
            </div>
            <div>
              <label className="block mb-2">Social Links</label>
              <div>
                <input
                  type="text"
                  name="telegram"
                  placeholder="Telegram"
                  value={formData.socialLinks.telegram}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue mb-2"
                />
                <input
                  type="text"
                  name="twitter"
                  placeholder="X (Twitter)"
                  value={formData.socialLinks.twitter}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue mb-2"
                />
                <input
                  type="text"
                  name="discord"
                  placeholder="Discord"
                  value={formData.socialLinks.discord}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue mb-2"
                />
                <input
                  type="text"
                  name="facebook"
                  placeholder="Facebook"
                  value={formData.socialLinks.facebook}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue mb-2"
                />
                <input
                  type="text"
                  name="youtube"
                  placeholder="YouTube"
                  value={formData.socialLinks.youtube}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue mb-2"
                />
                <input
                  type="text"
                  name="reddit"
                  placeholder="Reddit"
                  value={formData.socialLinks.reddit}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue mb-2"
                />
                <input
                  type="text"
                  name="mastodon"
                  placeholder="Mastodon"
                  value={formData.socialLinks.mastodon}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue mb-2"
                />
                <input
                  type="text"
                  name="lenster"
                  placeholder="Lenster"
                  value={formData.socialLinks.lenster}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue mb-2"
                />
                <input
                  type="text"
                  name="medium"
                  placeholder="Medium"
                  value={formData.socialLinks.medium}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue mb-2"
                />
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <button 
                type="submit" 
                className="bg-blue-800 px-4 py-2 rounded text-white"
                onClick={handleSubmit}
              >
                Submit
              </button>
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
