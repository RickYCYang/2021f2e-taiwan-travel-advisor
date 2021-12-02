import { memo } from "react";
import { useDispatch } from "react-redux";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

// components
import { LocationMarkerIcon } from "@heroicons/react/solid";
import { openModal } from "redux/slices/modalSlice";

// assets
import altImage from "assets/images/alt.jpeg";

const ActivityCard = memo(
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
      WebsiteUrl,
      Position
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
      website: WebsiteUrl,
      position: Position
    };

    const dispatch = useDispatch();
    let thumbnail = Object.values(Picture)[0];

    return (
      <>
        <div className="relative bg-white flex w-full min-h-[150px] p-4 shadow before:shadow-corner-r after:shadow-corner-l  
                        md:w-[calc(50%-27px)] lg:min-h-[228px] 
                       ">
          <img
            className="lazyload rounded block w-1/3 h-full max-h-[200px] object-cover mr-4 shadow hover:scale-110 duration-500"
            data-src={thumbnail ?? altImage}
            onClick={() => dispatch(openModal(payload))}
            alt={Name}
          />
          <div className="flex flex-col justify-between max-w-[calc(100%-33%-16px)]">
            <h4 className="font-semibold text-sm mb-[14px] lg:text-base">
              {Name}
            </h4>
            <p className="hidden mb-3 lg:line-clamp-5 lg:text-sm lg:text-gray-400">
              {Description}
            </p>
            <div className="flex items-center justify-between">
              <div className="lg:w-1/2 space-x-2">
                <LocationMarkerIcon className="w-1/12 text-custom-pink inline-block align-middle" />
                <h6 className="text-sm inline-block align-middle w-10/12">
                  {Location || "to see the official site"}
                </h6>
              </div>
              <button
                className="hidden lg:block lg:border lg:border-custom-pink lg:px-8 lg:py-2 lg:text-custom-pink lg:rounded-xl lg:text-sm lg:w-1/2 lg:hover:bg-custom-pink lg:hover:text-white"
                onClick={() => dispatch(openModal(payload))}
              >
                活動詳情
              </button>
            </div>
          </div>
        </div>
      </>
    );
  },
  (prevProps, nextProps) => {
    // if return true, the component won't re-render
    return prevProps.activity.ActivityID === nextProps.activity.ActivityID;
  }
);

export default ActivityCard;
