import { useState } from "react";
import { useQuery } from "react-query";
import { getScenicSpots, getScenicSpotsByCity } from "api/scenicspot";

// components
import ScenicSpotThumbnail from "./ScenicSpotThumbnail";

const getApi = (city) => {
  if (!city) {
    return { apiKey: "getScenicSpots", apiFunc: getScenicSpots };
  } else {
    return {
      apiKey: `getScenicSpotsByCity/${city}`,
      apiFunc: getScenicSpotsByCity,
    };
  }
};

const ScenicSpotCollection = ({ city, defaultCount }) => {
  const [scenicSpotCount, setScenicSpotCount] = useState(defaultCount || 10);
  const { apiKey, apiFunc } = getApi(city);
  const { isLoading, error, data } = useQuery([apiKey, scenicSpotCount], () =>
    apiFunc(scenicSpotCount, city)
  );

  const loadMoreScenicSpots = () => {
    setScenicSpotCount(scenicSpotCount + 10);
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-12 mb-12">
        {data.map((scenicSpot) => (
          <ScenicSpotThumbnail scenicSpot={scenicSpot} key={scenicSpot.ID} />
        ))}
      </div>
      <div className="text-center">
        <button
          className="text-sm cursor-pointer bg-custom-pink text-white px-5 py-2 rounded-lg shadow hover:bg-white 
                      hover:text-custom-pink hover:border hover:border-custom-pink"
          onClick={loadMoreScenicSpots}
        >
          Load More
        </button>
      </div>
    </>
  );
};

export default ScenicSpotCollection;
