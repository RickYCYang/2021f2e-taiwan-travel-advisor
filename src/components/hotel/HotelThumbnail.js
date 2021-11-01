// components
import Card from "components/common/Card";

const HotelThumbnail = ({ hotel }) => {
  const { Name, Address, Picture } = hotel;
  return (
    <Card
      title={Name}
      address={Address}
      picture={Picture.PictureUrl1}
      width="206"
      height="243"
    />
  );
};

export default HotelThumbnail;
