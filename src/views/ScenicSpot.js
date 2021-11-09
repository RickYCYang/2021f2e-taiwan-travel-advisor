import { useParams } from "react-router-dom";
/// components
import ScenicSpots from "components/scenicspot/ScenicSpots";
import Banner from "components/common/Banner";

const ScenicSpot = () => {
  const { city } = useParams();
  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner className="bg-scenicspot" />
      <ScenicSpots city={city} defaultCount={40} />
    </main>
  );
};

export default ScenicSpot;
