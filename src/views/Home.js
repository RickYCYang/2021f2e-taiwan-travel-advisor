import Banner from "components/common/Banner";
import Cities from "components/home/Cities";
import Activities from "components/home/Activities";
import Restaurants from "components/restautant/Restaurants";

const Home = () => {
  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner bgImageClass="bg-home" />
      <Cities />
      <Activities />
      <Restaurants />
    </main>
  );
};

export default Home;
