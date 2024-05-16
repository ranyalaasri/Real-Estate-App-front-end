import React, { useState } from 'react';
import { CiSliderHorizontal } from "react-icons/ci";
import { DatePicker } from 'antd';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import 'antd/dist/reset.css'; // Correct Ant Design CSS import
import '@fortawesome/fontawesome-free/css/all.css';
import './styleproprety.css';

const SearchFilters = () => {
  const [forSale, setForSale] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [propertyTypeDropdown, setPropertyTypeDropdown] = useState(false);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [priceRangeDropdown, setPriceRangeDropdown] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const toggleDropdown = (dropdown) => {
    // Close all dropdowns first
    setForSale(false);
    setPropertyTypeDropdown(false);
    setPriceRangeDropdown(false);

    // Toggle the specified dropdown
    if (dropdown === 'forSale') setForSale(!forSale);
    if (dropdown === 'propertyType') setPropertyTypeDropdown(!propertyTypeDropdown);
    if (dropdown === 'priceRange') setPriceRangeDropdown(!priceRangeDropdown);
  };

  const handleRadioChange = (e) => {
    const value = e.target.value;
    setSelectedStatus(value);
    setShowDatePicker(value === 'Vacation' || value === 'Rent');
  };

  const handlePropertyTypeChange = (e) => {
    const value = e.target.value;
    if (selectedPropertyTypes.includes(value)) {
      setSelectedPropertyTypes(selectedPropertyTypes.filter(type => type !== value));
    } else {
      setSelectedPropertyTypes([...selectedPropertyTypes, value]);
    }
  };

  const handlePriceRangeChange = (min, max) => {
    setPriceRange([parseInt(min, 10), parseInt(max, 10)]);
  };

  const onChangeDates = (dates) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }
  };

  return (
    <div className="flex justify-center p-4 border-b border-gray-300">
      <div className="flex gap-6 items-center">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Enter an address, neighborhood, city, or ZIP code"
          className="search-bar-input flex items-center pl-1 pr-10 py-1 border border-gray-300 rounded-lg shadow-sm w-96 text-lg"
        />
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <i className="fas fa-search text-white bg-orange-500 p-2 rounded-full"></i>
        </span>
      </div>
      <div className="flex gap-9 items-center" style={{ zIndex: 1 }}>
          <div className="relative ">
        <button
          type="button"
          className={`border border-gray-300 rounded-lg text-sky-900 shadow-sm w-36 h-9 text-lg ${forSale ? 'active' : ''}`}
          onClick={() => toggleDropdown('forSale')}
        >
          For Sale <i className="fas fa-angle-down ms-2"></i>
        </button>
        {forSale && (
          <div className="absolute mt-4 w-60 h-40 rounded-md shadow-lg bg-white">
            <div className="p-2">
              <h6 className="font-bold text-sky-900">Listing Status</h6>
              <div>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="listingStatus"
                    value="All"
                    checked={selectedStatus === 'All'}
                    onChange={handleRadioChange}
                  />
                  All
                </label>
                <label className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="listingStatus"
                    value="Buy"
                    checked={selectedStatus === 'Buy'}
                    onChange={handleRadioChange}
                  />
                  Buy
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="listingStatus"
                    value="Rent"
                    checked={selectedStatus === 'Rent'}
                    onChange={handleRadioChange}
                  />
                  Rent
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="listingStatus"
                    value="Vacation"
                    checked={selectedStatus === 'Vacation'}
                    onChange={handleRadioChange}
                  />
                  Vacation
                </label>
              </div>
            </div>
          </div>
        )}
        </div>

        {/* Property Type Dropdown */}
        <div className='relative'>
        <button
          type="button"
          className={`border border-gray-300 rounded-lg text-sky-900 shadow-sm w-36 h-9 text-lg ${propertyTypeDropdown ? 'active' : ''}`}
          onClick={() => toggleDropdown('propertyType')}
        >
          Property Type <i className="fas fa-angle-down ms-2"></i>
        </button>
        {propertyTypeDropdown && (
          <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white">
            <div className="p-2">
              <h6 className="font-bold text-sky-900">Select Property Type</h6>
              <div>
                {/* Add more property types as needed */}
                <label className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    name="propertyType"
                    value="Houses"
                    checked={selectedPropertyTypes.includes('Houses')}
                    onChange={handlePropertyTypeChange}
                  />
                  Houses
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="propertyType"
                    value="Apartments"
                    checked={selectedPropertyTypes.includes('Apartments')}
                    onChange={handlePropertyTypeChange}
                  />
                  Apartments
                </label>
              </div>
            </div>
          </div>
        )}
  </div>
        {/* Price Range Dropdown */}
        <div className='relative'>
        <button
          type="button"
          className={`open-btn mb15 dropdown-toggle show border border-gray-300 rounded-lg text-sky-900 shadow-sm w-36 h-9 text-lg flex items-center justify-center ${priceRangeDropdown ? 'active' : ''}`}
          onClick={() => toggleDropdown('priceRange')}
        >
          Price <CiSliderHorizontal className="ml-2" />
        </button>
        {priceRangeDropdown && (
          <div className="absolute mt-2 w-80 rounded-md shadow-lg bg-white">
            <div className="p-4">
              <h6 className="font-bold mb-2 text-sky-900">Price Range</h6>
              <RangeSlider
                aria-label={['min', 'max']}
                defaultValue={priceRange}
                min={0}
                max={1000000}
                onChange={(values) => handlePriceRangeChange(values[0], values[1])}
              >
                <RangeSliderTrack>
                  <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
              </RangeSlider>
              <div className="flex justify-between">
            <input 
              type="text" 
              placeholder='0 MAD'
              value={priceRange[0]} 
              onChange={(e) => handlePriceRangeChange([e.target.value, priceRange[1]])} 
              className="w-20 border border-gray-300 rounded-md p-1 text-center" 
            />
            <span className="self-center">-</span>
            <input 
              type="text" 
              placeholder='100000 MAD'
              value={priceRange[1]} 
              onChange={(e) => handlePriceRangeChange([priceRange[0], e.target.value])} 
              className="w-20 border border-gray-300 rounded-md p-1 text-center" 
            />
          </div>
              
            </div>
          </div>
        )}
</div>
</div>
        {/* Date Pickers */}
        {showDatePicker && (
          <div className="flex gap-4 items-center">
            <div className='text-center'>
            <DatePicker
              onChange={(date) => setStartDate(date)}
              className="border border-gray-300 rounded-full shadow-sm w-36 h-9 text-lg"
              placeholder="Check In Date"
            />
            </div>
            <div className='text-center'>
            <DatePicker
              onChange={(date) => setEndDate(date)}
              className="border border-gray-300 rounded-full shadow-sm w-36 h-9 text-lg"
              placeholder="Check Out Date"
            />
          </div>
          </div>
        )}
        <div className='flex  items-center gap-2 '>
            <button className='bg-sky-800 hover:bg-gray-50 text-white font-bold w-32 py-1 rounded-lg'>
            <span className="text-gray-50 hover:text-sky-900 gap-9">Search</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
