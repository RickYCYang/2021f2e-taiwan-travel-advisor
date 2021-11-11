import SubTitle from "../common/SubTitle";
import RestaurantCollection from "./RestaurantCollection";
import Modal from "components/common/Modal";

const Restaurant = ({ city, defaultCount, keyword }) => {
  return (
    <section className="container m-auto ">
      <SubTitle subTitle="熱門餐飲" icon="rectangle" />
      <RestaurantCollection
        city={city}
        defaultCount={defaultCount}
        keyword={keyword}
      />
      <Modal />
    </section>
  );
};

export default Restaurant;
