import SubTitle from "../common/SubTitle";
import RestaurantCollection from "./RestaurantCollection";
import Modal from "components/common/Modal";
import Container from "components/common/Container";

const Restaurant = ({ city, defaultCount, keyword }) => {
  return (
    <Container>
      <SubTitle subTitle="熱門餐飲" icon="rectangle" />
      <RestaurantCollection
        city={city}
        defaultCount={defaultCount}
        keyword={keyword}
      />
      <Modal />
    </Container>
  );
};

export default Restaurant;
