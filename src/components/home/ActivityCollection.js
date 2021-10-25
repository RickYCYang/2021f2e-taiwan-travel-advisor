import { useQuery } from "react-query";
import { getFourLatestStartTimeAcitivities } from "api/activity";
import ActivityThumbnail from "./ActivityThumbnail";
const ActivityCollection = () => {
  const { isLoading, error, data } = useQuery(
    "getFourLatestStartTimeAcitivities",
    getFourLatestStartTimeAcitivities
  );

  console.log(isLoading, error, data);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div className="flex justify-between flex-wrap">
      {data
        .filter((activity) => Object.keys(activity.Picture).length > 0)
        .filter((activity, index) => index <= 3)
        .map((activity) => (
          <ActivityThumbnail activity={activity} />
        ))}
    </div>
  );
};

export default ActivityCollection;
