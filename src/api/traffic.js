import axios from "api/axios";

export const getRoutesByCity = async (city) => {
  const { data } = await axios(
    "get",
    `Bus/Route/City/${city}?$select=RouteUID%2CRouteName%2CDepartureStopNameZh%2C%20DestinationStopNameZh&$orderby=RouteUID&$format=JSON`
  );
  return data;
};

export const getStopsByCityAndRouteName = async (city, routeName) => {
  const { data } = await axios(
    "get",
    `Bus/DisplayStopOfRoute/City/${city}/${routeName}?$select=RouteName%2CDirection%2CStops&$top=30&$format=JSON`
  );
  return data;
};

export const getArrivalTimeByCityAndRouteName = async (city, routeName) => {
  const { data } = await axios(
    "get",
    `Bus/EstimatedTimeOfArrival/City/${city}/${routeName}?$format=JSON`
  );
  return data;
};
