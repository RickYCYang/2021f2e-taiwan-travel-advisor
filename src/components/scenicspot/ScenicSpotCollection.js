import { useState } from "react";
import { useQuery } from "react-query";
import {
  getScenicSpots,
  getScenicSpotsByCity,
  getScenicSpotsByKeyword,
} from "api/scenicspot";

// components
import ScenicSpotThumbnail from "./ScenicSpotThumbnail";
import WarningMsg from "components/common/WarningMsg";

const ScenicSpotCollection = ({ city, defaultCount, keyword }) => {
  const [scenicSpotCount, setScenicSpotCount] = useState(defaultCount || 10);
  const { isLoading, error, data } = useQuery(
    [
      city
        ? `getScenicSpotsByCity/${city}`
        : keyword
        ? `getScenicSpotsByKeyword/${keyword}`
        : "getScenicSpots",
      scenicSpotCount,
    ],
    () =>
      city
        ? getScenicSpotsByCity(scenicSpotCount, city)
        : keyword
        ? getScenicSpotsByKeyword(scenicSpotCount, keyword)
        : getScenicSpots(scenicSpotCount)
  );

  const loadMoreScenicSpots = () => {
    setScenicSpotCount(scenicSpotCount + 10);
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : data.length > 0 ? (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-12 mb-12">
        {data.map((scenicSpot) => (
          <ScenicSpotThumbnail scenicSpot={scenicSpot} key={scenicSpot.ID} />
        ))}
      </div>
      {data.length < scenicSpotCount ? (
        ""
      ) : (
        <div className="text-center">
          <button
            className="text-sm cursor-pointer bg-custom-pink text-white px-5 py-2 rounded-lg shadow hover:bg-white 
                      hover:text-custom-pink hover:border hover:border-custom-pink"
            onClick={loadMoreScenicSpots}
          >
            Load More
          </button>
        </div>
      )}
    </>
  ) : (
    <WarningMsg />
  );
};

export default ScenicSpotCollection;
