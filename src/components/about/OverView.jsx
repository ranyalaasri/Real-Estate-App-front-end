import { BiPlay } from "react-icons/bi";

const OverView = () => {
  return (
    <div className="pt-20 pb-16">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 basis-[18rem]">
          <h1 className="heading">what we do</h1>
          <p className="mt-3">
          At RYMZ, we simplify the process of finding your dream home. Whether you're looking to buy, sell, or rent, our user-friendly platform connects you with a wide range of properties tailored to your preferences.  ensure you have access to the latest listings, while our expert team provides personalized support every step of the way. Explore your next home with RYMZ and discover the difference we can make in your real estate journey.
          </p>
          <button className="mt-4 btn btn-primary">read more</button>
        </div>
        <div className="flex-1 basis-[18rem]">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="/images/property (41).png"
              alt=""
              className="w-full h-[300px] object-cover"
            />
            <div className="absolute top-0 left-0 flex-col w-full h-full bg-black/50 flex-center-center">
              <div className="icon-box !text-primary !bg-transparent border !border-primary relative before:absolute before:w-full before:h-full before:rounded-full before:animate-ping before:bg-primary/60">
                <BiPlay className="text-2xl" />
              </div>
              <h1 className="mt-3 text-3xl font-semibold text-white capitalize">
                watch the overview
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverView;
