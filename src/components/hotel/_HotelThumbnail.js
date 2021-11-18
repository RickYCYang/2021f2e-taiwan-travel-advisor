import { useDispatch } from "react-redux";
import { openModal } from "redux/slices/modalSlice";

// components
import Card from "components/common/Card";

const HotelThumbnail = ({ hotel }) => {
  const dispatch = useDispatch();
  const { Name, Description, Phone, Address, Picture, Class, SrcUpdateTime } =
    hotel;
  const payload = {
    photos: Object.values(Picture) || [],
    title: Name,
    description: Description,
    phone: Phone,
    address: Address,
    class1: Class,
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

export default HotelThumbnail;
