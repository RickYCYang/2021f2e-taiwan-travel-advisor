import Banner from "components/common/Banner";
import Restaurtants from "components/restautant/Restaurants";
import Hotels from "components/hotel/Hotels";

const RestaurantHotel = () => {
  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner bgImageClass="bg-hotel" />
      <Restaurtants />
      <Hotels />
    </main>
  );
};

export default RestaurantHotel;
