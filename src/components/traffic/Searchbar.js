import { useState, useEffect } from "react";
import usePrevious from "hooks/usePrevious";
import { useQuery } from "react-query";
import { setStops } from "redux/slices/routeSlice";
import { useDispatch } from "react-redux";

// api
import {
  getRoutesByCity,
  getStopsByCityAndRouteName,
  getArrivalTimeByCityAndRouteName,
} from "api/traffic";

// components
import Selector from "components/common/Selector";
import MobileNavbar from "components/common/MobileNavbar";

// constant,
// Only five cities are supported by the API currently
import cities from "const/trafficCities";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState(cities[0]);
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [routeOptions, setRouteOptions] = useState([]);
  const [route, setRoute] = useState({});
  const [direction, setDirection] = useState(0);

  const prevRoute = usePrevious(route);

  const { data: routes } = useQuery(["getRoutesByCity", city.value], () =>
    getRoutesByCity(city.value)
  );

  const { data: stops } = useQuery(
    ["getStopsByCityAndRouteName", city.value, route.value],
    () => getStopsByCityAndRouteName(city.value, route.value),
    {
      // The query will not execute until the userId exists
      enabled: !!route.value && prevRoute !== route,
    }
  );

  const { data: arrivalTimes } = useQuery(
    ["getArrivalTimeByCityAndRouteName", city.value, route.value],
    () => getArrivalTimeByCityAndRouteName(city.value, route.value),
    {
      // The query will not execute until the userId exists
      enabled: !!route.value && prevRoute !== route,
      // Refetch the data every second
      refetchInterval: 15,
    }
  );

  /// Set route options after fetching data
  useEffect(() => {
    if (routes) {
      setRouteOptions(
        routes.map(
          ({
            RouteName: { Zh_tw },
            DepartureStopNameZh,
            DestinationStopNameZh,
          }) => ({
            label: Zh_tw,
            value: Zh_tw,
            routeName: Zh_tw,
            departureStopNameZh: DepartureStopNameZh,
            destinationStopNameZh: DestinationStopNameZh,
          })
        )
      );
    }
  }, [routes]);

  /// Set default route if city change
  useEffect(() => {
    if (routeOptions.length > 0) {
      setRoute(routeOptions[0]);
      setDeparture(routeOptions[0].departureStopNameZh);
      setDestination(routeOptions[0].destinationStopNameZh);
    }
  }, [routeOptions]);

  useEffect(() => {
    if (stops && arrivalTimes) {
      const data = stops[direction].Stops.map((stop) => {
        arrivalTimes.forEach((arrivalTime) => {
          if (
            arrivalTime.Direction === direction &&
            arrivalTime.StopID === stop.StopID
          ) {
            stop = {
              ...stop,
              estimateTime: arrivalTime.EstimateTime,
              stopStatus: arrivalTime.StopStatus,
              estimates: arrivalTime.Estimates,
            };
          }
        });
        return stop;
      });
      dispatch(setStops(data));
    }
  }, [stops, direction, arrivalTimes, dispatch]);

  const toggleRoute = (e) => {
    setRoute(e);
    setDeparture(e.departureStopNameZh);
    setDestination(e.destinationStopNameZh);
  };

  return (
    <section
      className="relative bg-white flex flex-col items-stretch w-full px-4 
                md:px-0 md:pt-9 lg:after:shadow-corner-l lg:before:shadow-corner-r"
    >
      <MobileNavbar />
      <div className="flex justify-center gap-2 mb-4 md:mb-10">
        <Selector
          className="tracking-wider w-60"
          options={cities}
          value={city}
          defaultValue={city}
          onChange={(e) => setCity(e)}
        />
        <Selector
          className="tracking-wider w-60"
          options={routeOptions}
          value={route}
          onChange={toggleRoute}
        />
      </div>
      <div className="flex justify-center gap-10 md:gap-20">
        <button
          className={`text-sm px-8 py-3 hover:bg-gray-100 
                    ${direction === 0 && "border-b-2 border-b-custom-pink"}
                    md:px-24 md:text-base `}
          onClick={() => setDirection(0)}
        >
          往 <span className="text-custom-pink ml-2">{departure}</span>
        </button>
        <button
          className={`text-sm px-8 py-3 hover:bg-gray-100 
                    ${direction === 1 && "border-b-2 border-b-custom-pink"}
                    md:text-base md:px-24 `}
          onClick={() => setDirection(1)}
        >
          往 <span className="text-custom-pink ml-2">{destination}</span>
        </button>
      </div>
    </section>
  );
};

export default Searchbar;
