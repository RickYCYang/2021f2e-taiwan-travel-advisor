import { position } from 'types/common';

export enum motcTourismType {
  hotel = 'hotel',
  restaurant = 'restaurant',
  scenicSpot = 'scenicSpot',
  activity = 'activity',
}

export type motcTourism = {
  Address: string;
  City: string;
  Description?: string;
  Phone?: string;
  Picture?: {
    PictureDescription1?: string;
    PictureDescription2?: string;
    PictureDescription3?: string;
    PictureUrl1?: string;
    PictureUrl2?: string;
    PictureUrl3?: string;
  };
  Position?: position;
  SrcUpdateTime: string;
  UpdateTime: string;
};

export type motcTourismActivity = motcTourism & {
  type: motcTourismType.activity;
  ActivityID: string;
  ActivityName: string;
  Class1?: string;
  Class2?: string;
  EndTime?: string;
  Location?: string;
  Organizer?: string;
  StartTime?: string;
  Cycle?: string;
  NonCycle?: string;
  WebsiteUrl?: string;
  MapUrl?: string;
  TravelInfo?: string;
  ParkingInfo?: string;
  Charge?: string;
  Remarks?: string;
};

export type motcTourismHotel = motcTourism & {
  type: motcTourismType.hotel;
  HotelID: string;
  HotelName: string;
  Grade?: string;
  ZipCode?: string;
  Fax?: string;
  WebsiteUrl?: string;
  Class?: string;
  MapUrl?: string;
  Spec?: string;
  ServiceInfo?: string;
  ParkingInfo?: string;
};

export type motcTourismRestaurant = motcTourism & {
  type: motcTourismType.restaurant;
  RestaurantID: string;
  RestaurantName: string;
  ZipCode?: string;
  OpenTime?: string;
  WebsiteUrl?: string;
  Class?: string;
  MapUrl?: string;
  ParkingInfo?: string;
};

export type motcTourismScenicSpot = motcTourism & {
  type: motcTourismType.scenicSpot;
  ScenicSpotID: string;
  ScenicSpotName: string;
  DescriptionDetail?: string;
  ZipCode?: string;
  TravelInfo?: string;
  OpenTime?: string;
  MapUrl?: string;
  class1?: string;
  class2?: string;
  class3?: string;
  Level?: string;
  WebsiteUrl?: string;
  ParkingInfo?: string;
  ParkingPosition?: position;
  TicketInfo?: string;
  Remarks?: string;
  Keyword?: string;
};
