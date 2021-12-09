import { useDispatch } from "react-redux";
import { openModal } from "redux/slices/modalSlice";

import Card from "components/common/Card";

interface Data {
  Picture: { PictureUrl1: string; [key: string]: unknown };
  Name: string;
  Description: string;
  DescriptionDetail: string;
  Phone?: string;
  Address?: string;
  SrcUpdateTime?: string;
  City: string;
  WebsiteUrl?: string;
  Position?: {
    PositionLat: string;
    PositionLon: string;
  };
  ID: string;
  Class: string;
  Fax: string;
  ParkingInfo?: string;
  ServiceInfo?: string;
  Spec?: string;
  UpdateTime: string;
  OpenTime: string;
  Remarks: string;
  TicketInfo: string;
  TravelInfo: string;
}

const CardCollection: React.FC<{ data: Array<Data> }> = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-6 md:gap-y-12 mb-6 md:mb-12">
      {data.map((item: Data) => {
        const payload = {
          photos: Object.values(item.Picture) || [],
          thumbnail: item.Picture.PictureUrl1,
          title: item.Name,
          description: item.Description,
          phone: item.Phone,
          address: item.Address,
          time: item.SrcUpdateTime,
          city: item.City,
          website: item.WebsiteUrl,
          position: item.Position,
        };
        return (
          <Card
            key={item.ID}
            title={payload.title}
            city={payload.city}
            address={payload.address}
            picture={payload.thumbnail}
            onClick={() => dispatch(openModal(payload))}
          />
        );
      })}
    </div>
  );
};

export default CardCollection;
