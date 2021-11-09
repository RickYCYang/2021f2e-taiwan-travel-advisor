import { useParams } from "react-router-dom";
//components
import Banner from "components/common/Banner";
import Activities from "components/activity/Activities";

const Activity = () => {
  const { city } = useParams();
  return (
    <main className="space-y-[80px] pb-20 relative overflow-hidden">
      <Banner className="bg-activity" />
      <Activities city={city} defaultCount={20} />
    </main>
  );
};

export default Activity;
