import { memo } from "react";
import { useDispatch } from "react-redux";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
// components
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { openModal } from "redux/slices/modalSlice";

import altImage from "assets/images/alt.jpeg";

const ActivityThumbnail = memo(
  ({ activity }) => {
    const {
      Address,
      //Class1,
      Description,
      Location,
      Name,
      Picture,
      StartTime,
      //EndTime,
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
        <div className="w-full md:w-[calc(50%-27px)] relative flex p-4 bg-white h-32 md:h-[150px] lg:h-[228px] shadow after:shadow-corner-l before:shadow-corner-r">
          <img
            className="lazyload rounded block w-1/3 h-full object-cover mr-4 shadow"
            data-src={photo ?? altImage}
          />
          <div className="flex flex-col justify-between max-w-[calc(100%-33%-16px)]">
            <h4 className="font-semibold mb-[14px] text-sm lg:text-base">
              {Name}
            </h4>
            <p className="hidden lg:line-clamp-5 text-sm text-gray-400 mb-3">
              {Description}
            </p>
            <div className="flex items-center justify-between">
              <div className="lg:w-1/2">
                <LocationMarkerIcon className=" w-5 text-custom-pink inline mr-2" />
                <h6 className="text-sm inline ">
                  {Location || "to see the official site"}
                </h6>
              </div>
              <button
                className="hidden lg:block border border-custom-pink px-8 py-2 text-custom-pink rounded-xl text-sm w-1/2 hover:bg-custom-pink hover:text-white"
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
  },
  (prevProps, nextProps) => {
    return prevProps.activity.ActivityID === nextProps.activity.ActivityID;
  }
);

export default ActivityThumbnail;
