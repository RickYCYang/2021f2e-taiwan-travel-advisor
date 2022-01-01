import { useState, useEffect } from "react";
import usePrevious from "hooks/usePrevious";
import { useQuery } from "react-query";
import { setStops } from "redux/slices/routeSlice";
import { useDispatch } from "react-redux";
import { Option } from "utils/option";

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

interface Route {
  RouteName: { Zh_tw: string };
  DepartureStopNameZh: string;
  DestinationStopNameZh: string;
}

interface RouteOption {
  label: string;
  value: string;
  routeName: string;
  departureStopNameZh: string;
  destinationStopNameZh: string;
}

interface Stop {
  StationID: string;
  StopBoarding: number;
  StopID: string;
  StopName: {
    En: string;
    Zh_tw: string;
  };
  StopPosition: {
    PositionLat: number;
    PositionLon: number;
  };
  StopSequence: number;
  StopUID: string;
  estimateTime: number;
  stopStatus: number;
}

interface ArriveTime {
  Direction: number;
  EstimateTime: number;
  RouteID: string;
  RouteName: {
    En: string;
    Zh_tw: string;
  };
  RouteUID: string;
  SrcUpdateTime: string;
  StopID: string;
  StopName: {
    En: string;
    Zh_tw: string;
  };
  StopStatus: number;
  StopUID: string;
  UpdateTime: string;
}

const Searchbar: React.FC = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState<Option>(cities[0]);
  const [departure, setDeparture] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [routeOptions, setRouteOptions] = useState<RouteOption[]>([]);
  const [route, setRoute] = useState<Option>({ label: "", value: "" });
  const [direction, setDirection] = useState<number>(0);

  const prevRoute: Option | undefined = usePrevious(route);

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
          }: Route) => ({
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
      const data = stops[direction].Stops.map((stop: Stop) => {
        arrivalTimes.forEach((arrivalTime: ArriveTime) => {
          if (
            arrivalTime.Direction === direction &&
            arrivalTime.StopID === stop.StopID
          ) {
            stop = {
              ...stop,
              estimateTime: arrivalTime.EstimateTime,
              stopStatus: arrivalTime.StopStatus,
            };
          }
        });
        return stop;
      });
      dispatch(setStops(data));
    }
  }, [stops, direction, arrivalTimes, dispatch]);

  const toggleRoute = (e: RouteOption) => {
    setRoute(e);
    setDeparture(e.departureStopNameZh);
    setDestination(e.destinationStopNameZh);
  };

  return (
    <section
      data-testid="searchbar"
      className="relative bg-white flex flex-col items-stretch w-full px-4 
                md:px-0 md:pt-9 lg:after:shadow-corner-l lg:before:shadow-corner-r"
    >
      <MobileNavbar />
      <div className="flex justify-center gap-2 mb-4 md:mb-10">
        <Selector
          className="tracking-wider w-60"
          options={cities}
          value={city}
          name={"citySelector"}
          defaultValue={city}
          onChange={(e: Option) => setCity(e)}
        />
        <Selector
          className="tracking-wider w-60"
          options={routeOptions}
          value={route}
          name={"routeSelector"}
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
export type { Route, RouteOption, Stop, ArriveTime };
