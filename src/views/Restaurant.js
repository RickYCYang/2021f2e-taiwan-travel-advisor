import { useParams } from "react-router-dom";

// components
import Banner from "components/common/Banner";
import Restaurtants from "components/restautant/Restaurants";

const Restaurant = () => {
  const { city } = useParams();
  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner className="bg-restaurant" />
      <Restaurtants city={city} defaultCount={40} />
    </main>
  );
};

export default Restaurant;
