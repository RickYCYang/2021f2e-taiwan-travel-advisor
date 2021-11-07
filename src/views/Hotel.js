import Banner from "components/common/Banner";
import Hotels from "components/hotel/Hotels";

const Hotel = () => {
  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner bgImageClass="bg-hotel" />
      <Hotels defaultCount={40} />
    </main>
  );
};

export default Hotel;
