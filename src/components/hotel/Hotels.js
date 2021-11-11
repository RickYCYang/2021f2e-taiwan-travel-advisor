import SubTitle from "components/common/SubTitle";
import HotelCollection from "./HotelCollection";
import Modal from "components/common/Modal";

const Hotels = ({ city, defaultCount, keyword }) => {
  return (
    <section className="container m-auto ">
      <SubTitle subTitle="推薦住宿" icon="cloud" />
      <HotelCollection
        city={city}
        defaultCount={defaultCount}
        keyword={keyword}
      />
      <Modal />
    </section>
  );
};

export default Hotels;
