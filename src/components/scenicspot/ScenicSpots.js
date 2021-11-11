import SubTitle from "../common/SubTitle";
import ScenicSpotCollection from "./ScenicSpotCollection";
import Modal from "components/common/Modal";

const ScenicSpots = ({ city, defaultCount, keyword }) => {
  return (
    <section className="container m-auto ">
      <SubTitle subTitle="觀光景點" icon="triangle" />
      <ScenicSpotCollection
        city={city}
        defaultCount={defaultCount}
        keyword={keyword}
      />
      <Modal />
    </section>
  );
};

export default ScenicSpots;
