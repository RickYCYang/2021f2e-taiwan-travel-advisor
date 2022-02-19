import axios from "api/axios";
import { route, stopOfRoute, routeStopArriveTime } from "types/traffic";

export const getRoutesByCity = async (city: string) => {
  const { data } = (await axios.get(`Bus/Route/City/${city}`, {
    params: {
      $select: `RouteUID,RouteName,DepartureStopNameZh,DestinationStopNameZh`,
      $orderby: "RouteUID",
      $format: "JSON",
    },
  })) as { data: Array<route> };
  return data;
};

export const getStopsByCityAndRouteName = async (
  city: string,
  routeName: string
) => {
  const { data } = (await axios.get(
    `Bus/DisplayStopOfRoute/City/${city}/${routeName}`,
    {
      params: {
        $select: "RouteName,Direction,Stops",
        $top: 30,
        $format: "JSON",
      },
    } //?$select=RouteName%2CDirection%2CStops&$top=30&$format=JSON`
  )) as { data: Array<stopOfRoute> };
  return data;
};

export const getArrivalTimeByCityAndRouteName = async (
  city: string,
  routeName: string
) => {
  const { data } = (await axios.get(
    `Bus/EstimatedTimeOfArrival/City/${city}/${routeName}`,
    {
      params: {
        $format: "JSON",
      },
    }
  )) as { data: Array<routeStopArriveTime> };
  return data;
};
