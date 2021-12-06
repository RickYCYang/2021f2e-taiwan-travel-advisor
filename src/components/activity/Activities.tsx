// components
import SubTitle from "../common/SubTitle";
import ActivityCardCollection from "./ActivityCardCollection";
import Modal from "components/common/Modal";
import Container from "components/common/Container";

const Activities: React.FC<{
  city?: string;
  defaultCount?: number;
  keyword?: string;
}> = ({ city, defaultCount, keyword }) => {
  return (
    <Container>
      <SubTitle subTitle="熱門活動" icon="triangle" />
      <ActivityCardCollection
        city={city}
        defaultCount={defaultCount}
        keyword={keyword}
      />
      <Modal />
    </Container>
  );
};

export default Activities;
