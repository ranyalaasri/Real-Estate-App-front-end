import { useParams } from "react-router-dom";
import { OverView, Stats } from "../components/about";
import { Brands, Feeds, WhatWeDo } from "../components/common/page-componets";

const PropertyDetails = () => {
  const { id } = useParams();
  return (
    <div className="pt-20 px-[3%] md:px-[6%]">
      <Stats id={id} />
      <OverView />
      <Brands />
      <WhatWeDo />
      <Feeds />
    </div>
  );
};

export default PropertyDetails;
