import React, { useState } from "react";

const Toolbar = () => {
  return (
    <div className="border-t-2 border-b-2 flex items-center justify-between px-4 py-1">
      {/* Left section */}
      <div className="flex space-x-6">
        <Dropdown title="Show as: Busy" />
        <Dropdown title="Category: None" />
        <Dropdown title="Time zone: (UTC+10:00) Canberra" />
      </div>

      {/* Right section */}
      <div className="flex space-x-6">
        <Dropdown title="Response options" />
        <Dropdown title="Require registration: None" />
        <OptionsButton />
      </div>
    </div>
  );
};

const Dropdown = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggles between true/false
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown} // Trigger the toggle function on click
        className="text-gray-700 font-medium flex items-center"
      >
        {title}
        <svg
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {/* Dropdown options */}
      <div
        className={`absolute mt-2 py-2 w-48 bg-white border rounded-md shadow-xl ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Option 1
        </a>
        <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
          Option 2
        </a>
      </div>
    </div>
  );
};

const OptionsButton = () => {
  return (
    <button className="p-2 rounded-full hover:bg-gray-200">
      <svg
        className="w-6 h-6 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 4v16m8-8H4"
        ></path>
      </svg>
    </button>
  );
};

export default Toolbar;
