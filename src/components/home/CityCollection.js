//components
import Citythumbnail from "./Citythumbnail";
import PerfectScrollbar from "react-perfect-scrollbar";
//constant
import cities from "const/cities";

const CityCollection = () => {
  const filterCities = cities.filter((city) => city.value);
  return (
    <div className="relative">
      <div className="absolute top-[calc(50%-16px)] -right-12 rounded-lg w-8 h-8 bg-black flex justify-center items-center cursor-pointer hover:bg-gray-500">
        <div className="border-triangle-white-2"></div>
      </div>
      <PerfectScrollbar>
        <div className="relative flex flex-nowrap overflow-x-auto space-x-3">
          {
            // eslint-disable-next-line
            filterCities.map((city, index) => {
              if (index % 3 === 0) {
                return <Citythumbnail key={city.value} city={city} />;
              } else if (index % 3 === 1) {
                return (
                  <div className="flex flex-col">
                    <Citythumbnail
                      key={filterCities[index].value}
                      city={filterCities[index]}
                      small
                    />
                    <Citythumbnail
                      key={filterCities[index + 1].value}
                      city={filterCities[index + 1]}
                      small
                    />
                  </div>
                );
              } else if (index % 3 === 2) {
                return null;
              }
            })
          }
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default CityCollection;
