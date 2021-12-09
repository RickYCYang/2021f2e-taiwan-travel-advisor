import { useParams } from "react-router-dom";
/// components
import ScenicSpots from "components/scenicspot/ScenicSpots";
import Banner from "components/common/Banner";
import Main from "components/common/Main";

const ScenicSpot: React.FC = () => {
  const { city } = useParams<{ city?: string }>();
  return (
    <Main>
      <Banner className="lg:bg-scenicspot" />
      <ScenicSpots city={city} defaultCount={40} />
    </Main>
  );
};

export default ScenicSpot;
