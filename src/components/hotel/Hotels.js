import SubTitle from "components/common/SubTitle";
import HotelCollection from "./HotelCollection";

const Hotels = ({ defaultCount }) => {
  return (
    <section className="container m-auto ">
      <SubTitle subTitle="推薦住宿" icon="cloud" />
      <HotelCollection defaultCount={defaultCount} />
    </section>
  );
};

export default Hotels;
