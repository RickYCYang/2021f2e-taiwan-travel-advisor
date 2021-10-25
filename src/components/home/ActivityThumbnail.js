import { LocationMarkerIcon } from "@heroicons/react/solid";

const ActivityThumbnail = ({ activity }) => {
  const { Description, Location, Name, Picture, StartTime, EndTime } = activity;
  let photo = Object.values(Picture)[0];

  console.log(
    "Description, Location, Name, Picture, StartTime, EndTime",
    Description,
    Location,
    Name,
    Picture,
    StartTime,
    EndTime
  );
  return (
    <div className="mb-12 w-[calc(50%-27px)] relative flex p-4 bg-white h-[228px] shadow  after:shadow-corner-l before:shadow-corner-r">
      <img
        className="rounded block w-1/3 h-full object-cover mr-4"
        src={photo}
      />
      <div>
        <h4 className="font-semibold mb-[14px]">{Name}</h4>
        <article className="line-clamp-5 text-sm text-gray-400">
          {Description}
        </article>
        <LocationMarkerIcon className=" w-5 text-custom-pink" />
      </div>
    </div>
  );
};

export default ActivityThumbnail;
