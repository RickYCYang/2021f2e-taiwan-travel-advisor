import { useDispatch } from "react-redux";
import { openModal } from "redux/slices/modalSlice";
import Card from "components/common/Card";
import {
  motcTourismHotel,
  motcTourismRestaurant,
  motcTourismScenicSpot,
} from "types/tourism";

type card = motcTourismHotel & motcTourismRestaurant & motcTourismScenicSpot;

const CardCollection: React.FC<{
  data: Array<card>;
}> = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-6 md:gap-y-12 mb-6 md:mb-12">
      {data.map((item: card, index: number) => {
        const payload = {
          photos: Object.values(item.Picture || {}) || [],
          thumbnail: item.Picture?.PictureUrl1,
          title:
            item.HotelName ?? item.RestaurantName ?? item.ScenicSpotName ?? "",
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
            key={
              item.HotelID ?? item.RestaurantID ?? item.ScenicSpotID ?? index
            }
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
