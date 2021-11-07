import Banner from "components/common/Banner";
import Cities from "components/city/Cities";
import Activities from "components/activity/Activities";
import ScenicSpots from "components/scenicspot/ScenicSpots";
import Restaurants from "components/restautant/Restaurants";
import Hotels from "components/hotel/Hotels";

const Home = () => {
  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner bgImageClass="bg-home" />
      <Cities />
      <Activities />
      <ScenicSpots />
      <Restaurants />
      <Hotels />
    </main>
  );
};

export default Home;
