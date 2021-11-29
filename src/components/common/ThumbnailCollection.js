import { useDispatch } from "react-redux";
import { openModal } from "redux/slices/modalSlice";

import Card from "components/common/Card";

const ThumbnailCollection = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap gap-x-2 gap-y-6 md:gap-y-12 mb-6 md:mb-12">
      {data.map((item) => {
        const payload = {
          photos: Object.values(item.Picture) || [],
          thumbnail: item.Picture.PictureUrl1,
          title: item.Name,
          description: item.Description,
          phone: item.Phone,
          address: item.Address,
          time: item.SrcUpdateTime,
          city: item.City,
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

export default ThumbnailCollection;
