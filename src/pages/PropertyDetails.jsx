// src/pages/PropertyDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { OverView, Stats } from "../components/about";
import { property as properties } from "../data/dummyData";
import PropertyCard from "../components/common/page-componets/PropertyCard"
import { ReservationCard } from '../components/common/page-componets';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    const propertyDetails = properties.find(prop => prop.id.toString() === id);
    if (propertyDetails) {
      setProperty(propertyDetails);
    }
  }, [id]);

  return (
    <>
      <Stats property={property} />
      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full md:w-2/3 p-4">
          <PropertyCard property={property} />
        </div>
        <div className="w-full md:w-1/3 p-4 sticky top-20">
          <ReservationCard property={property} />
        </div>
      </div>
      <OverView />
    </>
  );
};

export default PropertyDetails;
