import React, { useState } from 'react';
import Slider from 'react-slick';
import { MdLocationOn, MdHotel, MdBathtub, MdLocalPhone, MdExpand, MdAttachMoney } from 'react-icons/md';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const PropertyCard = ({ property }) => {
  // Move useState inside the function component
  const [isExpanded, setIsExpanded] = useState(false);

  if (!property) {
    return <div>Loading...</div>;
  }

  const { images } = property;
  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images available</div>;
  }

  const toggleDescription = () => setIsExpanded(!isExpanded);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-4">
      {/* Image Card */}
      <div className="p-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className="w-full h-80 object-cover object-center" />
            </div>
          ))}
        </Slider>
      </div>

      {/* Overview Card */}
      <div className="flex flex-wrap justify-around p-4 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center text-center p-4">
          <MdLocalPhone className="text-3xl text-orange-500" />
          <span className="text-sm font-medium text-gray-500">Contact</span>
          <span className="font-bold text-md">{property.contact}</span>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <MdAttachMoney className="text-3xl text-orange-500" />
          <span className="text-sm font-medium text-gray-500">Price</span>
          <span className="font-bold text-md">MAD {property.price}</span>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <MdHotel className="text-3xl text-orange-500" />
          <span className="text-sm font-medium text-gray-500">Beds</span>
          <span className="font-bold text-md">{property.number_of_beds} Beds</span>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <MdBathtub className="text-3xl text-orange-500" />
          <span className="text-sm font-medium text-gray-500">Bathrooms</span>
          <span className="font-bold text-md">{property.number_of_bathrooms} Bathrooms</span>
        </div>
        <div className="flex flex-col items-center text-center p-4">
          <MdExpand className="text-3xl text-orange-500" />
          <span className="text-sm font-medium text-gray-500">Dimensions</span>
          <span className="font-bold text-md">{property.dimensions}</span>
        </div>
       
        <div className="flex flex-col items-center text-center p-4">
          <MdLocationOn className="text-3xl text-orange-500" />
          <span className="text-sm font-medium text-gray-500">Location</span>
          <span className="font-bold text-md">{property.location}</span>
        </div>
      </div>

      {/* Description Card */}
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">Property Description</h3>
        <p className="text-gray-700">
          {isExpanded ? property.description : `${property.description.substring(0, 150)}...`}
        </p>
        <button
          onClick={toggleDescription}
          className="text-blue-500 hover:underline mt-2"
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
