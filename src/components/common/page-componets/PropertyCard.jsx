import React from 'react';
import Slider from 'react-slick';
import { MdLocationOn, MdHotel, MdBathtub, MdLocalPhone, MdExpand, MdAttachMoney } from 'react-icons/md';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

const PropertyCard = ({ property }) => {
  if (!property) {
    return <div>Loading...</div>; // Loading state
  }

  // Check if images is correctly an array
  const { images } = property;
  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images available</div>; // Handle no images case
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden my-1">
      <div className="w-full">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className="w-full h-80 object-cover object-center" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-2">{property.name}</h3>
        <p className="text-gray-700">
          {property.description ? property.description.substring(0, 200) + '...' : 'No description available.'}
        </p>
        <div className="flex items-center text-gray-600 text-sm">
          <MdLocationOn className="text-xl" />
          <span className="ml-1">{property.location}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MdAttachMoney className="text-xl" />
          <span className="ml-1">MAD {property.price}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MdHotel className="text-xl" />
          <span className="ml-1">{property.number_of_beds} Beds</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MdBathtub className="text-xl" />
          <span className="ml-1">{property.number_of_bathrooms} Bathrooms</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MdExpand className="text-xl" />
          <span className="ml-1">{property.dimensions}</span>
        </div>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MdLocalPhone className="text-xl" />
          <span className="ml-1">{property.contact}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
