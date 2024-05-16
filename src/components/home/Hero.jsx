import { BiPlay } from "react-icons/bi";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen text-white"
      style={{ 
        backgroundImage: `url('/images/property (26).jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Full-screen semi-transparent overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="p-[3%] md:p-[6%] text-center">
          <h1 className="text-4xl font-bold capitalize lg:text-5xl mb-8">
            The Best Way To Find Your Dream Home
          </h1>
          <p className="mb-8 border-l-4 border-primary pl-3">
            Explore top-rated listings, find great deals, <br />
            and secure your dream home with us. 
            Your journey to the perfect living space begins here.
          </p>
          <div className="mt-8 flex justify-center gap-x-3">
            <Link to={'/properties'}>
              <button className="btn btn-primary px-6 py-3 text-lg">EXPLORE PROPERTIES</button>
            </Link>
            
          </div>
          <div className="mt-6 flex justify-center gap-x-3">
            <Link to={'/properties'}>
            <button className="px-4 py-1 bg-primary hover:bg-[#0d3c55] rounded-lg">
              Buy
            </button>
            </Link>
            <button className="px-4 py-1 bg-[#0d3c55] hover:bg-secondary rounded-lg">
              Rent
            </button>
            <button className="px-4 py-1 bg-primary hover:bg-secondary rounded-lg">
              Sell
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
