import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
// components
import { LocationMarkerIcon } from "@heroicons/react/solid";
import ReactTooltip from "react-tooltip";
import altImage from "assets/images/alt.jpeg";

const Card = ({ title, address, picture, city, onClick }) => {
  return (
    <div
      className={`relative flex flex-col bg-white w-[206px] h-[243px] shadow after:shadow-corner-l before:shadow-corner-r p-3 cursor-pointer`}
      onClick={onClick}
    >
      <img
        className="lazyload rounded block w-full h-[137px] object-cover shadow mb-[10px] transition hover:scale-110 duration-500"
        data-src={picture ?? altImage}
        alt={title}
      />
      <h4 className="text-sm ">{title}</h4>
      <div className="mt-auto flex">
        <LocationMarkerIcon className="w-4 text-custom-pink inline mr-1 mt-auto" />
        <p
          className="text-custom-green text-xs inline line-clamp-1"
          data-for="main"
          data-tip={address ?? city}
          data-iscapture="true"
        >
          {address ?? city}
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

export default Card;
