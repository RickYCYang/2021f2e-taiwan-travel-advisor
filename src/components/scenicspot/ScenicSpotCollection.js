import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { openModal } from "redux/slices/modalSlice";

// api
import {
  getScenicSpots,
  getScenicSpotsByCity,
  getScenicSpotsByKeyword,
} from "api/scenicspot";

// components
import WarningMsg from "components/common/WarningMsg";
import Loading from "components/common/Loading";
import Card from "components/common/Card";
import Button from "components/common/Button";

const ScenicSpotCollection = ({ city, defaultCount, keyword }) => {
  const dispatch = useDispatch();
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
    <Loading />
  ) : error ? (
    <WarningMsg message={error.message} />
  ) : data.length > 0 ? (
    <>
      <div className="flex flex-wrap gap-x-2 gap-y-6 md:gap-y-12 mb-6 md:mb-12">
        {data.map((scenicSpot) => {
          const payload = {
            photos: Object.values(scenicSpot.Picture) || [],
            thumbnail: scenicSpot.Picture.PictureUrl1,
            title: scenicSpot.Name,
            description: scenicSpot.Description,
            phone: scenicSpot.Phone,
            address: scenicSpot.Address,
            time: scenicSpot.SrcUpdateTime,
            city: scenicSpot.City,
          };
          return (
            <Card
              key={scenicSpot.ID}
              title={payload.title}
              city={payload.City}
              address={payload.address}
              picture={payload.thumbnail}
              onClick={() => dispatch(openModal(payload))}
            />
          );
        })}
      </div>
      {data.length < scenicSpotCount ? (
        ""
      ) : (
        <div className="text-center">
          <Button onClick={loadMoreScenicSpots} title={"Load More"} />
        </div>
      )}
    </>
  ) : (
    <WarningMsg />
  );
};

export default ScenicSpotCollection;
