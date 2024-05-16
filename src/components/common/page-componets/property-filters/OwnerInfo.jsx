import React from 'react';
import { MdPhone, MdEmail } from 'react-icons/md';
import defaultImage from "../../../../ranya ph.jpeg"; // Import a default image as fallback

const OwnerInfo = ({ owner }) => {
  const { name, listings, phone, email, image } = owner || {};

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-4 p-4">
      <div className="flex items-center">
        <img
          src={image || defaultImage}
          alt={name}
          className="w-16 h-16 object-cover rounded-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />
        <div className="ml-4">
          <h3 className="font-bold text-lg text-orange-500">{name}</h3>
          <span className="text-gray-500">{listings} Property Listings</span>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <MdPhone className="text-xl text-orange-500" />
        <span className="ml-2 text-gray-600">{phone}</span>
      </div>
      <div className="flex items-center mt-2">
        <MdEmail className="text-xl text-orange-500" />
        <span className="ml-2 text-gray-600">{email}</span>
      </div>
      <button className="bg-orange-100 text-orange-500 rounded py-2 px-4 mt-4">View Profile</button>
    </div>
  );
};

export default OwnerInfo;
