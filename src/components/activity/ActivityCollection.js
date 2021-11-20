import { useState } from "react";
import { useQuery } from "react-query";

// api
import {
  getNewestAcitivities,
  getNewestAcitivitiesByCity,
  getNewestAcitivitiesByKeyword,
} from "api/activity";

// components
import ActivityThumbnail from "./ActivityThumbnail";
import WarningMsg from "components/common/WarningMsg";
import Loading from "components/common/Loading";

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
    <Loading />
  ) : error ? (
    <WarningMsg message={error.message} />
  ) : data.length > 0 ? (
    <>
      <div className="flex flex-wrap items-center justify-between lg:justify-start gap-6 lg:gap-12 mb-12">
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
  ) : (
    <WarningMsg />
  );
};

export default ActivityCollection;
