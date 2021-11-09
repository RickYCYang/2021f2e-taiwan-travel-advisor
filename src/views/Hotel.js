import { useParams } from "react-router-dom";
//components
import Banner from "components/common/Banner";
import Hotels from "components/hotel/Hotels";

const Hotel = () => {
  const { city } = useParams();
  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner className="bg-hotel" />
      <Hotels city={city} defaultCount={40} />
    </main>
  );
};

export default Hotel;
