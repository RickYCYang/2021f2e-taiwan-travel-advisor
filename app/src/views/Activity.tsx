import { useParams } from "react-router-dom";
//components
import Banner from "components/common/Banner";
import Activities from "components/activity/Activities";
import Main from "components/common/Main";

const Activity: React.FC = () => {
  const { city } = useParams<{ city?: string }>();
  return (
    <Main>
      <Banner className="lg:bg-activity" />
      <Activities city={city} defaultCount={20} />
    </Main>
  );
};

export default Activity;
