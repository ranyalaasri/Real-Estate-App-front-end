 import '@fortawesome/fontawesome-free/css/all.css';
import SearchFilters from '../components/property/property-4/SearchFilter';
import CardWithImageLeft from '../components/property/property-4/card/CardComponent';
import MapVertical from '../components/property/property-4/mapComponent';


// import MapVertical from '../Components/proprety/mapComponent';


const properties = () => {
  // Logique et état pour le composant principal

  return (
    <div>
      <div className=" pt-10">
      {/* JSX pour le composant principal */}
      <SearchFilters />
      </div>
      <div className="flex flex-col lg:flex-row h-screen">
        <div className="w-full lg:w-2/5">
        <MapVertical/>
        </div>
      <CardWithImageLeft />
      </div>
    </div>
  );
};

export default properties;
