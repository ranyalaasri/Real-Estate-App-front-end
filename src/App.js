import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import BackToTopButton from "./components/common/BackToTopButton";
import Dropdown from "./components/common/DropDown";
import Footer from "./components/common/Footer";
import Loader from "./components/common/Loader";
import Navbar from "./components/common/Navbar";
import NewsLetter from "./components/common/NewsLetter";
import { closeDropdown } from "./features/uiSlice";
import {
  About,
  Blogs,
  Contact,
  Faqs,
  Home,
  PageNotFound,
  Properties,
  PropertyDetails,
} from "./pages";
function App() {
  const [showButton, setShowButton] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const dispatch = useDispatch();
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  const handleCloseDropdown = (e) => {
    dispatch(closeDropdown());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  // Loader when page is loading
  window.addEventListener("load", () => {
    setShowLoader(false);
  });

  return (
    <div>
      {showLoader && <Loader />}
      <Navbar />
      <Dropdown />
      <div
        className="min-h-screen pb-40"
        onClick={handleCloseDropdown}
        onMouseOver={() => dispatch(closeDropdown())}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/property-details/:id" element={<PropertyDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
        <NewsLetter />
        <div className="mt-20">
          <Footer />
        </div>
      </div>
      <BackToTopButton showButton={showButton} />
    </div>
  );
}

export default App;
