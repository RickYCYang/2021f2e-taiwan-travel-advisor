import { useRef, useCallback } from 'react';
//components
import CityThumbnail from './CityThumbnail';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { CaretRightFilled, CaretLeftFilled } from '@ant-design/icons';
//constant
import cities from 'const/cities';

const CityCollection: React.FC = () => {
  const scrollbarRef = useRef() as { current: HTMLElement };

  const scrollHorizontally = useCallback(
    (directionStr: string): void => {
      const direction = directionStr === 'right' ? 1 : -1;

      const { current } = scrollbarRef;
      if (current) {
        /**
         * behavior: 'smooth' is broken for chrome version v102+
         * ref: https://github.com/mdbootstrap/perfect-scrollbar/issues/138
         */
        // current.scrollTo({
        //   behavior: "smooth",
        //   left: current.scrollLeft + 500 * direction,
        // });
        current.scrollLeft = current.scrollLeft + 500 * direction;
      }
    },
    [scrollbarRef]
  );

  return (
    <div data-testid="cityCollection" className="relative">
      <div
        className="hidden md:flex md:absolute md:top-[calc(50%-16px)] md:-left-12 md:rounded-lg md:w-8 md:h-8 md:bg-white md:justify-center md:items-center md:cursor-pointer md:hover:bg-gray-500 md:shadow-xl md:border md:border-gray-200"
        onClick={() => scrollHorizontally('left')}
      >
        <CaretLeftFilled className="text-black" />
      </div>
      <div
        className="hidden md:flex md:absolute md:top-[calc(50%-16px)] md:-right-12 md:rounded-lg md:w-8 md:h-8 md:bg-black md:justify-center md:items-center md:cursor-pointer md:hover:bg-gray-500"
        onClick={() => scrollHorizontally('right')}
      >
        <CaretRightFilled className="text-white" />
      </div>
      <PerfectScrollbar
        containerRef={(element) => (scrollbarRef.current = element)}
      >
        <div className="relative flex flex-nowrap items-stretch space-x-3">
          {
            // eslint-disable-next-line
            cities.map((city, index) => {
              // If index % 3 === 0, return one CityThumbnail, full height
              if (index % 3 === 0) {
                return <CityThumbnail key={city.value} city={city} />;
              } else if (index % 3 === 1) {
                // If index % 3 === 1, return two CityThumbnail, half height of each
                return (
                  <div
                    className="flex flex-col gap-2"
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
              }
            })
          }
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default CityCollection;
