import { useState } from "react";
import { useQuery } from "react-query";
// api
import {
  getNewestAcitivities,
  getNewestAcitivitiesByCity,
  getNewestAcitivitiesByKeyword,
} from "api/activity";
// components
import ActivityCard from "./ActivityCard";
import WarningMsg from "components/common/WarningMsg";
import Loading from "components/common/Loading";
import Button from "components/common/Button";

interface Activity {
  ActivityID: string;
  ActivityName: string;
  Address?: string;
  Charge?: string;
  City: string;
  Class1?: string;
  Description?: string;
  EndTime?: string;
  Name: string;
  Organizer: string;
  Phone?: string;
  Picture: object;
  Position?: {
    PositionLat: string;
    PositionLon: string;
  };
  SrcUpdateTime?: string;
  StartTime?: string;
  Location?: string;
  Cycle?: string;
  NonCycle?: string;
  WebsiteUrl?: string;
}

const loadCityCount = 4;

const ActivityCardCollection: React.FC<{
  city?: string | null;
  defaultCount?: number | null;
  keyword?: string | null;
}> = ({ city, defaultCount, keyword }) => {
  const [activityCount, setActivityCount] = useState<number>(
    defaultCount || 10
  );
  const { isLoading, error, data }: any = useQuery(
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
        : getNewestAcitivities(activityCount),
    { keepPreviousData: true }
  );

  const loadMoreActivity = (): void => {
    setActivityCount(activityCount + loadCityCount);
  };

  return isLoading ? (
    <Loading />
  ) : error ? (
    <WarningMsg message={error.message} />
  ) : data.length > 0 ? (
    <>
      <div
        className="flex flex-wrap items-stretch justify-between gap-6 mb-6 
                      md:mb-12 lg:justify-start lg:gap-12"
      >
        {data.map((activity: Activity) => (
          <ActivityCard activity={activity} key={activity.ActivityID} />
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

export default ActivityCardCollection;
export type { Activity };
