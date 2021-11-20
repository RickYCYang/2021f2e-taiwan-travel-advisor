import SubTitle from "../common/SubTitle";
import ActivityCollection from "./ActivityCollection";
import Modal from "components/common/Modal";

const Activities = ({ city, defaultCount, keyword }) => {
  return (
    <section className="container m-auto mb-3 px-16 lg:px-0">
      <SubTitle subTitle="熱門活動" icon="triangle" />
      <ActivityCollection
        city={city}
        defaultCount={defaultCount}
        keyword={keyword}
      />
      <Modal />
    </section>
  );
};

export default Activities;
