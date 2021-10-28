import SubTitle from "./SubTitle";
import RestaurantCollection from "./RestaurantCollection";

const Restaurant = () => {
  return (
    <section className="container m-auto ">
      <SubTitle subTitle="熱門餐飲" icon="rectangle" />
      <RestaurantCollection />
    </section>
  );
};

export default Restaurant;
