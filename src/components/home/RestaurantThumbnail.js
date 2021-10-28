import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
// components
import { LocationMarkerIcon } from "@heroicons/react/solid";
import ReactTooltip from "react-tooltip";

const RestaurantThumbnail = ({ restaurant }) => {
  console.log("restaurant", restaurant);
  const { Name, Address, Picture } = restaurant;
  return (
    <div className="relative flex flex-col bg-white w-[206px] h-[243px] shadow after:shadow-corner-l before:shadow-corner-r p-3">
      <img
        className="lazyload rounded block w-full h-[137px] object-cover shadow mb-[10px]"
        data-src={Picture.PictureUrl1}
      />
      <h4 className="text-sm ">{Name}</h4>
      <div className="mt-auto flex">
        <LocationMarkerIcon className="w-4 text-custom-pink inline mr-1 mt-auto" />
        <p
          className="text-custom-green text-xs inline line-clamp-1"
          data-for="main"
          data-tip={Address}
          data-iscapture="true"
        >
          {Address}
        </p>
      </div>
      <ReactTooltip
        id="main"
        place={"top"}
        type={"light"}
        textColor="white"
        effect={"float"}
        backgroundColor="#007350"
        borderColor="#007350"
        multiline={false}
        className="rounded-xl"
      />
    </div>
  );
};

export default RestaurantThumbnail;
