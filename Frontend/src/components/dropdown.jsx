import React, { useState } from 'react';
import avatar from '../assets/axie.png';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    { value: 'option1', label: 'dApp1', img: avatar },
    { value: 'option2', label: 'dApp2', img: avatar },
    { value: 'option3', label: 'dApp3', img: avatar },
  ];

  const selectedOptionData = options.find(option => option.value === selectedOption);

  return (
    <div className="relative w-28 text-xs">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-7 px-1 blue text-white rounded-2xl font-bold py-4 flex items-center justify-between w-full"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOptionData.img && (
          <img src={selectedOptionData.img} alt="avatar" className="w-6 h-6 border-white rounded-full mr-2" />
        )}
        {selectedOptionData.label}
        <ChevronDownIcon className="w-5 h-5 ml-2" />
      </button>
      {isOpen && (
        <ul className="absolute w-full flex flex-col justify-center overflow-hidden mx-auto bg-orange-400 text-black shadow-lg rounded-md mt-2 z-10" role="listbox">
          {options.map(option => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="p-2 flex items-center justify-center text-white font-semibold hover:bg-blue-500 cursor-pointer"
              role="option"
              aria-selected={selectedOption === option.value}
            >
              {option.img && (
                <img src={option.img} alt="avatar" className="w-6 h-6  border-2 border-white rounded-full mr-2" />
              )}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
