import { useRef } from "react";
//components
import CityThumbnail from "./CityThumbnail";
import PerfectScrollbar from "react-perfect-scrollbar";
import { CaretRightFilled, CaretLeftFilled } from "@ant-design/icons";

//constant
import cities from "const/cities";

const CityCollection = () => {
  const scrollbarRef = useRef();

  const scrollRight = () => {
    const curr = scrollbarRef.current;
    if (curr) {
      curr.scrollTo({
        behavior: "smooth",
        left: curr.scrollLeft + 500,
      });
    }
  };

  const scrollLeft = () => {
    const curr = scrollbarRef.current;
    if (curr) {
      curr.scrollTo({
        behavior: "smooth",
        left: curr.scrollLeft - 500,
      });
    }
  };

  return (
    <div className="relative">
      <div
        className="hidden md:flex absolute top-[calc(50%-16px)] -left-12 rounded-lg w-8 h-8 bg-white justify-center items-center cursor-pointer hover:bg-gray-500 shadow-xl border border-gray-200"
        onClick={scrollLeft}
      >
        <CaretLeftFilled className="text-black" />
      </div>
      <div
        className="hidden md:flex absolute top-[calc(50%-16px)] -right-12 rounded-lg w-8 h-8 bg-black  justify-center items-center cursor-pointer hover:bg-gray-500"
        onClick={scrollRight}
      >
        <CaretRightFilled className="text-white" />
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
