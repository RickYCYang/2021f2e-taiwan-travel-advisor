import { useDispatch } from "react-redux";
// components
import Card from "components/common/Card";
import { openModal } from "redux/slices/modalSlice";

const ScenicSpotThumbnail = ({ scenicSpot }) => {
  const dispatch = useDispatch();
  console.log("scenicSpot", scenicSpot);
  const { Name, Description, Phone, Address, Picture, SrcUpdateTime, City } =
    scenicSpot;
  const payload = {
    photos: Object.values(Picture) || [],
    title: Name,
    description: Description,
    phone: Phone,
    address: Address,
    time: SrcUpdateTime,
    city: City,
  };

  return (
    <Card
      city={City}
      title={Name}
      address={Address}
      picture={Picture.PictureUrl1}
      onClick={() => dispatch(openModal(payload))}
    />
  );
};

export default ScenicSpotThumbnail;
