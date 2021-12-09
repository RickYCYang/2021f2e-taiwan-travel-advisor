import { Redirect, useParams } from "react-router-dom";
// components
import Banner from "components/common/Banner";
import Cities from "components/city/Cities";
import Activities from "components/activity/Activities";
import ScenicSpots from "components/scenicspot/ScenicSpots";
import Restaurants from "components/restautant/Restaurants";
import Hotels from "components/hotel/Hotels";
import Main from "components/common/Main";

// const
import cities from "const/cities";

const checkCityParam = (city?: string) => {
  let exist = false;
  // eslint-disable-next-line
  cities.map(({ value }) => {
    if (city === value) {
      exist = true;
      return null;
    }
  });
  return exist;
};

const Home: React.FC = () => {
  const { city } = useParams<{ city?: string }>();

  /// If has path parameter {city}
  if (city) {
    const isCityExisted = checkCityParam(city);
    if (!isCityExisted) {
      return <Redirect to="/" />;
    }
  }

  return (
    <Main>
      <Banner className="lg:bg-home" />
      <Cities />
      <Activities city={city} defaultCount={4} />
      <ScenicSpots city={city} />
      <Restaurants city={city} />
      <Hotels city={city} />
    </Main>
  );
};

export default Home;
