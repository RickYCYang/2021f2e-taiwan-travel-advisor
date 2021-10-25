import { useRef } from "react";
//components
import CityThumbnail from "./CityThumbnail";
import PerfectScrollbar from "react-perfect-scrollbar";
//constant
import cities from "const/cities";

const CityCollection = () => {
  const scrollbarRef = useRef();

  function scrollRight() {
    const curr = scrollbarRef.current;
    if (curr) {
      curr.scrollLeft += 200;
    }
  }

  return (
    <div className="relative">
      <div
        className="absolute top-[calc(50%-16px)] -right-12 rounded-lg w-8 h-8 bg-black flex justify-center items-center cursor-pointer hover:bg-gray-500"
        onClick={scrollRight}
      >
        <div className="border-triangle-white-2"></div>
      </div>
      <PerfectScrollbar containerRef={(el) => (scrollbarRef.current = el)}>
        <div className="relative flex flex-nowrap space-x-3">
          {
            // eslint-disable-next-line
            cities.map((city, index) => {
              if (index % 3 === 0) {
                return <CityThumbnail key={city.value} city={city} />;
              } else if (index % 3 === 1) {
                return (
                  <div
                    className="flex flex-col"
                    key={cities[index].value + cities[index + 1].value}
                  >
                    <CityThumbnail
                      key={cities[index].value}
                      city={cities[index]}
                      small
                    />
                    <CityThumbnail
                      key={cities[index + 1].value}
                      city={cities[index + 1]}
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
