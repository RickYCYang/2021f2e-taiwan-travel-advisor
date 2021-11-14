import { useParams } from "react-router-dom";
//components
import Banner from "components/common/Banner";
import Hotels from "components/hotel/Hotels";
import Main from "components/common/Main";

const Hotel = () => {
  const { city } = useParams();
  return (
    <Main>
      <Banner className="bg-hotel" />
      <Hotels city={city} defaultCount={40} />
    </Main>
  );
};

export default Hotel;
