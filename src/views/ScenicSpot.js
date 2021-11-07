import ScenicSpots from "components/scenicspot/ScenicSpots";
import Banner from "components/common/Banner";

const ScenicSpot = () => {
  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner bgImageClass="bg-scenicspot" />
      <ScenicSpots defaultCount={40} />
    </main>
  );
};

export default ScenicSpot;
