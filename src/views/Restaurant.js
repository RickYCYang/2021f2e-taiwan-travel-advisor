import { useParams } from "react-router-dom";

// components
import Banner from "components/common/Banner";
import Restaurtants from "components/restautant/Restaurants";
import Main from "components/common/Main";

const Restaurant = () => {
  const { city } = useParams();
  return (
    <Main>
      <Banner className="lg:bg-restaurant" />
      <Restaurtants city={city} defaultCount={40} />
    </Main>
  );
};

export default Restaurant;
