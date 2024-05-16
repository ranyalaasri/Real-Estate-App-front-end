// src/pages/PropertyDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { OverView, Stats } from "../components/about";
// import { property as properties, ratings } from "../data/dummyData";
import PropertyCard from "../components/common/page-componets/PropertyCard";
import { ReservationCard } from '../components/common/page-componets';
// import RatingList from "../components/common/page-componets/RatingCard";
import OwnerInfo from '../components/common/page-componets/property-filters/OwnerInfo';
import { fetchListingsById } from '../api/apiProperty';
     

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});
  const [owner, setOwner] = useState({});

  const [VerfificationMesage, SetverificationMesage] = useState(null)

  // useEffect(() => {
  //   const propertyDetails = properties.find(prop => prop.id.toString() === id);
  //   if (propertyDetails) {
  //     setProperty(propertyDetails);
  //     if (propertyDetails.owner) {
  //       setOwner(propertyDetails.owner);
  //     }
  //   }
  // }, [id]);
 
useEffect(()=>{
  const handleGetpropretybyId =async ()=>{
    try {

      const res = await fetchListingsById(id)
      console.log(res)
      setProperty(res.property)
      setOwner(res.property.owner)
      SetverificationMesage(res.message)

    } catch (error) {
      SetverificationMesage(error.response.data.mesage)
    }
  }
  handleGetpropretybyId()
},[id])
  

  return (
    <>
      <Stats property={property} />
      <div className="flex flex-wrap justify-between items-start">
        <div className="w-full md:w-2/3 p-4">
          <PropertyCard property={property} />
          <OwnerInfo owner={owner} />
          {/* <RatingList ratings={ratings} /> */}
        </div>
        <div className="w-full md:w-1/3 p-4 sticky top-20">
          <ReservationCard property={property} />
        </div>
        <div>{VerfificationMesage}</div>
      </div>
      <OverView />
    </>
  );
};

export default PropertyDetails;
