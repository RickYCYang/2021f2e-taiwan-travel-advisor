import { useParams } from "react-router-dom";
//components
import Banner from "components/common/Banner";
import Hotels from "components/hotel/Hotels";
import Main from "components/common/Main";

const Hotel: React.FC = () => {
  const { city } = useParams<{ city?: string }>();
  return (
    <Main>
      <Banner className="lg:bg-hotel" />
      <Hotels city={city} defaultCount={40} />
    </Main>
  );
};

export default Hotel;
