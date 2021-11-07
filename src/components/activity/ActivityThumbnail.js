import { useState } from "react";
import { useDispatch } from "react-redux";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
// components
import { LocationMarkerIcon } from "@heroicons/react/solid";
//import ActivityModal from "./_ActivityModal";
import { openModal } from "redux/slices/modalSlice";

const ActivityThumbnail = ({ activity }) => {
  const {
    Address,
    Class1,
    Description,
    Location,
    Name,
    Picture,
    StartTime,
    EndTime,
    Cycle,
    NonCycle,
    Charge,
    Phone,
  } = activity;
  const payload = {
    photos: Object.values(Picture) || [],
    title: Name,
    description: Description,
    phone: Phone,
    address: Address,
    time: StartTime,
    cycle: Cycle,
    nonCycle: NonCycle,
    charge: Charge,
  };
  const dispatch = useDispatch();

  let photo = Object.values(Picture)[0];
  //const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => {
  //   setShowModal(true);
  // };
  return (
    <>
      <div className="w-[calc(50%-27px)] relative flex p-4 bg-white h-[228px] shadow after:shadow-corner-l before:shadow-corner-r">
        <img
          className="lazyload rounded block w-1/3 h-full object-cover mr-4 shadow"
          data-src={photo}
        />
        <div>
          <h4 className="font-semibold mb-[14px]">{Name}</h4>
          <p className="line-clamp-5 text-sm text-gray-400 mb-3">
            {Description}
          </p>
          <div className="flex items-center justify-between">
            <div>
              <LocationMarkerIcon className=" w-5 text-custom-pink inline mr-3" />
              <h6 className="text-sm inline">{Location}</h6>
            </div>
            <button
              className="border border-custom-pink px-8 py-2 text-custom-pink rounded-xl text-sm hover:bg-custom-pink hover:text-white"
              onClick={() => dispatch(openModal(payload))}
            >
              活動詳情
            </button>
          </div>
        </div>
      </div>
      {/*       
      <ActivityModal
        show={showModal}
        location={Location}
        closeModal={() => setShowModal(false)}
        setShowModal={setShowModal}
        photos={Picture}
        title={Name}
        description={Description}
        time={StartTime}
        address={Address}
        charge={Charge}
        phone={Phone}
        class1={Class1}
        cycle={Cycle}
        nonCycle={NonCycle}
      /> */}
    </>
  );
};

export default ActivityThumbnail;
