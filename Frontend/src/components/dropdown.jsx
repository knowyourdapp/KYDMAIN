import React, { useState } from 'react';
import avatar from '../assets/g-bots-logo.png';
import avatar2 from '../assets/mir4-logo.jpg';
import avatar3 from '../assets/pikamoon-logo.png';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Dropdown = ({ onSelect }) => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { value: 'option1', label: 'G-bots', img: avatar },
    { value: 'option2', label: 'MIR4', img: avatar2 },
    { value: 'option3', label: 'Pikamoon', img: avatar3 },
  ];

  const selectedOptionData = options.find(option => option.value === selectedOption);

  const handleSelect = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
    onSelect(option);  // Pass both label and image to the parent component
  };

  return (
    <div className="relative w-36 text-xs"> {/* Adjusted width to accommodate the content */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-7 px-2 blue text-white rounded-2xl font-bold py-4 flex items-center justify-between w-full"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {selectedOptionData.img && (
          <img src={selectedOptionData.img} alt="avatar" className="w-6 h-6 border-white rounded-full mr-2" />
        )}
        <span className="truncate">{selectedOptionData.label}</span> {/* Added truncate to handle overflow */}
        <ChevronDownIcon className="w-5 h-5 ml-2" />
      </button>
      {isOpen && (
        <ul className="absolute w-full flex flex-col bg-orange-400 text-black shadow-lg rounded-md mt-2 z-10" role="listbox">
          {options.map(option => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className="p-2 flex items-center text-white font-semibold hover:bg-blue-500 cursor-pointer"
              role="option"
              aria-selected={selectedOption === option.value}
            >
              {option.img && (
                <img src={option.img} alt="avatar" className="w-6 h-6 border-2 border-white rounded-full mr-2" />
              )}
              <span className="truncate">{option.label}</span> {/* Added truncate to handle overflow */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
