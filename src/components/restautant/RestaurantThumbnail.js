// components
import Card from "components/common/Card";

const RestaurantThumbnail = ({ restaurant }) => {
  const { Name, Address, Picture } = restaurant;
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

export default RestaurantThumbnail;
