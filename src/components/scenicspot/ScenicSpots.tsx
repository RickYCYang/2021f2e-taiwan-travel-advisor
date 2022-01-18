import { useState } from "react";
import { useQuery } from "react-query";

// api
import {
  getScenicSpots,
  getScenicSpotsByCity,
  getScenicSpotsByKeyword,
} from "api/scenicspot";

// components
import SubTitle from "../common/SubTitle";
import CardCollection from "components/common/CardCollection";
import Modal from "components/common/Modal";
import Container from "components/common/Container";
import Button from "components/common/Button";
import WarningMsg from "components/common/WarningMsg";
import Loading from "components/common/Loading";

const ScenicSpots: React.FC<{
  city?: string | null;
  defaultCount?: number | null;
  keyword?: string | null;
}> = ({ city, defaultCount, keyword }) => {
  const [scenicSpotCount, setScenicSpotCount] = useState<number>(
    defaultCount || 10
  );
  const { isLoading, error, data }: any = useQuery(
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
        : getScenicSpots(scenicSpotCount),
    { keepPreviousData: true }
  );

  const loadMoreScenicSpots = () => {
    setScenicSpotCount(scenicSpotCount + 10);
  };

  return (
    <Container>
      <SubTitle subTitle="觀光景點" icon="triangle" />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <WarningMsg message={error.message} />
      ) : data.length > 0 ? (
        <>
          <CardCollection data={data} />
          {data.length >= scenicSpotCount && (
            <div className="text-center">
              <Button onClick={loadMoreScenicSpots} title={"Load More"} />
            </div>
          )}
        </>
      ) : (
        <WarningMsg />
      )}
      <Modal />
    </Container>
  );
};

export default ScenicSpots;
