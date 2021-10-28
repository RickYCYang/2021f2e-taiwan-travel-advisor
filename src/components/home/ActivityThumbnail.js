import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
// components
import { LocationMarkerIcon } from "@heroicons/react/solid";

const ActivityThumbnail = ({ activity }) => {
  const { Description, Location, Name, Picture, StartTime, EndTime } = activity;
  let photo = Object.values(Picture)[0];

  return (
    <div className="mb-12 w-[calc(50%-27px)] relative flex p-4 bg-white h-[228px] shadow after:shadow-corner-l before:shadow-corner-r">
      <img
        className="lazyload rounded block w-1/3 h-full object-cover mr-4 shadow"
        data-src={photo}
      />
      <div>
        <h4 className="font-semibold mb-[14px]">{Name}</h4>
        <p className="line-clamp-5 text-sm text-gray-400 mb-3">{Description}</p>
        <div className="flex items-center justify-between">
          <div>
            <LocationMarkerIcon className=" w-5 text-custom-pink inline mr-3" />
            <h6 className="text-sm inline">{Location}</h6>
          </div>
          <button className="border border-custom-pink px-8 py-2 text-custom-pink rounded-xl text-sm hover:bg-custom-pink hover:text-white">
            活動詳情
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityThumbnail;
