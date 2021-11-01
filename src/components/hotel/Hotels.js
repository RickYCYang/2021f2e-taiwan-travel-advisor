import SubTitle from "components/common/SubTitle";
import HotelCollection from "./HotelCollection";

const Hotels = () => {
  return (
    <section className="container m-auto ">
      <SubTitle subTitle="推薦住宿" icon="rectangle" />
      <HotelCollection />
    </section>
  );
};

export default Hotels;
