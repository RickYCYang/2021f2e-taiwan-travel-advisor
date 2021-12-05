import axios, { AxiosResponse } from "api/axios";

export const getRoutesByCity = async (city: string) => {
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Bus/Route/City/${city}?$select=RouteUID%2CRouteName%2CDepartureStopNameZh%2C%20DestinationStopNameZh&$orderby=RouteUID&$format=JSON`
  );
  return data;
};

export const getStopsByCityAndRouteName = async (
  city: string,
  routeName: string
) => {
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Bus/DisplayStopOfRoute/City/${city}/${routeName}?$select=RouteName%2CDirection%2CStops&$top=30&$format=JSON`
  );
  return data;
};

export const getArrivalTimeByCityAndRouteName = async (
  city: string,
  routeName: string
) => {
  const { data }: boolean | AxiosResponse<unknown, any> | any = await axios(
    "get",
    `Bus/EstimatedTimeOfArrival/City/${city}/${routeName}?$format=JSON`
  );
  return data;
};
