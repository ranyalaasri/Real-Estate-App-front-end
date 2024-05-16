import {
  AboutUs,
  
  Categories,
  Featured,
  Feeds,
  Team,
  WhatWeDo,
} from "../components/common/page-componets";
import {
  Filters,
  GetInTouch,
  Hero,
 
} from "../components/home";

const Home = () => {
  return (
    <div className=" pt-10">
      <Hero />
      {/* <Filters /> */}
      <div className="mt-10 px-[3%] md:px-[6%]">
        <AboutUs />
        <WhatWeDo />
        <Featured />
        <Categories />
        <GetInTouch />
        <Team />
        
        <Feeds />
        
      </div>
    </div>
  );
};

export default Home;
