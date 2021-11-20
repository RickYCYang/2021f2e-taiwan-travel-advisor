//components
import CityCollection from "./CityCollection";
import SubTitle from "../common/SubTitle";

const Cities = () => {
  return (
    <section className="container m-auto mb-[60px] pl-[65px] lg:pl-0">
      <SubTitle subTitle={"熱門城市"} icon="triangle" />
      <CityCollection />
    </section>
  );
};

export default Cities;
