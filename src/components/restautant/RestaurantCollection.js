import { useQuery } from "react-query";
import { getRestaurants } from "api/restaurant";

// components
import RestaurantThumbnail from "./RestaurantThumbnail";

const RestaurantCollection = () => {
  const { isLoading, error, data } = useQuery(["getRestaurants", 10], () =>
    getRestaurants(10)
  );

  return isLoading ? (
    <h1>Loading...</h1>
  ) : error ? (
    <h1>{error.message}</h1>
  ) : (
    <div className="flex justify-between flex-wrap gap-x-2 gap-y-12">
      {data.map((restaurant) => (
        <RestaurantThumbnail restaurant={restaurant} key={restaurant.ID} />
      ))}
    </div>
  );
};

export default RestaurantCollection;
