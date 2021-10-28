import { useQuery } from "react-query";
import { getLatestStartTimeAcitivities } from "api/activity";
import ActivityThumbnail from "./ActivityThumbnail";
const ActivityCollection = () => {
  const { isLoading, error, data } = useQuery(
    ["getLatestStartTimeAcitivities", 10],
    () => getLatestStartTimeAcitivities(10)
  );

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : (
    <div className="flex justify-between flex-wrap">
      {data
        .filter((activity) => Object.keys(activity.Picture).length > 0)
        .filter((activity, index) => index <= 3)
        .map((activity) => (
          <ActivityThumbnail activity={activity} key={activity.Name} />
        ))}
    </div>
  );
};

export default ActivityCollection;
