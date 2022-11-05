import { position } from "types/common";

export type routeStopName = {
  En: string;
  Zh_tw: string;
};

export type route = {
  BusRouteType: number;
  DepartureStopNameZh: string;
  DestinationStopNameZh: string;
  HasSubRoutes: boolean;
  RouteName: routeStopName;
  RouteUID: string;
  UpdateTime: string;
  VersionID: number;
};

export type stopOfRoute = {
  Direction: number;
  RouteName: routeStopName;
  Stops: Array<stop>;
  UpdateTime: string;
  VersionID: number;
};

export type stop = {
  StationID: string;
  StopBoarding: number;
  StopID: string;
  StopName: routeStopName;
  StopPosition: position;
  StopSequence: number;
  StopUID: string;
};

export type stopOfRouteAndArrival = stop & {
  estimateTime: number;
  stopStatus: number;
};

export type routeStopArriveTime = {
  Direction: number;
  EstimateTime: number;
  RouteID: string;
  RouteName: routeStopName;
  RouteUID: string;
  SrcUpdateTime: string;
  StopID: string;
  StopName: routeStopName;
  StopStatus: number;
  StopUID: string;
  UpdateTime: string;
};
