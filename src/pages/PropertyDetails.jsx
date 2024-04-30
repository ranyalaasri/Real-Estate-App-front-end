import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { OverView, Stats } from "../components/about";
import { property as properties } from "../data/dummyData"; 

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState({});

  useEffect(() => {
    // Find the property details based on the ID from the URL
    const propertyDetails = properties.find(prop => prop.id.toString() === id);
    if (propertyDetails) {
      setProperty(propertyDetails);
    }
  }, [id]);

  return (
    <>
      <Stats id={id} />
      <div className="pt-20 px-[3%] md:px-[6%]">
        {property.image && (
          <div className="property-image" style={{ maxWidth: '50%', overflow: 'hidden' }}>
            <img src={property.image} alt={`Property ${property.name}`} style={{ width: '100%', height: 'auto', maxHeight: '70vh' }} />
          </div>
        )}
      </div>
      <OverView />
    </>
  );


};

export default PropertyDetails;
