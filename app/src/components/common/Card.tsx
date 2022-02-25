import { memo, MouseEventHandler } from "react";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
// components
import { LocationMarkerIcon } from "@heroicons/react/solid";
import ReactTooltip from "react-tooltip";
// assets
import altImage from "assets/images/alt.jpeg";

const Card: React.FC<{
  title: string;
  address?: string;
  picture?: string;
  city: string;
  onClick: MouseEventHandler;
}> = memo(
  ({ title, address, picture, city, onClick }) => {
    return (
      <div
        data-testid="card"
        className={`relative flex flex-col bg-white w-[calc(50%-8px)] shadow 
                    after:shadow-corner-l before:shadow-corner-r p-3 cursor-pointer 
                    md:w-[152px] lg:w-[206px] `}
        onClick={onClick}
      >
        <img
          className="lazyload rounded block w-full h-[128px] object-cover shadow transition 
                    hover:scale-110 duration-500 mb-[10px] lg:h-[137px]"
          data-src={picture ?? altImage}
          alt={title}
        />
        <h4 className="text-sm mb-2">{title}</h4>
        <div className="mt-auto space-x-2">
          <LocationMarkerIcon className="text-custom-pink w-1/12 inline-block align-middle" />
          <p
            className="text-custom-green text-xs flex-grow inline-block w-10/12 align-middle"
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
  },
  (prevProps, nextProps) => {
    // if return true, the component won't re-render
    return prevProps.title === nextProps.title;
  }
);

export default Card;
