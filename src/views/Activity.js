import { useParams } from "react-router-dom";
//components
import Banner from "components/common/Banner";
import Activities from "components/activity/Activities";
import Main from "components/common/Main";

const Activity = () => {
  const { city } = useParams();
  return (
    <Main>
      <Banner className="lg:bg-activity" />
      <Activities city={city} defaultCount={20} />
    </Main>
  );
};

export default Activity;
