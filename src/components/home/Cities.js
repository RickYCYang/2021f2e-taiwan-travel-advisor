//components
import CityCollection from "./CityCollection";
import SubTitle from "./SubTitle";

const Cities = () => {
  return (
    <section className="container m-auto mb-[60px]">
      <SubTitle subTitle={"熱門城市"} icon="triangle" />
      <CityCollection />
    </section>
  );
};

export default Cities;
