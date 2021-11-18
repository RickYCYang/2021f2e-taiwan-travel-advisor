import SubTitle from "components/common/SubTitle";
import HotelCollection from "./HotelCollection";
import Modal from "components/common/Modal";
// components
import Container from "components/common/Container";

const Hotels = ({ city, defaultCount, keyword }) => {
  return (
    <Container>
      <SubTitle subTitle="推薦住宿" icon="cloud" />
      <HotelCollection
        city={city}
        defaultCount={defaultCount}
        keyword={keyword}
      />
      <Modal />
    </Container>
  );
};

export default Hotels;
