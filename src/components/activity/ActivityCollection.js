import { useState } from "react";
import { useQuery } from "react-query";
import {
  getNewestAcitivities,
  getNewestAcitivitiesByCity,
  getNewestAcitivitiesByKeyword,
} from "api/activity";
import ActivityThumbnail from "./ActivityThumbnail";

const ActivityCollection = ({ city, defaultCount, keyword }) => {
  const [activityCount, setActivityCount] = useState(defaultCount || 10);
  const { isLoading, error, data } = useQuery(
    [
      city
        ? `getNewestAcitivitiesByCity/${city}`
        : keyword
        ? `getNewestAcitivitiesByKeyword/${keyword}`
        : "getNewestAcitivities",
      activityCount,
    ],
    () =>
      city
        ? getNewestAcitivitiesByCity(activityCount, city)
        : keyword
        ? getNewestAcitivitiesByKeyword(activityCount, keyword)
        : getNewestAcitivities(activityCount)
  );

  const loadMoreActivity = () => {
    setActivityCount(activityCount + 4);
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : (
    <>
      <div className="flex flex-wrap gap-12 mb-12">
        {data.map((activity, index) => (
          <ActivityThumbnail activity={activity} key={index} />
        ))}
      </div>
      {data.length < activityCount ? (
        ""
      ) : (
        <div className="text-center">
          <button
            className="text-sm cursor-pointer bg-custom-pink text-white px-5 py-2 rounded-lg shadow hover:bg-white 
                          hover:text-custom-pink hover:border hover:border-custom-pink"
            onClick={loadMoreActivity}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default ActivityCollection;
