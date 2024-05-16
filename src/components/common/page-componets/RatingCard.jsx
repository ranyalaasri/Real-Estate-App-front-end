import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { ratings } from "../../../data/dummyData";

const RatingCard = ({ ratingInfo }) => {
  const { image, rating, name, price } = ratingInfo;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-4 p-4">
      <div className="flex items-center">
        <img src={image} alt={name} className="w-20 h-20 object-cover rounded-md" />
        <div className="ml-4">
          <h3 className="font-bold text-lg">{name}</h3>
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-1">{rating}</span>
            <span className="text-lg">/5</span>
          </div>
          <div className="flex items-center">
            {[...Array(Math.floor(rating))].map((_, index) => (
              <FaStar key={index} className="text-orange-500" />
            ))}
            {rating % 1 !== 0 && <FaStarHalfAlt className="text-orange-500" />}
          </div>
          <span className="font-bold text-md">MAD {price}</span>
        </div>
      </div>
    </div>
  );
};

const RatingList = () => {
  return (
    <div>
      {ratings.map((ratingInfo) => (
        <RatingCard key={ratingInfo.id} ratingInfo={ratingInfo} />
      ))}
    </div>
  );
};

export default RatingList;
