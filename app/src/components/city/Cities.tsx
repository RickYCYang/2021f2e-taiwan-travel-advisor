//components
import CityCollection from "./CityCollection";
import SubTitle from "../common/SubTitle";

const Cities: React.FC = () => {
  return (
    <section className="container m-auto px-3 mb-[60px] md:pl-[65px] md:pr-0 lg:pl-0">
      <SubTitle subTitle={"熱門城市"} icon="triangle" />
      <CityCollection />
    </section>
  );
};

export default Cities;
