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
import Button from "components/common/Button";

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
      <div className="flex flex-wrap items-center justify-between lg:justify-start gap-6 lg:gap-12 mb-6 md:mb-12">
        {data.map((activity, index) => (
          <ActivityThumbnail activity={activity} key={index} />
        ))}
      </div>
      {data.length < activityCount ? (
        ""
      ) : (
        <div className="text-center">
          <Button title="Load More" onClick={loadMoreActivity} />
        </div>
      )}
    </>
  ) : (
    <WarningMsg />
  );
};

export default ActivityCollection;
