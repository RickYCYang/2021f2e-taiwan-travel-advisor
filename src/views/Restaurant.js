import Banner from "components/common/Banner";
import Restaurtants from "components/restautant/Restaurants";

const Restaurant = () => {
  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner bgImageClass="bg-restaurant" />
      <Restaurtants defaultCount={40} />
    </main>
  );
};

export default Restaurant;
