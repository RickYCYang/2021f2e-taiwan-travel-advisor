import SubTitle from "../common/SubTitle";
import ActivityCollection from "./ActivityCollection";
import Modal from "components/common/Modal";
import Container from "components/common/Container";
const Activities = ({ city, defaultCount, keyword }) => {
  return (
    <Container>
      <SubTitle subTitle="熱門活動" icon="triangle" />
      <ActivityCollection
        city={city}
        defaultCount={defaultCount}
        keyword={keyword}
      />
      <Modal />
    </Container>
  );
};

export default Activities;
