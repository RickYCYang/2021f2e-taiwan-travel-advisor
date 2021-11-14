import { useParams } from "react-router-dom";
// components
import Banner from "components/common/Banner";
import Cities from "components/city/Cities";
import Activities from "components/activity/Activities";
import ScenicSpots from "components/scenicspot/ScenicSpots";
import Restaurants from "components/restautant/Restaurants";
import Hotels from "components/hotel/Hotels";
import Main from "components/common/Main";

const Home = () => {
  const { city } = useParams();
  return (
    <Main>
      <Banner className="bg-home" />
      <Cities />
      <Activities city={city} defaultCount={4} />
      <ScenicSpots city={city} />
      <Restaurants city={city} />
      <Hotels />
    </Main>
  );
};

export default Home;
