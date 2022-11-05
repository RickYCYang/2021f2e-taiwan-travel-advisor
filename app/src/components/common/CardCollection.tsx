import { useDispatch } from 'react-redux';
import { openModal } from 'redux/slices/modalSlice';
import Card from 'components/common/Card';
import {
  motcTourismHotel,
  motcTourismRestaurant,
  motcTourismScenicSpot,
  motcTourismType,
} from 'types/tourism';

type card = motcTourismHotel | motcTourismRestaurant | motcTourismScenicSpot;

type CardCollectionProps = {
  data: card[];
};

const CardCollection = ({ data }: CardCollectionProps) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-6 md:gap-y-12 mb-6 md:mb-12">
      {data.map((item: card) => {
        const payload = {
          photos: Object.values(item.Picture || {}) || [],
          thumbnail: item.Picture?.PictureUrl1,
          id: '',
          title: '',
          description: item.Description,
          phone: item.Phone,
          address: item.Address,
          time: item.SrcUpdateTime,
          city: item.City,
          website: item.WebsiteUrl,
          position: item.Position,
        };
        switch (item.type) {
          case motcTourismType.hotel: {
            payload.id = item.HotelID;
            payload.title = item.HotelName;
            break;
          }
          case motcTourismType.restaurant: {
            payload.id = item.RestaurantID;
            payload.title = item.RestaurantName;
            break;
          }
          case motcTourismType.scenicSpot: {
            payload.id = item.ScenicSpotID;
            payload.title = item.ScenicSpotName;
            break;
          }
        }
        return (
          <Card
            key={payload.id}
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
