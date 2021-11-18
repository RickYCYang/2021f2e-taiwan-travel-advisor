import { useDispatch } from "react-redux";
// components
import Card from "components/common/Card";
import { openModal } from "redux/slices/modalSlice";

const RestaurantThumbnail = ({ restaurant }) => {
  const dispatch = useDispatch();
  const { Name, Description, Phone, Address, Picture, SrcUpdateTime } =
    restaurant;
  const payload = {
    photos: Object.values(Picture) || [],
    title: Name,
    description: Description,
    phone: Phone,
    address: Address,
    time: SrcUpdateTime,
  };

  return (
    <Card
      title={Name}
      address={Address}
      picture={Picture.PictureUrl1}
      onClick={() => dispatch(openModal(payload))}
    />
  );
};

export default RestaurantThumbnail;
