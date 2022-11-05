import { useState } from 'react';
import { useQuery } from 'react-query';

// api
import {
  getScenicSpots,
  getScenicSpotsByCity,
  getScenicSpotsByKeyword,
} from 'api/scenicspot';

// components
import SubTitle from '../common/SubTitle';
import CardCollection from 'components/common/CardCollection';
import Modal from 'components/common/Modal';
import Container from 'components/common/Container';
import Button from 'components/common/Button';
import WarningMsg from 'components/common/WarningMsg';
import Loading from 'components/common/Loading';

// types
import { motcTourismScenicSpot, motcTourismType } from 'types/tourism';

interface ScenicSpotsProp {
  city?: string;
  defaultCount?: number;
  keyword?: string | null;
}

const ScenicSpots = ({ city, defaultCount, keyword }: ScenicSpotsProp) => {
  const [scenicSpotCount, setScenicSpotCount] = useState<number>(
    defaultCount || 10
  );
  const { isLoading, error, data } = useQuery(
    [
      city
        ? `getScenicSpotsByCity/${city}`
        : keyword
        ? `getScenicSpotsByKeyword/${keyword}`
        : 'getScenicSpots',
      scenicSpotCount,
    ],
    () =>
      city
        ? getScenicSpotsByCity(scenicSpotCount, city)
        : keyword
        ? getScenicSpotsByKeyword(scenicSpotCount, keyword)
        : getScenicSpots(scenicSpotCount),
    { keepPreviousData: true }
  ) as {
    isLoading: boolean;
    error: { message: string };
    data: motcTourismScenicSpot[];
  };

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
          <CardCollection
            data={data.map((scenicSpot) => ({
              ...scenicSpot,
              type: motcTourismType.scenicSpot,
            }))}
          />
          {data.length >= scenicSpotCount && (
            <div className="text-center">
              <Button onClick={loadMoreScenicSpots} title={'Load More'} />
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
