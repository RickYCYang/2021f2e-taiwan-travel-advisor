import { Link } from "react-router-dom";
/// components
import { LocationMarkerIcon } from "@heroicons/react/solid";

const Citythumbnail = ({ city, small }) => {
  const bgClass = getBackgroundImageClass(city.value);
  const heightClass = getHeightClass(small);
  const paddingYaxis = getPaddingYaxisClass(small);
  const paddingXaxis = getPaddingXaxisClass(small);

  return (
    <Link to={`/${city.value}`}>
      <div
        className={`bg-white ${paddingXaxis} ${paddingYaxis} mb-2 shadow cursor-pointer`}
      >
        <div
          className={`bg-cover ${bgClass} bg-no-repeat bg-center md:w-[159px] lg:w-[177px] ${heightClass}`}
        >
          <div className="bg-[rgba(0,0,0,0.2)] w-full h-full flex flex-col justify-center items-center space-y-2 group">
            <LocationMarkerIcon className="text-white w-5 group-hover:text-custom-pink" />
            <h3 className="text-white md:text-sm lg:text-xl group-hover:text-custom-pink">
              {city.label}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Citythumbnail;

const getHeightClass = (small) => {
  if (small) {
    return "lg:h-[106px] md:h-[92px]";
  } else {
    return "lg:h-[217px] md:h-[192px]";
  }
};

const getPaddingYaxisClass = (small) => {
  if (small) {
    return "lg:py-[7px] md:py-[5px]";
  } else {
    return "lg:py-[14px] md:py-[10px]";
  }
};

const getPaddingXaxisClass = (small) => {
  if (small) {
    return "lg:px-[8px] md:px-[5px]";
  } else {
    return "lg:px-[13px] md:px-[10px]";
  }
};

// since dynamic assemble background class name is not working,
// so the temporal solution is hardcode the class name
const getBackgroundImageClass = (city) => {
  switch (city) {
    case "ChanghuaCounty":
      return "bg-ChanghuaCounty";
    case "Chiayi":
      return "bg-Chiayi";
    case "ChiayiCounty":
      return "bg-ChiayiCounty";
    case "Hsinchu":
      return "bg-Hsinchu";
    case "HsinchuCounty":
      return "bg-HsinchuCounty";
    case "HualienCounty":
      return "bg-HualienCounty";
    case "Kaohsiung":
      return "bg-Kaohsiung";
    case "KinmenCounty":
      return "bg-KinmenCounty";
    case "Keelung":
      return "bg-Keelung";
    case "LienchiangCounty":
      return "bg-LienchiangCounty";
    case "MiaoliCounty":
      return "bg-MiaoliCounty";
    case "NantouCounty":
      return "bg-NantouCounty";
    case "NewTaipei":
      return "bg-NewTaipei";
    case "PenghuCounty":
      return "bg-PenghuCounty";
    case "PingtungCounty":
      return "bg-PingtungCounty";
    case "Taichung":
      return "bg-Taichung";
    case "Tainan":
      return "bg-Tainan";
    case "Taipei":
      return "bg-Taipei";
    case "TaitungCounty":
      return "bg-TaitungCounty";
    case "Taoyuan":
      return "bg-Taoyuan";
    case "YilanCounty":
      return "bg-YilanCounty";
    case "YunlinCounty":
      return "bg-YunlinCounty";
    default:
      return null;
  }
};
