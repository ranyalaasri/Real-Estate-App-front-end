import React from 'react';
import { MdBusiness } from 'react-icons/md'; // Importing icon for the title

const Stats = ({ property }) => {
  if (!property) return <div>Loading...</div>; // Loading state for when the property is not yet available

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h1 className="text-2xl font-extrabold text-gray-800 flex items-center mt-10">
          <MdBusiness className="mr-2 text-orange-500" size={24}/> {/* Icon next to the title */}
          {property.name}
        </h1>
      </div>
    </div>
  );
};

export default Stats;
