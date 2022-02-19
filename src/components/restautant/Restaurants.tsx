import { useState } from "react";
import { useQuery } from "react-query";

// api
import {
  getRestaurants,
  getRestaurantsByCity,
  getRestaurantsByKeyword,
} from "api/restaurant";

// components
import SubTitle from "../common/SubTitle";
import CardCollection from "components/common/CardCollection";
import Modal from "components/common/Modal";
import Container from "components/common/Container";
import Button from "components/common/Button";
import WarningMsg from "components/common/WarningMsg";
import Loading from "components/common/Loading";

//types
import { motcTourismRestaurant } from "types/tourism";

const Restaurant: React.FC<{
  city?: string | null;
  defaultCount?: number | null;
  keyword?: string | null;
}> = ({ city, defaultCount, keyword }) => {
  const [restaurantCount, setRestaurantCount] = useState<number>(
    defaultCount || 10
  );
  const { isLoading, error, data }: any = useQuery(
    [
      city
        ? `getRestaurantsByCity/${city}`
        : keyword
        ? `getRestaurantsByKeyword/${keyword}`
        : "getRestaurants",
      restaurantCount,
    ],
    () =>
      city
        ? getRestaurantsByCity(restaurantCount, city)
        : keyword
        ? getRestaurantsByKeyword(restaurantCount, keyword)
        : getRestaurants(restaurantCount),
    { keepPreviousData: true }
  ) as {
    isLoading: boolean;
    error: { message: string };
    data: motcTourismRestaurant;
  };

  const loadMoreRestaurant = () => {
    setRestaurantCount(restaurantCount + 10);
  };

  return (
    <Container>
      <SubTitle subTitle="熱門餐飲" icon="rectangle" />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <WarningMsg message={error.message} />
      ) : data.length > 0 ? (
        <>
          <CardCollection data={data} />
          {data.length >= restaurantCount && (
            <div className="text-center">
              <Button onClick={loadMoreRestaurant} title={"Load More"} />
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

export default Restaurant;
