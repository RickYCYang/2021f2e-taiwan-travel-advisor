import SubTitle from "../common/SubTitle";
import ScenicSpotCollection from "./ScenicSpotCollection";
import Modal from "components/common/Modal";
import Container from "components/common/Container";

const ScenicSpots = ({ city, defaultCount, keyword }) => {
  return (
    <Container>
      <SubTitle subTitle="觀光景點" icon="triangle" />
      <ScenicSpotCollection
        city={city}
        defaultCount={defaultCount}
        keyword={keyword}
      />
      <Modal />
    </Container>
  );
};

export default ScenicSpots;
