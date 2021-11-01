import { useState } from "react";
import { useQuery } from "react-query";
import { getNewestAcitivities } from "api/activity";
import ActivityThumbnail from "./ActivityThumbnail";

const ActivityCollection = () => {
  const [activityCount, setActivityCount] = useState(10);
  const { isLoading, error, data } = useQuery(
    ["getNewestAcitivities", activityCount],
    () => getNewestAcitivities(activityCount)
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
      <div className="flex justify-between flex-wrap">
        {data
          .filter((activity) => Object.keys(activity.Picture).length > 0)
          .map((activity) => (
            <ActivityThumbnail activity={activity} key={activity.Name} />
          ))}
      </div>
      <div className="text-center">
        <button
          className="text-sm cursor-pointer bg-custom-pink text-white px-5 py-2 rounded-lg shadow hover:bg-white 
                          hover:text-custom-pink hover:border hover:border-custom-pink"
          onClick={loadMoreActivity}
        >
          Load More...
        </button>
      </div>
    </>
  );
};

export default ActivityCollection;
