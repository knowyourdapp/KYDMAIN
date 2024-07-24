import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const options = [
    { value: 'option1', label: 'Chains' },
    { value: 'option2', label: 'Chain2' },
    { value: 'option3', label: 'Chain3' },
  ];

  const selectedOptionData = options.find(option => option.value === selectedOption);

  return (
    <div className="relative w-52 text-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-7 px-1 blue text-white rounded border-2  border-gray-300 font-bold p-5 py-4 flex items-center justify-center w-full"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
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
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
