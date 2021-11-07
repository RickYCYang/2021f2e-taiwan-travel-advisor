import SubTitle from "../common/SubTitle";
import ScenicSpotCollection from "./ScenicSpotCollection";
import Modal from "components/common/Modal";

const ScenicSpots = ({ defaultCount }) => {
  return (
    <section className="container m-auto ">
      <SubTitle subTitle="觀光景點" icon="triangle" />
      <ScenicSpotCollection defaultCount={defaultCount} />
      <Modal />
    </section>
  );
};

export default ScenicSpots;
