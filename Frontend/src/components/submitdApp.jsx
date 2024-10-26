import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';

const FormPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [screenshotFileNames, setScreenshotFileNames] = useState(['Browse Files']);
  const [videoFileNames, setVideoFileNames] = useState(['Browse Files']);
  const [logoFileNames, setlogoFileNames] = useState(['Browse Files']);
  

  
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
    Acala: false,
    Algorand: false,
    Astar: false,
    Avalanche: false,
    Base: false,
    'BNB Chain': false,
    Ethereum: false,
    Solana: false,
    Polygon: false,
    Optimism: false,
    'zkSync Era': false,
    Flow: false,
    'Immutable X': false,
    Moonriver: false,
    Near: false,
    Ronin: false,
    Skale: false,
    WAX: false,
    Wemix: false,
    ThunderCore: false,
    Aptos: false,
    Tezos: false,
    Arbitrum: false,
    Hedera: false,
    Klaytn: false,
    ZetaChain: false,
    EOS: false,
    Telos: false,
    TRON: false,
    Other:false,

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
    const files = e.target?.files;
    if (!files) {
      console.error("No files selected or input element not found");
      return;
    }
  
    const fileNamesArray = Array.from(files).map(file => file.name);
    setFileNames(fileNamesArray);
  
    // Logging the selected files for debugging
    console.log('Selected files:', files);
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
  
    const formToSubmit = new FormData();
  
    const appendFiles = (inputId, fileNames, fieldName) => {
      const fileInputElement = document.getElementById(inputId);
      console.log('File Input Element:', fileInputElement); // Check if element is found
  
      if (fileInputElement) {
        const files = fileInputElement.files;
        console.log('Selected Files:', files); // Check selected files
  
        fileNames.forEach((fileName, index) => {
          if (files[index]) {
            formToSubmit.append(fieldName, files[index]);
            console.log(`Appending ${files[index].name} to ${fieldName}`);
          } else {
            console.warn(`File not found for ${fileName}`);
          }
        });
      } else {
        console.error(`File input element with ID ${inputId} not found`);
      }
    };
  
    
  
    // Append form data fields
    Object.keys(formData).forEach(key => {
      if (typeof formData[key] === 'object' && key === 'socialLinks') {
        Object.keys(formData[key]).forEach(subKey => {
          formToSubmit.append(`socialLinks[${subKey}]`, formData[key][subKey]);
        });
      } else {
        formToSubmit.append(key, formData[key]);
      }
    });

    appendFiles('logoFileInput', logoFileNames, 'logo');
    appendFiles('screenshotsFileInput', screenshotFileNames, 'screenshots');
    appendFiles('videoFileInput', videoFileNames, 'video');
  
    // Append selected chains
    const chains = Object.keys(checkedChains).filter(key => checkedChains[key]);
    chains.forEach(chain => formToSubmit.append('chains[]', chain));
  
    try {
      const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        body: formToSubmit,
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
                <label className="block mb-2">Primary Network</label>
                <select
                  name="primaryNetwork"
                  value={formData.primaryNetwork}
                  onChange={handleChange}
                  className="w-full p-2 rounded blue"
                >
                  <option value="" disabled>Select Network</option>
                  <option value="Acala">Acala</option>
                  <option value="Algorand">Algorand</option>
                  <option value="Aptos">Aptos</option>
                  <option value="Arbitrum">Arbitrum</option>
                  <option value="Astar">Astar</option>
                  <option value="Avalanche">Avalanche</option>
                  <option value="Base">Base</option>
                  <option value="BNB Chain">BNB Chain</option>
                  <option value="EOS">EOS</option>
                  <option value="Ethereum">Ethereum</option>
                  <option value="Flow">Flow</option>
                  <option value="Hedera">Hedera</option>
                  <option value="Immutable X">Immutable X</option>
                  <option value="Klaytn">Klaytn</option>
                  <option value="Moonriver">Moonriver</option>
                  <option value="Near">Near</option>
                  <option value="Optimism">Optimism</option>
                  <option value="Polygon">Polygon</option>
                  <option value="Ronin">Ronin</option>
                  <option value="Skale">Skale</option>
                  <option value="Solana">Solana</option>
                  <option value="Telos">Telos</option>
                  <option value="Tezos">Tezos</option>
                  <option value="ThunderCore">ThunderCore</option>
                  <option value="TRON">TRON</option>
                  <option value="WAX">WAX</option>
                  <option value="Wemix">Wemix</option>
                  <option value="zkSync Era">zkSync Era</option>
                  <option value="ZetaChain">ZetaChain</option>

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
                <label className="block mb-2">If multiple chains, please select the following chains</label>
                <div className="grid grid-cols-4 gap-2">
                  <label>
                      <input
                          type="checkbox"
                          id="Acala"
                          checked={checkedChains.Acala}
                          onChange={handleCheckboxChange}
                      />
                      Acala
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Algorand"
                          checked={checkedChains.Algorand}
                          onChange={handleCheckboxChange}
                      />
                      Algorand
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Astar"
                          checked={checkedChains.Astar}
                          onChange={handleCheckboxChange}
                      />
                      Astar
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Avalanche"
                          checked={checkedChains.Avalanche}
                          onChange={handleCheckboxChange}
                      />
                      Avalanche
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Base"
                          checked={checkedChains.Base}
                          onChange={handleCheckboxChange}
                      />
                      Base
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="BNB Chain"
                          checked={checkedChains['BNB Chain']}
                          onChange={handleCheckboxChange}
                      />
                      BNB Chain
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Ethereum"
                          checked={checkedChains.Ethereum}
                          onChange={handleCheckboxChange}
                      />
                     Ethereum
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Solana"
                          checked={checkedChains.Solana}
                          onChange={handleCheckboxChange}
                      />
                     Solana
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Polygon"
                          checked={checkedChains.Polygon}
                          onChange={handleCheckboxChange}
                      />
                     Polygon
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Optimism"
                          checked={checkedChains.Optimism}
                          onChange={handleCheckboxChange}
                      />
                     Optimism
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="zkSync Era"
                          checked={checkedChains['zkSync Era']}
                          onChange={handleCheckboxChange}
                      />
                     zkSync Era
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Flow"
                          checked={checkedChains.Flow}
                          onChange={handleCheckboxChange}
                      />
                     Flow
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Immutable X"
                          checked={checkedChains['Immutable X']}
                          onChange={handleCheckboxChange}
                      />
                     Immutable X
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Moonriver"
                          checked={checkedChains.Moonriver}
                          onChange={handleCheckboxChange}
                      />
                     Moonriver
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Near"
                          checked={checkedChains.Near}
                          onChange={handleCheckboxChange}
                      />
                     Near
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Ronin"
                          checked={checkedChains.Ronin}
                          onChange={handleCheckboxChange}
                      />
                     Ronin
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Skale"
                          checked={checkedChains.Skale}
                          onChange={handleCheckboxChange}
                      />
                    Skale
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="WAX"
                          checked={checkedChains.WAX}
                          onChange={handleCheckboxChange}
                      />
                      WAX
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Wemix"
                          checked={checkedChains.Wemix}
                          onChange={handleCheckboxChange}
                      />
                     Wemix
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="ThunderCore"
                          checked={checkedChains.ThunderCore}
                          onChange={handleCheckboxChange}
                      />
                     ThunderCore
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Aptos"
                          checked={checkedChains.Aptos}
                          onChange={handleCheckboxChange}
                      />
                     Aptos
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Tezos"
                          checked={checkedChains.Tezos}
                          onChange={handleCheckboxChange}
                      />
                     Tezos
                  </label>
                 
                  <label>
                      <input
                          type="checkbox"
                          id="Arbitrum"
                          checked={checkedChains.Arbitrum}
                          onChange={handleCheckboxChange}
                      />
                     Arbitrum
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Hedera"
                          checked={checkedChains.Hedera}
                          onChange={handleCheckboxChange}
                      />
                     Hedera
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Klaytn"
                          checked={checkedChains.Klaytn}
                          onChange={handleCheckboxChange}
                      />
                     Klaytn
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="ZetaChain"
                          checked={checkedChains.ZetaChain}
                          onChange={handleCheckboxChange}
                      />
                     ZetaChain
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="EOS"
                          checked={checkedChains.EOS}
                          onChange={handleCheckboxChange}
                      />
                     EOS
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="Telos"
                          checked={checkedChains.Telos}
                          onChange={handleCheckboxChange}
                      />
                     Telos
                  </label>
                  <label>
                      <input
                          type="checkbox"
                          id="TRON"
                          checked={checkedChains.TRON}
                          onChange={handleCheckboxChange}
                      />
                     TRON
                  </label>

                  <label>
                      <input
                          type="checkbox"
                          id="Other"
                          checked={checkedChains.Other}
                          onChange={handleCheckboxChange}
                      />
                     Other
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
              <label className="block mb-2">Logo</label>
              <div 
                className="border-2 border-dashed rounded-lg p-4 flex items-center justify-center blue cursor-pointer"
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
                accept="image/*" 
                className="hidden"
                onChange={(e) => handleFileChange(e, setlogoFileNames)}
              />
            </div>
            <div>
              <label className="block mb-2">Logo & Screenshots</label>
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
            <br/>
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
            <br/>
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

     
      <div className="md:ml-64 flex-grow w-1/2 text-white p-0 md:p-3 lg:px-12 lg:p-10 flex bg-orange-400">
        <div className="w-full rounded-lg text-white">
       
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

        
          {renderFormContent()}

          
        </div>
      </div>
    </div>
  );
};

export default FormPage;



