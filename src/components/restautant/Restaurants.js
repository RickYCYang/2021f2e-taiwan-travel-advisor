import SubTitle from "../common/SubTitle";
import RestaurantCollection from "./RestaurantCollection";
import Modal from "components/common/Modal";

const Restaurant = ({ defaultCount }) => {
  return (
    <section className="container m-auto ">
      <SubTitle subTitle="熱門餐飲" icon="rectangle" />
      <RestaurantCollection defaultCount={defaultCount} />
      <Modal />
    </section>
  );
};

export default Restaurant;
