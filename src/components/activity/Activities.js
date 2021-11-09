import SubTitle from "../common/SubTitle";
import ActivityCollection from "./ActivityCollection";
import Modal from "components/common/Modal";

const Activities = ({ city, defaultCount }) => {
  return (
    <section className="container m-auto mb-3">
      <SubTitle subTitle="熱門活動" icon="triangle" />
      <ActivityCollection city={city} defaultCount={defaultCount} />
      <Modal />
    </section>
  );
};

export default Activities;
