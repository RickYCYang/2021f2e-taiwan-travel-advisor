import SubTitle from "../common/SubTitle";
import ActivityCollection from "./ActivityCollection";

const Activities = () => {
  return (
    <section className="container m-auto mb-3">
      <SubTitle subTitle="熱門活動" icon="triangle" />
      <ActivityCollection />
    </section>
  );
};

export default Activities;
