import React from 'react';
import { MdBusiness } from 'react-icons/md';
import { GiMoneyStack } from 'react-icons/gi';  

const Stats = ({ property }) => {
  if (!property) return <div></div>;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-2xl font-extrabold text-gray-800 flex items-center">
            <MdBusiness className="mr-2 text-orange-500" size={24}/> 
            {property.name}
          </h1>
          <div className="flex items-center text-orange-500 mr-2">
            <GiMoneyStack className="mr-1" size={24} />
            <span className="text-xl font-bold">
              MAD {property.price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
